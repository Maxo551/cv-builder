"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    Search, Filter, Download, LogOut, ChevronLeft, ChevronRight,
    User, Briefcase, Clock, CheckCircle2, XCircle, PauseCircle, Send, Trash2, Car
} from "lucide-react";
import { cn } from "@/lib/utils";
import * as XLSX from "xlsx";
import { format } from "date-fns";

const STATUS_CONFIG: any = {
    NEW: { label: "Nový", color: "bg-blue-100 text-blue-700", icon: <Clock className="w-4 h-4" /> },
    CONTACTED: { label: "Kontaktovaný", color: "bg-yellow-100 text-yellow-700", icon: <Send className="w-4 h-4" /> },
    SENT: { label: "Poslaný zamestnávateľovi", color: "bg-purple-100 text-purple-700", icon: <User className="w-4 h-4" /> },
    HIRED: { label: "Prijatý", color: "bg-emerald-100 text-emerald-700", icon: <CheckCircle2 className="w-4 h-4" /> },
    STARTED: { label: "Nastúpil", color: "bg-teal-100 text-teal-700", icon: <Briefcase className="w-4 h-4" /> },
    REJECTED: { label: "Zamietnutý", color: "bg-rose-100 text-rose-700", icon: <XCircle className="w-4 h-4" /> },
    UNAVAILABLE: { label: "Nedostupný", color: "bg-slate-100 text-slate-700", icon: <PauseCircle className="w-4 h-4" /> },
};

const INDUSTRIES = [
    "Administrativa", "Gastro", "Drevo výroba", "Strojárstvo", "Doprava",
    "Zdravotníctvo", "Služby", "Hotelierstvo", "Školstvo", "Poľnohospodárstvo", "Iné",
];

export default function AdminDashboardPage() {
    const router = useRouter();
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({ currentPage: 1, pages: 1, total: 0 });
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("");
    const [minExp, setMinExp] = useState(0);
    const [eduLevel, setEduLevel] = useState("");
    const [industry, setIndustry] = useState("");
    const [hasLicense, setHasLicense] = useState(false);
    const [page, setPage] = useState(1);

    const fetchCandidates = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                query, status,
                minExp: minExp.toString(),
                eduLevel, industry,
                hasLicense: hasLicense.toString(),
                page: page.toString(), limit: "10"
            });
            const res = await fetch(`/api/admin/candidates?${params}`);
            const data = await res.json();
            if (data.success) {
                setCandidates(data.candidates);
                setPagination(data.pagination);
            }
        } catch (error) {
            console.error("Chyba pri načítaní", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchCandidates(); }, [page, status, minExp, eduLevel, industry, hasLicense]);

    const handleSearch = (e: React.FormEvent) => { e.preventDefault(); setPage(1); fetchCandidates(); };

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Naozaj chcete vymazať kandidáta ${name}? Táto akcia je nevratná.`)) return;
        setDeletingId(id);
        try {
            const res = await fetch(`/api/admin/candidates/${id}`, { method: "DELETE" });
            if (res.ok) fetchCandidates();
            else alert("Vymazanie zlyhalo");
        } catch {
            alert("Chyba pri vymazaní");
        } finally {
            setDeletingId(null);
        }
    };

    const handleExport = async () => {
        try {
            const params = new URLSearchParams({ query, status, minExp: minExp.toString(), eduLevel, industry, hasLicense: hasLicense.toString() });
            const res = await fetch(`/api/admin/candidates/export?${params}`);
            const result = await res.json();
            if (result.success && result.data.length > 0) {
                const worksheet = XLSX.utils.json_to_sheet(result.data);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Kandidáti");
                const timestamp = format(new Date(), "yyyy-MM-dd_HHmm");
                XLSX.writeFile(workbook, `Kandidati_Export_${timestamp}.xlsx`);
            } else {
                alert("Žiadne dáta na export");
            }
        } catch {
            alert("Export zlyhal");
        }
    };

    const handleLogout = async () => {
        try { await fetch("/api/auth/logout", { method: "POST" }); } catch {}
        router.push("/admin/login");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-slate-200 p-6 flex flex-col h-screen sticky top-0 overflow-y-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
                    <h1 className="font-bold text-slate-900 text-xl tracking-tight">AdminPanel</h1>
                </div>

                <div className="space-y-7 flex-1">
                    {/* Status filter */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Stav</label>
                        <div className="space-y-1">
                            <button onClick={() => setStatus("")} className={cn("w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition", status === "" ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50")}>
                                Všetci kandidáti
                            </button>
                            {Object.entries(STATUS_CONFIG).map(([key, cfg]: any) => (
                                <button key={key} onClick={() => setStatus(key)}
                                    className={cn("w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2", status === key ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50")}>
                                    <span className={cn("p-1 rounded-md", status === key ? "bg-blue-100" : "bg-slate-100")}>{cfg.icon}</span>
                                    {cfg.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Industry filter */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Odvetvie</label>
                        <select className="w-full px-3 py-2 border rounded-lg text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                            value={industry} onChange={(e) => { setIndustry(e.target.value); setPage(1); }}>
                            <option value="">Všetky odvetvia</option>
                            {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                        </select>
                    </div>

                    {/* License filter */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Vodičský preukaz</label>
                        <button
                            onClick={() => { setHasLicense(!hasLicense); setPage(1); }}
                            className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium border-2 transition",
                                hasLicense ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:border-slate-300")}
                        >
                            <Car className="w-4 h-4" />
                            {hasLicense ? "✓ Len s vodičákom" : "Všetci (s/bez vodičáka)"}
                        </button>
                    </div>

                    {/* Experience filter */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Minimálna prax</label>
                        <input type="range" min="0" max="20" value={minExp}
                            onChange={(e) => setMinExp(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                        <div className="flex justify-between text-xs text-slate-500 mt-2 font-bold">
                            <span>{minExp} rok{minExp === 1 ? "" : minExp < 5 ? "y" : "ov"}</span>
                            <span>20+ rokov</span>
                        </div>
                    </div>

                    {/* Education filter */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Vzdelanie</label>
                        <select className="w-full px-3 py-2 border rounded-lg text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                            value={eduLevel} onChange={(e) => setEduLevel(e.target.value)}>
                            <option value="">Akékoľvek</option>
                            <option value="PRIMARY">Základné</option>
                            <option value="HIGH_SCHOOL">Stredná škola</option>
                            <option value="HIGH_SCHOOL_GRADUATION">Maturita</option>
                            <option value="BACHELOR">Bakalár</option>
                            <option value="MASTER">Magister</option>
                            <option value="PHD">PhD</option>
                        </select>
                    </div>
                </div>

                <button onClick={handleLogout} className="mt-6 flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition font-bold text-sm">
                    <LogOut className="w-5 h-5" />
                    Odhlásiť sa
                </button>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between sticky top-0 z-10">
                    <form onSubmit={handleSearch} className="relative w-full max-w-xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="text"
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-slate-900 outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                            placeholder="Hľadať podľa mena, emailu, pozície, vodičák, gastro..."
                            value={query} onChange={(e) => setQuery(e.target.value)} />
                    </form>
                    <button onClick={handleExport}
                        className="ml-4 flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition shadow-lg">
                        <Download className="w-4 h-4" /> Export XLSX
                    </button>
                </header>

                <div className="p-8 pb-20">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Kandidát</th>
                                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Pozícia</th>
                                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Prax</th>
                                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Stav</th>
                                    <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Akcie</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {loading ? (
                                    [...Array(5)].map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td colSpan={5} className="px-6 py-10 bg-white" />
                                        </tr>
                                    ))
                                ) : candidates.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center text-slate-400 italic font-medium">
                                            Nenašli sa žiadni kandidáti zodpovedajúci filtrom.
                                        </td>
                                    </tr>
                                ) : (
                                    candidates.map((c: any) => (
                                        <tr key={c.id} className="hover:bg-slate-50/50 transition">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-black text-lg">
                                                        {c.firstName[0]}{c.lastName[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">{c.firstName} {c.lastName}</p>
                                                        <p className="text-sm text-slate-500">{c.email}</p>
                                                        {c.hasDriversLicense && (
                                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded mt-1">
                                                                <Car className="w-3 h-3" /> Vodičský preukaz
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2 text-slate-600 font-medium">
                                                    <Briefcase className="w-4 h-4 text-slate-400" />
                                                    <div>
                                                        <p>{c.desiredPosition}</p>
                                                        {c.workExperience?.[0]?.industry && (
                                                            <p className="text-xs text-slate-400">{c.workExperience[0].industry}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <Clock className="w-4 h-4 text-slate-400" />
                                                    <span className="font-bold text-slate-900">{c.totalExperienceYears}r</span>
                                                    <span className="text-sm text-slate-400">({c.totalExperienceMonths}m)</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className={cn("px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 w-fit", STATUS_CONFIG[c.adminStatus]?.color ?? "bg-slate-100 text-slate-600")}>
                                                    {STATUS_CONFIG[c.adminStatus]?.icon}
                                                    {STATUS_CONFIG[c.adminStatus]?.label ?? c.adminStatus}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex items-center gap-2 justify-end">
                                                    <Link href={`/admin/candidate/${c.id}`}
                                                        className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition shadow-sm">
                                                        Zobraziť
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(c.id, `${c.firstName} ${c.lastName}`)}
                                                        disabled={deletingId === c.id}
                                                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition disabled:opacity-50"
                                                        title="Vymazať kandidáta"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {pagination.pages > 1 && (
                        <div className="mt-8 flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
                            <p className="text-sm text-slate-500 font-medium whitespace-nowrap">
                                Zobrazujem <span className="text-slate-900 font-bold">{(page - 1) * 10 + 1}–{Math.min(page * 10, pagination.total)}</span> z <span className="text-slate-900 font-bold">{pagination.total}</span> kandidátov
                            </p>
                            <div className="flex gap-2">
                                <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
                                    className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 disabled:opacity-30 transition">
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                {[...Array(pagination.pages)].map((_, i) => (
                                    <button key={i} onClick={() => setPage(i + 1)}
                                        className={cn("w-10 h-10 rounded-xl font-bold text-sm transition", page === i + 1 ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-100")}>
                                        {i + 1}
                                    </button>
                                ))}
                                <button disabled={page === pagination.pages} onClick={() => setPage(p => p + 1)}
                                    className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 disabled:opacity-30 transition">
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
