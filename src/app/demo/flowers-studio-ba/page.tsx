export const metadata = {
    title: "Flowers Bratislava – Kvety & Kytice | Doručenie Bratislava",
    description: "Kvety Bratislava — svadobné kytice, darčekové bukety, doručenie po celej Bratislave. Objednajte dnes.",
};

export default function FlowersStudioDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#fef9f4", color: "#1a120a", fontFamily: "'Georgia', serif" }}>

            {/* Forest green top stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #2d5a27, #4a8a3f, #2d5a27)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(254,249,244,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8ddd4" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "15px", letterSpacing: "0.1em", color: "#1a120a" }}>Flowers Bratislava</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#2d5a27", letterSpacing: "0.45em", display: "block", marginTop: "1px" }}>KVETY · DORUČENIE · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#ponuka" style={{ color: "#aaa" }} className="hover:text-[#2d5a27] transition-colors uppercase">Ponuka</a>
                        <a href="#o-nas" style={{ color: "#aaa" }} className="hover:text-[#2d5a27] transition-colors uppercase">O nás</a>
                        <a href="#kontakt" style={{ color: "#aaa" }} className="hover:text-[#2d5a27] transition-colors uppercase">Objednať</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#2d5a27", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Objednať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
                <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "36px", height: "1px", background: "#2d5a27" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.55em", color: "#2d5a27" }}>KVETY · BRATISLAVA</span>
                        </div>
                        <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 0.92, letterSpacing: "-0.02em", marginBottom: "24px", fontWeight: "normal" }}>
                            Kvety,<br />
                            ktoré<br />
                            <em style={{ color: "#2d5a27" }}>hovoria.</em>
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6050", fontSize: "14px", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px" }}>
                            Ručne viazané kytice a bukety s doručením po celej Bratislave.
                            Svadobné kompozície, darčeky, dekorácie — každá kytica je originál.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#ponuka" style={{ background: "#2d5a27", color: "#fff", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Pozrieť ponuku
                            </a>
                            <a href="#kontakt" style={{ border: "1px solid #2d5a27", color: "#2d5a27", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:bg-[#2d5a27] hover:text-white transition-all">
                                Objednať
                            </a>
                        </div>

                        <div className="flex gap-6 mt-10">
                            <div style={{ borderLeft: "2px solid #2d5a27", paddingLeft: "12px" }}>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#aaa" }}>DORUČENIE</div>
                                <div style={{ fontSize: "14px" }}>Do 24 hodín</div>
                            </div>
                            <div style={{ borderLeft: "2px solid #2d5a27", paddingLeft: "12px" }}>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#aaa" }}>DOSTUPNOSŤ</div>
                                <div style={{ fontSize: "14px" }}>7 dní v týždni</div>
                            </div>
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div style={{ position: "relative" }}>
                        <div style={{ background: "#e8f0e4", aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                            <div style={{ textAlign: "center", padding: "40px" }}>
                                <div style={{ fontSize: "100px", marginBottom: "16px" }}>💐</div>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#2d5a27" }}>KAŽDÁ KYTICA ORIGINÁL</div>
                            </div>
                            <div style={{ position: "absolute", bottom: "24px", left: "24px", background: "#2d5a27", color: "#fff", padding: "12px 20px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.2em" }}>
                                DORUČENIE ZADARMO OD 60 €
                            </div>
                        </div>
                        <div style={{ position: "absolute", top: "-12px", right: "-12px", width: "80px", height: "80px", border: "1px solid #2d5a27", pointerEvents: "none" }} />
                    </div>
                </div>
            </section>

            {/* Ponuka */}
            <section id="ponuka" style={{ padding: "100px 0", background: "#fef9f4" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#2d5a27" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#2d5a27" }}>PONUKA</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "60px", lineHeight: 1.1 }}>
                        Pre každú<br /><em style={{ color: "#2d5a27" }}>príležitosť.</em>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "💍",
                                name: "Svadobné kvety",
                                desc: "Svadobná kytica, svadobné dekorácie, výzdoba sály. Konzultácia zdarma — spravíme presne to čo si predstavuješ.",
                                price: "od 80 €",
                            },
                            {
                                icon: "🎁",
                                name: "Darčeková kytica",
                                desc: "Narodeniny, výročie, Valentín, Deň matiek — ručne viazaná kytica doručená v deň, ktorý si vyberiete.",
                                price: "od 25 €",
                            },
                            {
                                icon: "🌿",
                                name: "Firemné dekorácie",
                                desc: "Pravidelné dekorácie pre kancelárie, hotely, reštaurácie. Čerstvé kvety každý týždeň.",
                                price: "dohodou",
                            },
                        ].map((item) => (
                            <div key={item.name} style={{ border: "1px solid #ddd5cb", padding: "36px", background: "#fff" }}>
                                <div style={{ fontSize: "40px", marginBottom: "20px" }}>{item.icon}</div>
                                <h3 style={{ fontSize: "20px", fontWeight: "normal", marginBottom: "12px" }}>{item.name}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#7a6050", lineHeight: 1.7, marginBottom: "20px" }}>{item.desc}</p>
                                <div style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#2d5a27" }}>{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Green band */}
            <section style={{ background: "#2d5a27", color: "#fef9f4", padding: "80px 0" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { n: "6 400+", label: "sledovateľov" },
                        { n: "24h", label: "doručenie" },
                        { n: "7×", label: "dní v týždni" },
                    ].map(({ n, label }) => (
                        <div key={n}>
                            <div style={{ fontSize: "36px", fontFamily: "Georgia, serif", marginBottom: "8px" }}>{n}</div>
                            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#a0c89a" }}>{label.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* O nás */}
            <section id="o-nas" style={{ padding: "100px 0", background: "#fef9f4" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div style={{ width: "30px", height: "1px", background: "#2d5a27" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#2d5a27" }}>O NÁS</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "normal", marginBottom: "20px", lineHeight: 1.2 }}>
                            Kvety s láskou,<br />doručené včas.
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6050", fontSize: "14px", lineHeight: 1.9, marginBottom: "16px" }}>
                            Sme malý ateliér v srdci Bratislavy. Každú kyticu viažeme ručne — žiadna sériová výroba, žiadne plastové kvety z regálov.
                        </p>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6050", fontSize: "14px", lineHeight: 1.9, marginBottom: "32px" }}>
                            Pracujeme s čerstvými kvetmi dováženými priamo od pestovateľov. Ak máš špeciálnu požiadavku — farba, druh, počet — stačí napísať.
                        </p>
                        <a href="tel:+421918446390" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2d5a27", color: "#fff", padding: "14px 28px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                            className="uppercase hover:opacity-90 transition-opacity">
                            📞 +421 918 446 390
                        </a>
                    </div>
                    <div style={{ background: "#e8f0e4", padding: "60px 40px" }}>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#2d5a27", fontStyle: "italic", lineHeight: 1 }}>„Kvety</div>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#1a120a", fontStyle: "italic", lineHeight: 1 }}>hovoria</div>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#2d5a27", fontStyle: "italic", lineHeight: 1 }}>za teba."</div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ background: "#1a120a", color: "#fef9f4", padding: "100px 0" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#2d5a27" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#2d5a27" }}>OBJEDNÁVKY</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "24px", lineHeight: 1.1 }}>
                                Objednaj<br /><em style={{ color: "#4a8a3f" }}>dnes.</em>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6050", fontSize: "14px", lineHeight: 1.8, marginBottom: "36px" }}>
                                Napíš nám správu alebo zavolaj. Odpovieme do hodiny. Doručenie do 24 hodín po celej Bratislave.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#2d5a27", marginBottom: "6px" }}>TELEFÓN</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "18px" }}>+421 918 446 390</div>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#2d5a27", marginBottom: "6px" }}>INSTAGRAM</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>@flowers_studio.sk</div>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#2d5a27", marginBottom: "6px" }}>DORUČENIE</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>Celá Bratislava</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
                            <a href="tel:+421918446390"
                                style={{ display: "block", textAlign: "center", background: "#2d5a27", color: "#fff", padding: "18px 28px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}
                                className="hover:opacity-90 transition-opacity uppercase">
                                📞 Zavolať teraz
                            </a>
                            <a href="https://instagram.com/flowers_studio.sk" target="_blank" rel="noopener noreferrer"
                                style={{ display: "block", textAlign: "center", border: "1px solid #4a8a3f", color: "#4a8a3f", padding: "18px 28px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}
                                className="hover:bg-[#2d5a27] hover:text-white hover:border-[#2d5a27] transition-all uppercase">
                                Instagram DM
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div style={{ background: "#0e0906", color: "#4a3828", padding: "24px", textAlign: "center" }}>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}>
                    © 2025 FLOWERS BRATISLAVA · KVETY S DORUČENÍM · BRATISLAVA
                </p>
            </div>

        </div>
    );
}
