export const metadata = {
    title: "Dielňa Keramika – Keramické kurzy Bratislava | Stará Tržnica",
    description: "Keramické kurzy a workshopy v srdci Bratislavy. Pravidelné krúžky, jednorazové workshopy, detské kurzy. Stará Tržnica.",
};

export default function DielnaKeramikaDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#f9f5ef", color: "#1c1008", fontFamily: "'Georgia', serif" }}>

            {/* Terracotta top stripe */}
            <div style={{ height: "4px", background: "linear-gradient(90deg, #b5533c, #d4734f, #b5533c)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(249,245,239,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8dfd4" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "16px", letterSpacing: "0.06em", color: "#1c1008" }}>Dielňa Keramika</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#b5533c", letterSpacing: "0.4em", display: "block", marginTop: "1px" }}>STARÁ TRŽNICA · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#kurzy" style={{ color: "#aaa" }} className="hover:text-[#b5533c] transition-colors uppercase">Kurzy</a>
                        <a href="#o-nas" style={{ color: "#aaa" }} className="hover:text-[#b5533c] transition-colors uppercase">O nás</a>
                        <a href="#kontakt" style={{ color: "#aaa" }} className="hover:text-[#b5533c] transition-colors uppercase">Kontakt</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#b5533c", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Prihlásiť sa
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}>
                <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "36px", height: "1px", background: "#b5533c" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.55em", color: "#b5533c" }}>KERAMIKA · BRATISLAVA</span>
                        </div>
                        <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 0.92, letterSpacing: "-0.02em", marginBottom: "24px", fontWeight: "normal" }}>
                            Hlina<br />
                            v tvojich<br />
                            <em style={{ color: "#b5533c" }}>rukách.</em>
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6352", fontSize: "14px", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px" }}>
                            Keramické kurzy a workshopy priamo v Starej Tržnici.
                            Či si úplný začiatočník alebo sa chceš vrátiť k hline — tu si nájdeš miesto.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#kurzy" style={{ background: "#b5533c", color: "#fff", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Pozrieť kurzy
                            </a>
                            <a href="#kontakt" style={{ border: "1px solid #b5533c", color: "#b5533c", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:bg-[#b5533c] hover:text-white transition-all">
                                Napísať nám
                            </a>
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div style={{ position: "relative" }}>
                        <div style={{ background: "#e8dfd4", aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                            <div style={{ textAlign: "center", padding: "40px" }}>
                                <div style={{ fontSize: "80px", marginBottom: "20px" }}>🏺</div>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#b5533c" }}>TVORBA RUKAMI</div>
                            </div>
                            <div style={{ position: "absolute", bottom: "24px", right: "24px", background: "#b5533c", color: "#fff", padding: "12px 20px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.2em" }}>
                                KURZY OD 29 €
                            </div>
                        </div>
                        <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "80px", height: "80px", border: "1px solid #b5533c", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "80px", height: "80px", border: "1px solid #c97a5a", pointerEvents: "none" }} />
                    </div>
                </div>
            </section>

            {/* Stats strip */}
            <div style={{ background: "#1c1008", color: "#f9f5ef", padding: "28px 0" }}>
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
                    {[
                        { n: "3+", label: "roky skúseností" },
                        { n: "500+", label: "spokojných účastníkov" },
                        { n: "20", label: "kurzov mesačne" },
                    ].map(({ n, label }) => (
                        <div key={n}>
                            <div style={{ fontSize: "32px", fontWeight: "normal", color: "#b5533c", fontFamily: "Georgia, serif" }}>{n}</div>
                            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em", color: "#a08878", marginTop: "4px" }}>{label.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Kurzy */}
            <section id="kurzy" style={{ padding: "100px 0", background: "#f9f5ef" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#b5533c" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#b5533c" }}>PONUKA</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "60px", lineHeight: 1.1 }}>
                        Vyber si<br /><em style={{ color: "#b5533c" }}>čo ti sadí.</em>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                name: "Pravidelný krúžok",
                                tag: "TÝŽDENNÉ STRETNUTIA",
                                desc: "Pre tých, čo sa chcú keramike venovať vážnejšie. 8-týždňový cyklus, malé skupiny max. 8 ľudí, postupné budovanie techník.",
                                price: "od 149 € / cyklus",
                                detail: "2× týždenne · max. 8 ľudí",
                            },
                            {
                                name: "Jednorazový workshop",
                                tag: "IDEÁLNY DARČEK",
                                desc: "Prídi na 3-hodinový workshop a odnes si hotový výrobok domov. Žiadne predchádzajúce skúsenosti nepotrebné.",
                                price: "29 € / osoba",
                                detail: "3 hodiny · max. 10 ľudí",
                            },
                            {
                                name: "Detský kurz",
                                tag: "VEK 6–14 ROKOV",
                                desc: "Špeciálne prispôsobené kurzy pre deti. Tvorba hračiek, misiek, ozdôb — kreativita bez hraníc, rodičia vítaní.",
                                price: "od 35 € / lekcia",
                                detail: "90 minút · max. 8 detí",
                            },
                            {
                                name: "Teambuilding",
                                tag: "PRE FIRMY",
                                desc: "Originálna akcia pre váš tím. Spoločná tvorba, relax, niečo zažiť spolu. Vhodné pre 10–25 ľudí, catering vieme zabezpečiť.",
                                price: "individuálna ponuka",
                                detail: "2–4 hodiny · 10–25 osôb",
                            },
                        ].map((k) => (
                            <div key={k.name} style={{ border: "1px solid #e0d4c6", padding: "40px", background: "#fff", position: "relative" }}>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#b5533c", marginBottom: "16px" }}>{k.tag}</div>
                                <h3 style={{ fontSize: "22px", fontWeight: "normal", marginBottom: "16px" }}>{k.name}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#7a6352", lineHeight: 1.7, marginBottom: "24px" }}>{k.desc}</p>
                                <div style={{ borderTop: "1px solid #e8dfd4", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#aaa", letterSpacing: "0.1em" }}>{k.detail}</span>
                                    <span style={{ fontSize: "16px", color: "#b5533c" }}>{k.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery / Visual break */}
            <section style={{ padding: "0", background: "#1c1008" }}>
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-3 gap-4">
                        {["#2e1f15", "#3d2a1f", "#261510"].map((bg, i) => (
                            <div key={i} style={{ background: bg, aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "36px", marginBottom: "8px" }}>{["🏺", "🌿", "✋"][i]}</div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#b5533c" }}>{["TVORBA", "PRÍRODA", "RUKAMI"][i]}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.3em", color: "#7a6352" }}>SLEDUJ NÁS NA</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "#b5533c", marginTop: "8px" }}>@dielnakeramicka</p>
                    </div>
                </div>
            </section>

            {/* O nás */}
            <section id="o-nas" style={{ padding: "100px 0", background: "#f9f5ef" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div style={{ background: "#e8dfd4", padding: "60px 40px", position: "relative" }}>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(3rem, 6vw, 5rem)", color: "#b5533c", lineHeight: 1, fontStyle: "italic" }}>„Hlina</div>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(3rem, 6vw, 5rem)", color: "#1c1008", lineHeight: 1, fontStyle: "italic" }}>neklame."</div>
                        <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#7a6352", marginTop: "20px" }}>— DIELŇA KERAMIKA</div>
                        <div style={{ position: "absolute", bottom: "0", right: "0", width: "50px", height: "50px", background: "#b5533c" }} />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div style={{ width: "30px", height: "1px", background: "#b5533c" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#b5533c" }}>O NÁS</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "normal", marginBottom: "20px", lineHeight: 1.2 }}>
                            Keramika s dušou,<br />nie sériová výroba.
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6352", fontSize: "14px", lineHeight: 1.9, marginBottom: "16px" }}>
                            Dielňa Keramika vznikla z lásky k ručnej tvorbe. Sme malá dielňa v Starej Tržnici — mieste,
                            kde sa stretáva tradícia s moderným Bratislavčanom.
                        </p>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6352", fontSize: "14px", lineHeight: 1.9, marginBottom: "32px" }}>
                            Naším cieľom nie je, aby každý z vás vyrobil dokonalý výrobok. Chceme,
                            aby ste si oddýchli, vypli hlavu a zažili radosť z tvorby vlastnými rukami.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Malé skupiny", val: "max. 8–10 ľudí" },
                                { label: "Materiál zahrnutý", val: "v cene kurzu" },
                                { label: "Kde nás nájdeš", val: "Stará Tržnica, BA" },
                                { label: "Jazyk", val: "slovenčina / čeština" },
                            ].map(({ label, val }) => (
                                <div key={label} style={{ borderLeft: "2px solid #b5533c", paddingLeft: "12px" }}>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#aaa", letterSpacing: "0.15em", marginBottom: "4px" }}>{label.toUpperCase()}</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "14px" }}>{val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ background: "#1c1008", color: "#f9f5ef", padding: "100px 0" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#b5533c" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#b5533c" }}>KONTAKT</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "24px", lineHeight: 1.1 }}>
                                Prihlás sa<br /><em style={{ color: "#b5533c" }}>na kurz.</em>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6352", fontSize: "14px", lineHeight: 1.8, marginBottom: "36px" }}>
                                Napíš nám email alebo správu na Instagrame a my ti pomôžeme vybrať správny kurz. Odpovedáme do 24 hodín.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#b5533c", marginBottom: "6px" }}>EMAIL</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>dielnakeramicka@gmail.com</div>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#b5533c", marginBottom: "6px" }}>INSTAGRAM</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>@dielnakeramicka</div>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#b5533c", marginBottom: "6px" }}>ADRESA</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>Stará Tržnica, Bratislava</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ background: "#261510", padding: "40px", width: "100%" }}>
                                <p style={{ fontFamily: "Georgia, serif", fontSize: "18px", lineHeight: 1.6, color: "#e8dfd4", fontStyle: "italic", marginBottom: "24px" }}>
                                    „Stačí prísť — hlinu a všetko ostatné máme my."
                                </p>
                                <a href="mailto:dielnakeramicka@gmail.com"
                                    style={{ display: "inline-block", background: "#b5533c", color: "#fff", padding: "14px 28px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em" }}
                                    className="hover:opacity-90 transition-opacity uppercase">
                                    Napísať nám
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div style={{ background: "#100c07", color: "#4a3828", padding: "24px", textAlign: "center" }}>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}>
                    © 2025 DIELŇA KERAMIKA · STARÁ TRŽNICA · BRATISLAVA
                </p>
            </div>

        </div>
    );
}
