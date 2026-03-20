"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft, Mail, Phone, MapPin, Briefcase, Save, Clock, Trash2,
    CheckCircle2, XCircle, PauseCircle, Send, Filter, User, GraduationCap, Car, ExternalLink
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const STATUS_CONFIG: any = {
    NEW: { label: "Nový", color: "bg-blue-100 text-blue-700", icon: <Clock className="w-4 h-4" /> },
    CONTACTED: { label: "Kontaktovaný", color: "bg-yellow-100 text-yellow-700", icon: <Send className="w-4 h-4" /> },
    SENT: { label: "Poslaný zamestnávateľovi", color: "bg-purple-100 text-purple-700", icon: <User className="w-4 h-4" /> },
    HIRED: { label: "Prijatý", color: "bg-emerald-100 text-emerald-700", icon: <CheckCircle2 className="w-4 h-4" /> },
    STARTED: { label: "Nastúpil", color: "bg-teal-100 text-teal-700", icon: <Briefcase className="w-4 h-4" /> },
    REJECTED: { label: "Zamietnutý", color: "bg-rose-100 text-rose-700", icon: <XCircle className="w-4 h-4" /> },
    UNAVAILABLE: { label: "Nedostupný", color: "bg-slate-100 text-slate-700", icon: <PauseCircle className="w-4 h-4" /> },
};

const EDU_LABELS: any = {
    PRIMARY: "Základné", HIGH_SCHOOL: "Stredná škola", HIGH_SCHOOL_GRADUATION: "Maturita",
    BACHELOR: "Bakalár", MASTER: "Magister", PHD: "PhD",
};

export default function CandidateDetailPage({ params }: { params: { id: string } }) {
    const [candidate, setCandidate] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [id, setId] = useState<string>("");
    const [status, setStatus] = useState("");
    const [notes, setNotes] = useState("");
    const router = useRouter();

    useEffect(() => { if (params?.id) setId(params.id); }, [params]);

    useEffect(() => {
        if (!id) return;
        const fetchCandidate = async () => {
            try {
                const res = await fetch(`/api/admin/candidates/${id}`);
                const data = await res.json();
                if (data.success) {
                    setCandidate(data.candidate);
                    setStatus(data.candidate.adminStatus || "NEW");
                    setNotes(data.candidate.adminNote || "");
                }
            } catch (err) { console.error(err); } finally { setLoading(false); }
        };
        fetchCandidate();
    }, [id]);

    const handleUpdate = async () => {
        setUpdating(true);
        try {
            const res = await fetch(`/api/admin/candidates/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status, internalNotes: notes }),
            });
            if (res.ok) alert("Uložené úspešne");
            else alert("Uloženie zlyhalo");
        } catch { alert("Chyba pri ukladaní"); } finally { setUpdating(false); }
    };

    const handleDelete = async () => {
        if (!candidate) return;
        if (!confirm(`Naozaj chcete vymazať kandidáta ${candidate.firstName} ${candidate.lastName}? Táto akcia je nevratná.`)) return;
        setDeleting(true);
        try {
            const res = await fetch(`/api/admin/candidates/${id}`, { method: "DELETE" });
            if (res.ok) router.push("/admin/dashboard");
            else alert("Vymazanie zlyhalo");
        } catch { alert("Chyba pri vymazaní"); } finally { setDeleting(false); }
    };

    if (loading) return <div className="p-8 flex items-center justify-center min-h-screen"><div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>;
    if (!candidate) return <div className="p-8 text-center text-slate-500">Kandidát nenájdený.</div>;

    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-6">
                    <Link href="/admin/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-500">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">{candidate.firstName} {candidate.lastName}</h1>
                        <p className="text-sm text-slate-500 font-medium">{candidate.desiredPosition}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button onClick={handleDelete} disabled={deleting}
                        className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 border border-red-200 rounded-xl font-bold text-sm hover:bg-red-100 transition disabled:opacity-50">
                        <Trash2 className="w-4 h-4" />
                        {deleting ? "Vymazávam..." : "Vymazať"}
                    </button>
                    <button onClick={handleUpdate} disabled={updating}
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition shadow-lg disabled:bg-blue-400">
                        {updating ? "Ukladám..." : <><Save className="w-4 h-4" /> Uložiť zmeny</>}
                    </button>
                </div>
            </nav>

            <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Management */}
                <div className="space-y-8">
                    <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Stav kandidáta</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.entries(STATUS_CONFIG).map(([key, cfg]: any) => (
                                <button key={key} onClick={() => setStatus(key)}
                                    className={cn("flex flex-col items-center justify-center p-3 rounded-xl border-2 transition gap-1",
                                        status === key ? cn("border-transparent ring-2 ring-blue-500", cfg.color) : "border-slate-100 bg-white text-slate-600 hover:border-blue-100")}>
                                    <span className="p-1 rounded-full bg-white/50">{cfg.icon}</span>
                                    <span className="text-[10px] font-black uppercase tracking-wider">{cfg.label}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Interné poznámky</h2>
                        <textarea
                            className="w-full min-h-[300px] p-4 bg-slate-50 border-none rounded-2xl text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition text-sm leading-relaxed"
                            placeholder="Pridajte interné poznámky, spätnú väzbu z pohovoru..."
                            value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </section>
                </div>

                {/* Right: CV Data */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-slate-900 text-white p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-2">Prehľad kandidáta</p>
                                    <h3 className="text-3xl font-extrabold">{candidate.firstName} {candidate.lastName}</h3>
                                </div>
                                <Link href={`/candidate/share/${candidate.shareToken}`} target="_blank"
                                    className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition">
                                    Verejná stránka <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-6 text-sm">
                                <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> {candidate.email}</div>
                                {candidate.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-400" /> {candidate.phone}</div>}
                                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> {candidate.city}</div>
                                {candidate.hasDriversLicense && (
                                    <div className="flex items-center gap-2 text-green-400">
                                        <Car className="w-4 h-4" />
                                        Vodičský preukaz: {candidate.driversLicenseTypes?.join(", ") || "Áno"}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-8 space-y-12">
                            {/* Attachment */}
                            {candidate.attachments?.length > 0 && (
                                <section className="p-6 bg-slate-50 rounded-2xl border border-blue-100 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">📄</div>
                                        <div>
                                            <p className="font-bold text-slate-900">{candidate.attachments[0].fileName}</p>
                                            <p className="text-xs text-slate-500">{(candidate.attachments[0].fileSize / 1024 / 1024).toFixed(2)} MB</p>
                                        </div>
                                    </div>
                                    <a href={`/api/admin/attachments/${candidate.attachments[0].id}`}
                                        className="px-6 py-2.5 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition">
                                        Stiahnuť CV
                                    </a>
                                </section>
                            )}

                            {/* Work Experience */}
                            <section>
                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> Pracovné skúsenosti
                                </h4>
                                <div className="space-y-6">
                                    {candidate.workExperience.map((exp: any) => (
                                        <div key={exp.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100">
                                            <div className="absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full bg-slate-300" />
                                            <div className="flex justify-between flex-wrap gap-2">
                                                <div>
                                                    <p className="font-bold text-slate-900">{exp.position} @ {exp.company}</p>
                                                    {exp.industry && <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-1">{exp.industry}</span>}
                                                </div>
                                                <span className="text-xs font-bold text-slate-400">
                                                    {format(new Date(exp.startDate), "MMM yyyy")} – {exp.isCurrent ? "Súčasnosť" : exp.endDate ? format(new Date(exp.endDate), "MMM yyyy") : ""}
                                                </span>
                                            </div>
                                            {exp.description && <p className="text-sm text-slate-500 mt-2 leading-relaxed">{exp.description}</p>}
                                        </div>
                                    ))}
                                    {candidate.workExperience.length === 0 && <p className="text-slate-400 italic text-sm">Žiadne pracovné skúsenosti</p>}
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" /> Vzdelanie
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {candidate.education.map((edu: any) => (
                                        <div key={edu.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                            <p className="font-bold text-slate-900 text-sm">{edu.field}</p>
                                            <p className="text-xs text-slate-500 mt-1">{edu.school}</p>
                                            <div className="mt-3 flex justify-between items-center">
                                                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-black">{EDU_LABELS[edu.level] || edu.level}</span>
                                                <span className="text-[10px] text-slate-400">{format(new Date(edu.startDate), "yyyy")} – {edu.isCurrent ? "Súčasnosť" : edu.endDate ? format(new Date(edu.endDate), "yyyy") : ""}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Skills & Languages */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <section>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Zručnosti</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {candidate.skills.map((cs: any) => (
                                            <span key={cs.id} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold">{cs.skill.name}</span>
                                        ))}
                                        {candidate.skills.length === 0 && <p className="text-slate-400 italic text-sm">Žiadne zručnosti</p>}
                                    </div>
                                </section>
                                <section>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Jazyky</h4>
                                    <div className="space-y-2">
                                        {candidate.languages.map((cl: any) => (
                                            <div key={cl.id} className="flex justify-between items-center p-2 bg-slate-50 rounded-lg border border-slate-100">
                                                <span className="text-xs font-bold text-slate-700">{cl.language.name}</span>
                                                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase">{cl.level}</span>
                                            </div>
                                        ))}
                                        {candidate.languages.length === 0 && <p className="text-slate-400 italic text-sm">Žiadne jazyky</p>}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
