export const metadata = {
    title: "Lari Masáž Bratislava – Relaxačná & Športová masáž | Súkromná prax",
    description: "Profesionálne masáže v Bratislave — relaxačná, športová, reflexológia. Súkromná masérska prax. Rezervácia online.",
};

export default function LariMasazDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#f5f2ed", color: "#1a130a", fontFamily: "'Georgia', serif" }}>

            {/* Amber stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #7a5a30, #a87840, #7a5a30)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(245,242,237,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e0d5c4" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "15px", letterSpacing: "0.08em", color: "#1a130a" }}>Lari Masáž</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#a87840", letterSpacing: "0.45em", display: "block", marginTop: "1px" }}>MASÁŽE · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#masaze" style={{ color: "#aaa" }} className="hover:text-[#7a5a30] transition-colors uppercase">Masáže</a>
                        <a href="#cenik" style={{ color: "#aaa" }} className="hover:text-[#7a5a30] transition-colors uppercase">Cenník</a>
                        <a href="#kontakt" style={{ color: "#aaa" }} className="hover:text-[#7a5a30] transition-colors uppercase">Rezervovať</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#7a5a30", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
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
                            <div style={{ width: "36px", height: "1px", background: "#a87840" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.55em", color: "#a87840" }}>SÚKROMNÁ PRAX · BRATISLAVA</span>
                        </div>
                        <h1 style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 0.92, letterSpacing: "-0.02em", marginBottom: "24px", fontWeight: "normal" }}>
                            Uvoľni<br />
                            telo,<br />
                            <em style={{ color: "#7a5a30" }}>vypni hlavu.</em>
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6040", fontSize: "14px", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px" }}>
                            Profesionálne masáže v Bratislave — relaxačná, športová, reflexológia.
                            Súkromná prax bez zhonu. Termín podľa teba.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#masaze" style={{ background: "#7a5a30", color: "#fff", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Zobraziť masáže
                            </a>
                            <a href="#kontakt" style={{ border: "1px solid #7a5a30", color: "#7a5a30", padding: "16px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                className="uppercase hover:bg-[#7a5a30] hover:text-white transition-all">
                                Rezervovať termín
                            </a>
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div style={{ position: "relative" }}>
                        <div style={{ background: "#e8dfd0", aspectRatio: "4/5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                            <div style={{ textAlign: "center", padding: "40px" }}>
                                <div style={{ fontSize: "90px", marginBottom: "20px" }}>🌿</div>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#7a5a30" }}>PROFESIONÁLNA MASÁŽ</div>
                            </div>
                            <div style={{ position: "absolute", bottom: "24px", right: "24px", background: "#7a5a30", color: "#fff", padding: "12px 20px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.2em" }}>
                                OD 35 € / 60 MIN
                            </div>
                        </div>
                        <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "80px", height: "80px", border: "1px solid #a87840", pointerEvents: "none" }} />
                    </div>
                </div>
            </section>

            {/* Masáže */}
            <section id="masaze" style={{ padding: "100px 0", background: "#fdfaf6" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#a87840" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#a87840" }}>PONUKA MASÁŽÍ</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "60px", lineHeight: 1.1 }}>
                        Nájdi svoju<br /><em style={{ color: "#7a5a30" }}>masáž.</em>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                name: "Relaxačná masáž",
                                tag: "NAJOBĽÚBENEJŠIA",
                                desc: "Celotelovná relaxačná masáž uvoľňujúca napätie a stres. Aromaterápia, pomalé rytmické pohyby — ideálna po náročnom týždni.",
                                times: "60 min – 80 €  |  90 min – 100 €",
                            },
                            {
                                name: "Športová masáž",
                                tag: "REGENERÁCIA",
                                desc: "Hlboká masáž zameraná na preťažené svaly a regeneráciu po tréningu. Pre aktívnych športovcov aj bežných ľudí s bolesťami chrbta.",
                                times: "60 min – 85 €  |  90 min – 110 €",
                            },
                            {
                                name: "Reflexológia chodidiel",
                                tag: "ŠPECIÁLNA TECHNIKA",
                                desc: "Masáž reflexných zón chodidiel, ktorá pôsobí na celý organizmus. Uvoľňuje, zlepšuje krvný obeh, podporuje imunitu.",
                                times: "45 min – 50 €",
                            },
                            {
                                name: "Masáž šije & chrbta",
                                tag: "CIELENÁ MASÁŽ",
                                desc: "Cielené uvoľnenie oblasti krku, ramien a chrbta. Pre tých, čo sedia celý deň pri počítači alebo trpia chronickým napätím.",
                                times: "30 min – 35 €  |  60 min – 60 €",
                            },
                        ].map((m) => (
                            <div key={m.name} style={{ border: "1px solid #e0d5c4", padding: "36px", background: "#fff" }}>
                                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#a87840", marginBottom: "12px" }}>{m.tag}</div>
                                <h3 style={{ fontSize: "22px", fontWeight: "normal", marginBottom: "12px" }}>{m.name}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#7a6040", lineHeight: 1.7, marginBottom: "20px" }}>{m.desc}</p>
                                <div style={{ borderTop: "1px solid #e8e0d4", paddingTop: "16px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "#7a5a30", letterSpacing: "0.05em" }}>
                                    {m.times}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* O masérke */}
            <section style={{ padding: "100px 0", background: "#1a130a", color: "#f5f2ed" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div style={{ background: "#261c10", padding: "60px 40px" }}>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#a87840", fontStyle: "italic", lineHeight: 1 }}>„Telo vie,</div>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#f5f2ed", fontStyle: "italic", lineHeight: 1 }}>čo ti</div>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#a87840", fontStyle: "italic", lineHeight: 1 }}>chýba."</div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div style={{ width: "30px", height: "1px", background: "#a87840" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#a87840" }}>O MNE</span>
                        </div>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "normal", marginBottom: "20px", lineHeight: 1.2 }}>
                            Certifikovaná masérka<br />so skúsenosťami.
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#a09070", fontSize: "14px", lineHeight: 1.9, marginBottom: "16px" }}>
                            Volám sa Lari — som certifikovaná masérka so súkromnou praxou v Bratislave. Ku každej klientke pristupujem individuálne — žiadne štandardné postupy, len to čo tvoje telo potrebuje.
                        </p>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#a09070", fontSize: "14px", lineHeight: 1.9, marginBottom: "32px" }}>
                            Pracujem v kľudnom, príjemnom prostredí. Žiadna čakáreň, žiadny zhon. Len ty a hodina pre seba.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { l: "Certifikácia", v: "Profesionálna masérka" },
                                { l: "Prostredie", v: "Kľudná súkromná prax" },
                                { l: "Jazyky", v: "SK / EN / RU" },
                                { l: "Termíny", v: "7 dní v týždni" },
                            ].map(({ l, v }) => (
                                <div key={l} style={{ borderLeft: "2px solid #a87840", paddingLeft: "12px" }}>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#6a5040", letterSpacing: "0.15em", marginBottom: "4px" }}>{l.toUpperCase()}</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "#f5f2ed" }}>{v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ background: "#f5f2ed", padding: "100px 0" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-16">
                        <div style={{ width: "40px", height: "1px", background: "#a87840" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#a87840" }}>REZERVÁCIA</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "normal", marginBottom: "24px", lineHeight: 1.1 }}>
                                Rezervuj si<br /><em style={{ color: "#7a5a30" }}>termín.</em>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6040", fontSize: "14px", lineHeight: 1.8, marginBottom: "36px" }}>
                                Napíš mi správu na Instagrame — dohodneme termín podľa teba, odpovedám do pár hodín.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#a87840", marginBottom: "6px" }}>INSTAGRAM</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>@lari_masaz_bratislava</div>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#a87840", marginBottom: "6px" }}>LOKÁCIA</div>
                                    <div style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>Bratislava (presná adresa po rezervácii)</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: "#e8dfd0", padding: "48px", textAlign: "center" }}>
                            <div style={{ fontSize: "60px", marginBottom: "20px" }}>🌿</div>
                            <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#1a130a", fontStyle: "italic", marginBottom: "24px", lineHeight: 1.5 }}>
                                „Hodina pre seba je tá najlepšia investícia."
                            </p>
                            <a href="https://instagram.com/lari_masaz_bratislava" target="_blank" rel="noopener noreferrer"
                                style={{ display: "inline-block", background: "#7a5a30", color: "#fff", padding: "14px 28px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em" }}
                                className="hover:opacity-90 transition-opacity uppercase">
                                Napísať na Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div style={{ background: "#100d07", color: "#4a3828", padding: "24px", textAlign: "center" }}>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}>
                    © 2025 LARI MASÁŽ · SÚKROMNÁ PRAX · BRATISLAVA
                </p>
            </div>

        </div>
    );
}
