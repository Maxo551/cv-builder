export const metadata = {
    title: "YES Nails BA – Manikúra & Pedikúra Bratislava | Gél, laminácia obočia",
    description: "Profesionálna manikúra, pedikúra a laminácia obočia v Bratislave. Petržalka. Online rezervácia.",
};

export default function YesNailsBaDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#fdfbf9", color: "#1a1015", fontFamily: "'Georgia', serif" }}>

            {/* Rose gold stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #a06070, #c4948a, #a06070)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(253,251,249,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #ecddd8" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "17px", letterSpacing: "0.12em", color: "#1a1015" }}>YES Nails</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#c4948a", letterSpacing: "0.5em", display: "block", marginTop: "1px" }}>BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#sluzby" style={{ color: "#bbb" }} className="hover:text-[#a06070] transition-colors uppercase">Služby</a>
                        <a href="#cenik" style={{ color: "#bbb" }} className="hover:text-[#a06070] transition-colors uppercase">Cenník</a>
                        <a href="#kontakt" style={{ color: "#bbb" }} className="hover:text-[#a06070] transition-colors uppercase">Rezervovať</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#a06070", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
                <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "36px", height: "1px", background: "#c4948a" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.55em", color: "#c4948a" }}>NAIL STUDIO · BRATISLAVA</span>
                        </div>
                        <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 0.92, letterSpacing: "-0.02em", marginBottom: "24px", fontWeight: "normal" }}>
                            Nechty,<br />
                            ktoré si<br />
                            <em style={{ color: "#a06070" }}>všimneš.</em>
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6068", fontSize: "14px", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px" }}>
                            Profesionálna manikúra, pedikúra a laminácia obočia v Bratislave.
                            Petržalka & Záhorská Bystrica — príď k nám alebo sa dohovoríme.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#sluzby" style={{ background: "#a06070", color: "#fff", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Naše služby
                            </a>
                            <a href="#kontakt" style={{ border: "1px solid #a06070", color: "#a06070", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:bg-[#a06070] hover:text-white transition-all">
                                Rezervovať termín
                            </a>
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div style={{ position: "relative" }}>
                        <div style={{ background: "#f5e8e4", aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                            <div style={{ textAlign: "center", padding: "40px" }}>
                                <div style={{ fontSize: "90px", marginBottom: "20px" }}>💅</div>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.45em", color: "#a06070" }}>PROFESIONÁLNA STAROSTLIVOSŤ</div>
                            </div>
                            <div style={{ position: "absolute", bottom: "24px", right: "24px", background: "#a06070", color: "#fff", padding: "12px 20px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.2em" }}>
                                5 100+ SLEDOVATEĽOV
                            </div>
                        </div>
                        <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "70px", height: "70px", border: "1px solid #c4948a", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "50px", height: "50px", background: "#f5e8e4", pointerEvents: "none" }} />
                    </div>
                </div>
            </section>

            {/* Služby */}
            <section id="sluzby" style={{ padding: "100px 0", background: "#fdfbf9" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#c4948a" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#c4948a" }}>SLUŽBY</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "60px", lineHeight: 1.1 }}>
                        Starostlivosť<br /><em style={{ color: "#a06070" }}>do detailov.</em>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">
                        {[
                            {
                                name: "Gélovanie nechtov",
                                tag: "MANIKÚRA",
                                desc: "Gélové nechty s výdržou 3–4 týždne. Vlastný dizajn, francúzska manikúra, farebné gély — urobíme presne to čo chceš.",
                                price: "od 35 €",
                            },
                            {
                                name: "Klasická manikúra",
                                tag: "MANIKÚRA",
                                desc: "Spracovanie nechtíčkov, kutikúl, tvarovanie. S lakom alebo bez. Rýchle a profesionálne.",
                                price: "od 18 €",
                            },
                            {
                                name: "Pedikúra",
                                tag: "PEDIKÚRA",
                                desc: "Kompletná starostlivosť o chodidlá — spracovanie, tvarovanie, lak. Relaxačný zážitok, nie len úprava.",
                                price: "od 28 €",
                            },
                            {
                                name: "Laminácia obočia",
                                tag: "OBOČIE",
                                desc: "Laminovaním dostaneš husté, uložené obočie bez každodenného robenia. Výdrž 6–8 týždňov.",
                                price: "od 32 €",
                            },
                        ].map((s) => (
                            <div key={s.name} style={{ border: "1px solid #ecddd8", padding: "36px", background: "#fff" }}>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#c4948a", marginBottom: "12px" }}>{s.tag}</div>
                                <h3 style={{ fontSize: "22px", fontWeight: "normal", marginBottom: "12px" }}>{s.name}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#7a6068", lineHeight: 1.7, marginBottom: "20px" }}>{s.desc}</p>
                                <div style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#a06070" }}>{s.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dark band */}
            <section style={{ background: "#1a1015", padding: "70px 0" }}>
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h3 style={{ fontFamily: "Georgia, serif", fontWeight: "normal", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#fdfbf9", marginBottom: "16px" }}>
                        Sleduj nás na <em style={{ color: "#c4948a" }}>@yes_nails_ba</em>
                    </h3>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#7a6068", marginBottom: "32px" }}>
                        Každý deň nové inspo, ukážky prác a akcie pre sledovateľov.
                    </p>
                    <a href="https://instagram.com/yes_nails_ba" target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-block", border: "1px solid #c4948a", color: "#c4948a", padding: "14px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em" }}
                        className="hover:bg-[#a06070] hover:text-white hover:border-[#a06070] transition-all uppercase">
                        Instagram →
                    </a>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ background: "#fdfbf9", padding: "100px 0" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#c4948a" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#c4948a" }}>REZERVÁCIA</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "24px", lineHeight: 1.1 }}>
                                Rezervuj si<br /><em style={{ color: "#a06070" }}>termín.</em>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6068", fontSize: "14px", lineHeight: 1.8, marginBottom: "36px" }}>
                                Napíš nám správu na Instagrame. Odpovieme do pár hodín a dohodneme termín podľa teba.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#c4948a", marginBottom: "6px" }}>INSTAGRAM</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>@yes_nails_ba</div>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#c4948a", marginBottom: "6px" }}>LOKÁCIA</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>Petržalka & Záhorská Bystrica</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: "#f5e8e4", padding: "48px", textAlign: "center" }}>
                            <div style={{ fontSize: "60px", marginBottom: "20px" }}>💅</div>
                            <p style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#1a1015", fontStyle: "italic", marginBottom: "24px" }}>
                                „Krásne nechty, spokojná klientka."
                            </p>
                            <a href="https://instagram.com/yes_nails_ba" target="_blank" rel="noopener noreferrer"
                                style={{ display: "inline-block", background: "#a06070", color: "#fff", padding: "14px 28px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em" }}
                                className="hover:opacity-90 transition-opacity uppercase">
                                Napísať na Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div style={{ background: "#1a1015", color: "#4a3040", padding: "24px", textAlign: "center" }}>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}>
                    © 2025 YES NAILS BA · MANIKÚRA & PEDIKÚRA · BRATISLAVA
                </p>
            </div>

        </div>
    );
}
