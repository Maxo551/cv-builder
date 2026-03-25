"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const { lang, setLang, t } = useLanguage();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Language switcher */}
            <div className="mb-10 flex items-center gap-2">
                <span className="text-sm text-slate-500 font-medium mr-2">{t("home.lang.label")}:</span>
                <button
                    onClick={() => setLang("en")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition border-2 ${
                        lang === "en"
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                    }`}
                >
                    🇬🇧 English
                </button>
                <button
                    onClick={() => setLang("sk")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition border-2 ${
                        lang === "sk"
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                    }`}
                >
                    🇸🇰 Slovenčina
                </button>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-10 text-center">
                {t("home.title")}
            </h1>

            {/* Candidates — main card */}
            <div className="p-10 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center max-w-md w-full transition-all hover:scale-105 mb-6">
                <h2 className="text-2xl font-bold mb-3 text-blue-600">{t("home.candidate.title")}</h2>
                <p className="text-slate-600 mb-6 text-center">{t("home.candidate.desc")}</p>
                <Link
                    href="/candidate/new"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
                >
                    {t("home.candidate.btn")}
                </Link>
            </div>

            {/* Admins — small secondary card */}
            <div className="p-4 bg-white rounded-xl shadow border border-slate-200 flex items-center gap-4 max-w-xs w-full">
                <div className="flex-1">
                    <h2 className="text-sm font-semibold text-slate-500">{t("home.admin.title")}</h2>
                </div>
                <Link
                    href="/admin/login"
                    className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition whitespace-nowrap"
                >
                    {t("home.admin.btn")}
                </Link>
            </div>
        </main>
    );
}
