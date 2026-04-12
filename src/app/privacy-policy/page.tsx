"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const SK = () => (
    <div className="space-y-8 text-slate-700 leading-relaxed text-sm">
        <div>
            <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Zásady spracúvania osobných údajov</h1>
        </div>

        <p>
            Tento dokument upravuje zásady spracúvania a ochrany osobných údajov v súlade s nariadením Európskeho parlamentu
            a Rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov
            (ďalej len „GDPR") a zákonom č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov.
        </p>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">I. Identifikácia prevádzkovateľa</h2>
            <p className="mb-2">Prevádzkovateľom, ktorý určuje účel a prostriedky spracúvania osobných údajov, je združenie:</p>
            <div className="space-y-1">
                <p><strong>Názov združenia:</strong> Asociácia pre podporu zamestnanosti</p>
                <p><strong>Právna forma:</strong> Občianske združenie, odborová organizácia a organizácia zamestnávateľov</p>
                <p><strong>IČO:</strong> 42417261</p>
                <p><strong>Sídlo:</strong> Škultétyho 1, 831 03 Bratislava-Nové Mesto</p>
                <p><strong>Webové sídlo:</strong> Neuvedené</p>
                <p><strong>Registračné číslo:</strong> VVS/1-900/90-45357</p>
                <p><strong>Registrový úrad:</strong> Okresný úrad Bratislava</p>
            </div>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">II. Účely a právne základy spracúvania osobných údajov</h2>
            <p className="mb-3">Prevádzkovateľ spracúva osobné údaje dotknutých osôb výlučne v nevyhnutnom rozsahu a na nasledujúce účely:</p>
            <div className="space-y-4">
                <div>
                    <p className="font-semibold">1. Asistencia pri tvorbe životopisov</p>
                    <p><strong>Účel spracúvania:</strong> Spracovanie a vytvorenie životopisu</p>
                    <p><strong>Rozsah údajov:</strong> Meno, priezvisko, dátum narodenia, adresa pobytu, e-mailová adresa, telefónne číslo, údaje o dosiahnutom vzdelaní a predchádzajúcich pracovných skúsenostiach.</p>
                    <p><strong>Právny základ:</strong> Spracúvanie je nevyhnutné na vykonanie opatrení pred uzatvorením zmluvy na základe žiadosti dotknutej osoby (čl. 6 ods. 1 písm. b) GDPR) a dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov na jeden alebo viaceré konkrétne účely;</p>
                </div>
                <div>
                    <p className="font-semibold">2. Sprostredkovanie pracovnej príležitosti</p>
                    <p><strong>Účel spracúvania:</strong> Komunikácia s potencionálnymi zamestnávateľmi</p>
                    <p><strong>Rozsah údajov:</strong> Kontaktné a identifikačné údaje</p>
                    <p><strong>Právny základ:</strong> Spracúvanie je nevyhnutné na plnenie zmluvy (čl. 6 ods. 1 písm. b) GDPR) a na splnenie zákonnej povinnosti prevádzkovateľa (čl. 6 ods. 1 písm. c) GDPR).</p>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">III. Príjemcovia a kategórie príjemcov osobných údajov</h2>
            <p className="mb-2">Prevádzkovateľ neuskutočňuje prenos osobných údajov do tretích krajín mimo Európskeho hospodárskeho priestoru (EHP) ani do medzinárodných organizácií. Osobné údaje môžu byť v nevyhnutnom rozsahu poskytnuté nasledujúcim kategóriám príjemcov:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Poskytovatelia právnych, účtovných a daňových služieb.</li>
                <li>Orgány verejnej moci (napr. Finančná správa SR) v rámci plnenia zákonných povinností.</li>
            </ul>
            <p className="mt-2">Pri spracúvaní osobných údajov nedochádza k automatizovanému rozhodovaniu ani k profilovaniu.</p>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">IV. Doba uchovávania osobných údajov</h2>
            <p className="mb-2">Osobné údaje sú uchovávané výlučne po dobu, ktorá je nevyhnutná na dosiahnutie účelu ich spracúvania:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Účtovné a daňové doklady: 10 rokov, v súlade s príslušnými právnymi predpismi (napr. zákon o účtovníctve).</li>
                <li>Zmluvná dokumentácia a servisné protokoly: Počas trvania zmluvného vzťahu a do uplynutia premlčacích lehôt pre uplatnenie právnych nárokov.</li>
                <li>Údaje z komunikácie: Po dobu nevyhnutnú na vybavenie požiadavky, spravidla nie dlhšie ako 6 mesiacov od ukončenia komunikácie.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">V. Práva dotknutej osoby</h2>
            <p className="mb-2">Dotknutá osoba má v súvislosti so spracúvaním svojich osobných údajov nasledujúce práva:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Právo na prístup k osobným údajom (čl. 15 GDPR).</li>
                <li>Právo na opravu osobných údajov (čl. 16 GDPR).</li>
                <li>Právo na výmaz osobných údajov (čl. 17 GDPR), pokiaľ nie je ich uchovávanie nevyhnutné na plnenie zákonnej povinnosti.</li>
                <li>Právo na obmedzenie spracúvania (čl. 18 GDPR).</li>
                <li>Právo na prenosnosť údajov (čl. 20 GDPR).</li>
                <li>Právo namietať proti spracúvaniu (čl. 21 GDPR), ak je spracúvanie založené na oprávnenom záujme prevádzkovateľa.</li>
                <li>Právo odvolať súhlas (čl. 7 ods. 3 GDPR) kedykoľvek, ak sa spracúvanie zakladá na súhlase.</li>
            </ul>
            <p className="mt-3">
                Svoje práva si môže dotknutá osoba uplatniť písomne na adrese sídla prevádzkovateľa. Prevádzkovateľ vybaví žiadosť bez zbytočného odkladu, najneskôr však do jedného mesiaca od jej doručenia.
            </p>
            <p className="mt-2">
                Ak sa dotknutá osoba domnieva, že pri spracúvaní osobných údajov došlo k porušeniu jej práv, má právo podať sťažnosť dozornému orgánu, ktorým je Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava, e-mail: statny.dozor@pdp.gov.sk.
            </p>
        </section>
    </div>
);

const EN = () => (
    <div className="space-y-8 text-slate-700 leading-relaxed text-sm">
        <div>
            <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Privacy Policy</h1>
        </div>

        <p>
            This document governs the principles of processing and protection of personal data in accordance with Regulation (EU)
            2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing
            of personal data and on the free movement of such data (hereinafter „GDPR") and Act No. 18/2018 Coll. on the Protection
            of Personal Data and on Amendment and Supplementation of Certain Acts.
        </p>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">I. Identification of the Controller</h2>
            <p className="mb-2">The controller, who determines the purpose and means of processing personal data, is the association:</p>
            <div className="space-y-1">
                <p><strong>Association name:</strong> Asociácia pre podporu zamestnanosti</p>
                <p><strong>Legal form:</strong> Civic association, trade union organisation and employers&apos; organisation</p>
                <p><strong>Company ID (IČO):</strong> 42417261</p>
                <p><strong>Registered office:</strong> Škultétyho 1, 831 03 Bratislava-Nové Mesto</p>
                <p><strong>Website:</strong> Not specified</p>
                <p><strong>Registration number:</strong> VVS/1-900/90-45357</p>
                <p><strong>Registry authority:</strong> District Office Bratislava</p>
            </div>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">II. Purposes and Legal Bases for Processing Personal Data</h2>
            <p className="mb-3">The controller processes personal data of data subjects exclusively to the necessary extent and for the following purposes:</p>
            <div className="space-y-4">
                <div>
                    <p className="font-semibold">1. CV Creation Assistance</p>
                    <p><strong>Purpose of processing:</strong> Processing and creation of a CV</p>
                    <p><strong>Scope of data:</strong> Name, surname, date of birth, residential address, e-mail address, phone number, information on achieved education and previous work experience.</p>
                    <p><strong>Legal basis:</strong> Processing is necessary for the performance of measures prior to entering into a contract at the request of the data subject (Art. 6(1)(b) GDPR) and the data subject has given consent to the processing of their personal data for one or more specific purposes;</p>
                </div>
                <div>
                    <p className="font-semibold">2. Job Placement</p>
                    <p><strong>Purpose of processing:</strong> Communication with potential employers</p>
                    <p><strong>Scope of data:</strong> Contact and identification data</p>
                    <p><strong>Legal basis:</strong> Processing is necessary for the performance of a contract (Art. 6(1)(b) GDPR) and for compliance with a legal obligation of the controller (Art. 6(1)(c) GDPR).</p>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">III. Recipients and Categories of Recipients of Personal Data</h2>
            <p className="mb-2">The controller does not transfer personal data to third countries outside the European Economic Area (EEA) or to international organisations. Personal data may be provided to the following categories of recipients to the necessary extent:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Providers of legal, accounting and tax services.</li>
                <li>Public authorities (e.g. the Slovak Financial Administration) in the context of fulfilling legal obligations.</li>
            </ul>
            <p className="mt-2">No automated decision-making or profiling takes place in the processing of personal data.</p>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">IV. Retention Periods for Personal Data</h2>
            <p className="mb-2">Personal data is retained exclusively for the period necessary to achieve the purpose of its processing:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Accounting and tax documents: 10 years, in accordance with applicable legislation (e.g. the Accounting Act).</li>
                <li>Contractual documentation and service records: During the duration of the contractual relationship and until the expiry of limitation periods for the assertion of legal claims.</li>
                <li>Communication data: For the period necessary to handle the request, generally no longer than 6 months from the end of the communication.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-base font-bold text-slate-900 mb-3">V. Rights of the Data Subject</h2>
            <p className="mb-2">The data subject has the following rights in connection with the processing of their personal data:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Right of access to personal data (Art. 15 GDPR).</li>
                <li>Right to rectification of personal data (Art. 16 GDPR).</li>
                <li>Right to erasure of personal data (Art. 17 GDPR), unless their retention is necessary for the fulfilment of a legal obligation.</li>
                <li>Right to restriction of processing (Art. 18 GDPR).</li>
                <li>Right to data portability (Art. 20 GDPR).</li>
                <li>Right to object to processing (Art. 21 GDPR), if processing is based on the legitimate interests of the controller.</li>
                <li>Right to withdraw consent (Art. 7(3) GDPR) at any time, if processing is based on consent.</li>
            </ul>
            <p className="mt-3">
                The data subject may exercise their rights in writing at the controller&apos;s registered office address. The controller will handle the request without undue delay, but no later than one month from its receipt.
            </p>
            <p className="mt-2">
                If the data subject believes that their rights have been violated in the processing of personal data, they have the right to lodge a complaint with the supervisory authority, which is the Office for Personal Data Protection of the Slovak Republic, Hraničná 12, 820 07 Bratislava, e-mail: statny.dozor@pdp.gov.sk.
            </p>
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
                    © {new Date().getFullYear()} Asociácia pre podporu zamestnanosti — IČO: 42417261
                </p>
            </div>
        </div>
    );
}
