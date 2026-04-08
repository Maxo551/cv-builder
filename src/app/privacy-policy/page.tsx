"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const SK = () => (
    <div className="space-y-8 text-slate-700 leading-relaxed">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Zásady spracúvania osobných údajov</h1>
            <p className="text-slate-500 text-sm">Platné pre RELATED SERVICES s.r.o.</p>
        </div>

        <p>
            Tento dokument upravuje zásady spracúvania a ochrany osobných údajov v súlade s nariadením Európskeho parlamentu
            a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov
            (ďalej len „GDPR") a zákonom č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov.
        </p>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">I. Identifikácia prevádzkovateľa</h2>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-1 text-sm">
                <p><strong>Obchodné meno:</strong> RELATED SERVICES s.r.o.</p>
                <p><strong>Sídlo:</strong> Ul. Garbiarska 4, 031 01 Liptovský Mikuláš</p>
                <p><strong>IČO:</strong> 47 699 809</p>
                <p><strong>DIČ:</strong> 2024068981</p>
                <p><strong>Zápis:</strong> Spoločnosť zapísal Okresný súd Žilina do Obchodného registra pod číslom Sro/66922/L</p>
                <p><strong>E-mail:</strong> info@relatedservices.sk</p>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">II. Účely a právne základy spracúvania osobných údajov</h2>
            <p className="mb-4">Prevádzkovateľ spracúva osobné údaje dotknutých osôb výlučne v nevyhnutnom rozsahu a na nasledujúce účely:</p>

            <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-slate-900 mb-1">1. Asistencia pri tvorbe životopisov</h3>
                    <p className="text-sm mb-1"><strong>Účel:</strong> Spracovanie a vytvorenie životopisu</p>
                    <p className="text-sm mb-1"><strong>Rozsah údajov:</strong> Meno, priezvisko, dátum narodenia, adresa pobytu, e-mailová adresa, telefónne číslo, údaje o dosiahnutom vzdelaní a predchádzajúcich pracovných skúsenostiach.</p>
                    <p className="text-sm"><strong>Právny základ:</strong> Čl. 6 ods. 1 písm. b) GDPR (opatrenia pred uzatvorením zmluvy) a súhlas dotknutej osoby.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-slate-900 mb-1">2. Sprostredkovanie pracovnej príležitosti</h3>
                    <p className="text-sm mb-1"><strong>Účel:</strong> Komunikácia s potenciálnymi zamestnávateľmi</p>
                    <p className="text-sm mb-1"><strong>Rozsah údajov:</strong> Kontaktné a identifikačné údaje</p>
                    <p className="text-sm"><strong>Právny základ:</strong> Čl. 6 ods. 1 písm. b) GDPR (plnenie zmluvy) a čl. 6 ods. 1 písm. c) GDPR (zákonná povinnosť).</p>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">III. Príjemcovia osobných údajov</h2>
            <p>Prevádzkovateľ neuskutočňuje prenos osobných údajov do tretích krajín mimo Európskeho hospodárskeho priestoru (EHP) ani do medzinárodných organizácií. Osobné údaje môžu byť v nevyhnutnom rozsahu poskytnuté:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-sm">
                <li>Poskytovateľom právnych, účtovných a daňových služieb</li>
                <li>Orgánom verejnej moci (napr. Finančná správa SR) v rámci plnenia zákonných povinností</li>
            </ul>
            <p className="mt-3 text-sm text-slate-500">Pri spracúvaní osobných údajov nedochádza k automatizovanému rozhodovaniu ani k profilovaniu.</p>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">IV. Doba uchovávania osobných údajov</h2>
            <div className="space-y-2 text-sm">
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span>Účtovné a daňové doklady</span>
                    <span className="font-bold">10 rokov</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span>Zmluvná dokumentácia</span>
                    <span className="font-bold">Do uplynutia premlčacích lehôt</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span>Údaje z komunikácie</span>
                    <span className="font-bold">Max. 6 mesiacov</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span>Databáza uchádzačov (so súhlasom)</span>
                    <span className="font-bold">5 rokov</span>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">V. Práva dotknutej osoby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                    ["Právo na prístup", "Čl. 15 GDPR"],
                    ["Právo na opravu", "Čl. 16 GDPR"],
                    ["Právo na výmaz", "Čl. 17 GDPR"],
                    ["Právo na obmedzenie spracúvania", "Čl. 18 GDPR"],
                    ["Právo na prenosnosť údajov", "Čl. 20 GDPR"],
                    ["Právo namietať", "Čl. 21 GDPR"],
                    ["Právo odvolať súhlas", "Čl. 7 ods. 3 GDPR"],
                ].map(([right, article]) => (
                    <div key={right} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                        <span>{right}</span>
                        <span className="text-xs font-bold text-blue-600">{article}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm">
                <p>Svoje práva si môžete uplatniť písomne na adrese sídla prevádzkovateľa alebo elektronicky na <strong>info@relatedservices.sk</strong>. Prevádzkovateľ vybaví žiadosť najneskôr do jedného mesiaca.</p>
                <p className="mt-2">Dozorný orgán: <strong>Úrad na ochranu osobných údajov SR</strong>, Hraničná 12, 820 07 Bratislava, statny.dozor@pdp.gov.sk</p>
            </div>
        </section>
    </div>
);

const EN = () => (
    <div className="space-y-8 text-slate-700 leading-relaxed">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">Applicable to RELATED SERVICES s.r.o.</p>
        </div>

        <p>
            This document governs the principles of processing and protection of personal data in accordance with Regulation (EU)
            2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing
            of personal data (hereinafter "GDPR") and Act No. 18/2018 Coll. on the Protection of Personal Data.
        </p>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">I. Data Controller</h2>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-1 text-sm">
                <p><strong>Company name:</strong> RELATED SERVICES s.r.o.</p>
                <p><strong>Registered office:</strong> Garbiarska 4, 031 01 Liptovský Mikuláš, Slovakia</p>
                <p><strong>Company ID (IČO):</strong> 47 699 809</p>
                <p><strong>VAT ID (DIČ):</strong> 2024068981</p>
                <p><strong>Registration:</strong> District Court Žilina, Commercial Register No. Sro/66922/L</p>
                <p><strong>Email:</strong> info@relatedservices.sk</p>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">II. Purposes and Legal Bases</h2>
            <p className="mb-4">The controller processes personal data solely to the extent necessary and for the following purposes:</p>
            <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-slate-900 mb-1">1. CV Creation Assistance</h3>
                    <p className="text-sm mb-1"><strong>Purpose:</strong> Processing and creation of a CV</p>
                    <p className="text-sm mb-1"><strong>Data scope:</strong> Name, surname, date of birth, address, email, phone number, education and work experience.</p>
                    <p className="text-sm"><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (pre-contractual measures) and consent of the data subject.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-slate-900 mb-1">2. Job Placement</h3>
                    <p className="text-sm mb-1"><strong>Purpose:</strong> Communication with potential employers</p>
                    <p className="text-sm mb-1"><strong>Data scope:</strong> Contact and identification data</p>
                    <p className="text-sm"><strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract performance) and Art. 6(1)(c) GDPR (legal obligation).</p>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">III. Recipients of Personal Data</h2>
            <p>The controller does not transfer personal data to third countries outside the European Economic Area (EEA). Data may be shared with:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-sm">
                <li>Providers of legal, accounting and tax services</li>
                <li>Public authorities (e.g. Slovak Tax Administration) in fulfilling legal obligations</li>
            </ul>
            <p className="mt-3 text-sm text-slate-500">No automated decision-making or profiling takes place.</p>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">IV. Data Retention Periods</h2>
            <div className="space-y-2 text-sm">
                {[
                    ["Accounting and tax documents", "10 years"],
                    ["Contractual documentation", "Until limitation periods expire"],
                    ["Communication data", "Max. 6 months"],
                    ["Candidate database (with consent)", "5 years"],
                ].map(([item, period]) => (
                    <div key={item} className="flex justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <span>{item}</span>
                        <span className="font-bold">{period}</span>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">V. Your Rights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                    ["Right of access", "Art. 15 GDPR"],
                    ["Right to rectification", "Art. 16 GDPR"],
                    ["Right to erasure", "Art. 17 GDPR"],
                    ["Right to restriction", "Art. 18 GDPR"],
                    ["Right to data portability", "Art. 20 GDPR"],
                    ["Right to object", "Art. 21 GDPR"],
                    ["Right to withdraw consent", "Art. 7(3) GDPR"],
                ].map(([right, article]) => (
                    <div key={right} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                        <span>{right}</span>
                        <span className="text-xs font-bold text-blue-600">{article}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm">
                <p>You may exercise your rights in writing to the controller's registered address or electronically at <strong>info@relatedservices.sk</strong>. The controller will respond within one month.</p>
                <p className="mt-2">Supervisory authority: <strong>Office for Personal Data Protection of the Slovak Republic</strong>, Hraničná 12, 820 07 Bratislava, statny.dozor@pdp.gov.sk</p>
            </div>
        </section>
    </div>
);

export default function PrivacyPolicyPage() {
    const [lang, setLang] = useState<"sk" | "en">("sk");

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <Link href="/candidate/new" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back / Späť
                    </Link>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setLang("sk")}
                            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition ${lang === "sk" ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"}`}
                        >
                            SK
                        </button>
                        <button
                            onClick={() => setLang("en")}
                            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition ${lang === "en" ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                    {lang === "sk" ? <SK /> : <EN />}
                </div>

                <p className="text-center text-slate-400 text-xs mt-8">
                    © {new Date().getFullYear()} RELATED SERVICES s.r.o. — IČO: 47 699 809
                </p>
            </div>
        </div>
    );
}
