import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default async function CandidateSharePage({ params }: { params: { token: string } }) {
    const candidate = await prisma.candidate.findUnique({
        where: { shareToken: params.token },
        include: {
            workExperience: { orderBy: { startDate: "desc" } },
            education: { orderBy: { startDate: "desc" } },
            skills: { include: { skill: true } },
            languages: { include: { language: true } },
            certificates: { orderBy: { year: "desc" } },
        },
    });

    if (!candidate) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
                {/* Header / Basic Info */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                {candidate.firstName} {candidate.lastName}
                            </h1>
                            <p className="text-xl md:text-2xl mt-2 text-blue-100 font-medium">
                                {candidate.desiredPosition}
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0 space-y-2 text-blue-50 text-right">
                            <p className="flex items-center md:justify-end gap-2">
                                <span>📧</span> {candidate.email}
                            </p>
                            {candidate.phone && (
                                <p className="flex items-center md:justify-end gap-2">
                                    <span>📱</span> {candidate.phone}
                                </p>
                            )}
                            <p className="flex items-center md:justify-end gap-2">
                                <span>📍</span> {candidate.city}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Experience */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2 mb-6 inline-block">
                                Work Experience
                            </h2>
                            <div className="space-y-8">
                                {candidate.workExperience.map((exp: any) => (
                                    <div key={exp.id} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200">
                                        <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600" />
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-xl font-bold text-slate-800">{exp.position}</h3>
                                            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                                {format(exp.startDate, "MMM yyyy")} - {exp.isCurrent ? "Present" : exp.endDate ? format(exp.endDate, "MMM yyyy") : "N/A"}
                                            </span>
                                        </div>
                                        <p className="text-lg text-slate-600 font-medium mb-3">{exp.company}</p>
                                        {exp.description && (
                                            <p className="text-slate-600 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 border-b-4 border-emerald-500 pb-2 mb-6 inline-block">
                                Education
                            </h2>
                            <div className="space-y-6">
                                {candidate.education.map((edu: any) => (
                                    <div key={edu.id}>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-lg font-bold text-slate-800">{edu.field}</h3>
                                            <span className="text-xs font-bold text-slate-500">
                                                {format(edu.startDate, "yyyy")} - {edu.isCurrent ? "Present" : edu.endDate ? format(edu.endDate, "yyyy") : "N/A"}
                                            </span>
                                        </div>
                                        <p className="text-slate-600">{edu.school} • <span className="text-xs font-bold uppercase tracking-wider">{edu.level.replace("_", " ")}</span></p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-12">
                        {/* Experience Summary */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Experience Summary</h3>
                            <div className="text-3xl font-black text-slate-900">
                                {candidate.totalExperienceYears} Years
                            </div>
                            <p className="text-slate-500 text-sm mt-1">Total combined professional experience</p>
                        </div>

                        {/* Skills */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {candidate.skills.map((cs: any) => (
                                    <span key={cs.id} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                                        {cs.skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Languages</h3>
                            <div className="space-y-3">
                                {candidate.languages.map((cl: any) => (
                                    <div key={cl.id} className="flex justify-between items-center">
                                        <span className="font-medium text-slate-700">{cl.language.name}</span>
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-bold">{cl.level}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* License */}
                        {candidate.hasDriversLicense && (
                            <section>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Driver's License</h3>
                                <div className="flex gap-2 flex-wrap">
                                    {candidate.driversLicenseTypes.map((t: string) => (
                                        <span key={t} className="w-8 h-8 flex items-center justify-center bg-slate-900 text-white rounded-full font-bold text-xs">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Certificates */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Certificates</h3>
                            <div className="space-y-4">
                                {candidate.certificates.map((cert: any) => (
                                    <div key={cert.id} className="text-sm">
                                        <p className="font-bold text-slate-800">{cert.name}</p>
                                        <p className="text-slate-500">{cert.organization} ({cert.year})</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <footer className="max-w-4xl mx-auto mt-12 flex justify-between items-center px-4 md:px-0">
                <p className="text-slate-400 text-xs">Generated by CV Click Builder</p>
                <Link href="/admin/login" className="text-slate-400 text-xs hover:text-blue-600 transition underline underline-offset-4">
                    Are you the owner? Sign in
                </Link>
            </footer>
        </div>
    );
}
