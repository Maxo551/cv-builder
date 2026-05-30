export const metadata = {
    title: "Ateliér TVOR.BA – Keramické kurzy Bratislava",
    description: "Ateliér TVOR.BA Bratislava — keramické kurzy, workshopy, teambuilding. Cukrová 12, Staré Mesto.",
};

export default function AtelierTvorbaDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#f5f0e8", color: "#2c2416", fontFamily: "'Georgia', serif" }}>

            {/* Clay stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #8b6914, #c4983a, #8b6914)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(245,240,232,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e0d5c0" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "15px", letterSpacing: "0.08em", color: "#2c2416" }}>TVOR.BA</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#8b6914", letterSpacing: "0.45em", display: "block", marginTop: "1px" }}>ATELIÉR · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#kurzy" style={{ color: "#aaa" }} className="hover:text-[#8b6914] transition-colors uppercase">Kurzy</a>
                        <a href="#o-nas" style={{ color: "#aaa" }} className="hover:text-[#8b6914] transition-colors uppercase">O nás</a>
                        <a href="#kontakt" style={{ color: "#aaa" }} className="hover:text-[#8b6914] transition-colors uppercase">Rezervovať</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#8b6914", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}>
                <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "36px", height: "1px", background: "#8b6914" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.55em", color: "#8b6914" }}>CUKROVÁ 12 · STARÉ MESTO</span>
                        </div>
                        <h1 style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.02em", marginBottom: "24px", fontWeight: "normal" }}>
                            Vytvor<br />
                            niečo<br />
                            <em style={{ color: "#8b6914" }}>vlastnými</em><br />
                            rukami.
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#8a7860", fontSize: "14px", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px" }}>
                            Keramické kurzy, workshopy a teambuildingy v centre Bratislavy.
                            Pre začiatočníkov aj pokročilých — príďte si oddýchnuť od obrazoviek.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#kontakt" style={{ background: "#8b6914", color: "#fff", padding: "14px 32px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", fontWeight: 700 }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Rezervovať kurz
                            </a>
                            <a href="#kurzy" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#bbb" }}
                                className="uppercase hover:text-[#8b6914] transition-colors self-center">
                                Pozrieť kurzy →
                            </a>
                        </div>
                        <div className="flex gap-12 mt-14 pt-8" style={{ borderTop: "1px solid #e0d5c0" }}>
                            {[
                                { n: "3K+", label: "Sledovatelia" },
                                { n: "167+", label: "Príspevkov" },
                                { n: "Centrum BA", label: "Lokalita" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#8b6914" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", color: "#bbb", letterSpacing: "0.3em", marginTop: "4px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Clay grid */}
                    <div className="hidden md:grid grid-cols-2 gap-3">
                        {[
                            { bg: "#e8dcc8", label: "KURZY" },
                            { bg: "#ddd0b8", label: "WORKSHOP" },
                            { bg: "#e0d4bc", label: "TEAM" },
                            { bg: "#ead8c0", label: "KIDS" },
                        ].map((item) => (
                            <div key={item.label} style={{ background: item.bg, aspectRatio: "1", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: "10px", left: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#c4b090" }}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section id="kurzy" style={{ borderTop: "1px solid #e0d5c0", padding: "90px 0", background: "#ede8dc" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#8b6914" }}>— KURZY</span>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", marginBottom: "48px", fontWeight: "normal" }}>Čo ponúkame</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { tag: "PRAVIDELNÉ", title: "Keramický krúžok", desc: "Týždenné stretnutia pre dospelých. Točenie na kruhu, modelovanie, glazúrovanie. Ideálne na vypnutie po práci.", price: "od 60 € / mesiac", featured: true },
                            { tag: "JEDNORAZOVÉ", title: "Intro workshop", desc: "3-hodinový workshop pre tých, čo chcú vyskúšať keramiku bez záväzku. Bez skúseností vítaní.", price: "od 35 € / osoba" },
                            { tag: "FIRMY", title: "Teambuilding", desc: "Originálny teambuilding v centre Bratislavy. Skupina 8–20 ľudí, 3 hodiny kreativity a zábavy.", price: "individuálna ponuka" },
                            { tag: "DETI", title: "Detské kurzy", desc: "Keramika pre deti od 6 rokov. Rozvoj jemnej motoriky a kreativity v bezpečnom prostredí.", price: "od 45 € / mesiac" },
                        ].map((s) => (
                            <div key={s.title} style={{ background: s.featured ? "#8b6914" : "#f5f0e8", padding: "28px", border: s.featured ? "none" : "1px solid #e0d5c0" }}>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: s.featured ? "rgba(255,255,255,0.5)" : "#8b6914", display: "block", marginBottom: "10px" }}>{s.tag}</span>
                                <h3 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "normal", color: s.featured ? "#fff" : "#2c2416" }}>{s.title}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: 1.7, color: s.featured ? "rgba(255,255,255,0.75)" : "#8a7860", marginBottom: "16px" }}>{s.desc}</p>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", fontWeight: 700, color: s.featured ? "#ffd870" : "#8b6914" }}>{s.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="o-nas" style={{ borderTop: "1px solid #e0d5c0", padding: "90px 0" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div style={{ background: "#e0d4bc", minHeight: "460px", position: "relative" }}>
                        <div style={{ position: "absolute", top: "20px", left: "20px", background: "#8b6914", padding: "8px 14px" }}>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", color: "#fff", letterSpacing: "0.4em" }}>ATELIÉR TVOR.BA</span>
                        </div>
                        <div style={{ position: "absolute", bottom: "20px", right: "20px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#c4b090" }}>CUKROVÁ 12</div>
                    </div>
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#8b6914" }}>— O NÁS</span>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", marginBottom: "20px", fontWeight: "normal" }}>Ateliér TVOR.BA</h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#8a7860", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
                            Sme keramický ateliér v centre Bratislavy na Cukrovej 12. Verujeme, že
                            práca s hlinou je jeden z najlepších spôsobov, ako si oddýchnuť od digitálneho sveta.
                        </p>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#8a7860", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
                            Vítame začiatočníkov aj pokročilých, jednotlivcov aj firmy.
                            Každý si odnesie niečo, čo vytvoril vlastnými rukami.
                        </p>
                        <a href="https://instagram.com/atelier_tvor.ba" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#8b6914", borderBottom: "1px solid #8b6914", paddingBottom: "2px" }}
                            className="uppercase hover:opacity-60 transition-opacity">
                            @atelier_tvor.ba na Instagrame →
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "3px solid #8b6914", padding: "90px 0", background: "#2c2416", color: "#f5f0e8" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#8b6914" }}>— REZERVÁCIA</span>
                        <h2 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 0.95, marginTop: "8px", marginBottom: "24px", fontWeight: "normal" }}>
                            Príďte<br />
                            <em style={{ color: "#c4983a" }}>tvoriť.</em>
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#6a5a40", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px" }}>
                            Napíšte nám email alebo na Instagram — dohodnem kurz, termín aj skupinu presne pre vás.
                        </p>
                        <div className="mt-10 space-y-4">
                            {[
                                { label: "Email", value: "ateliertvor.ba@gmail.com" },
                                { label: "Instagram", value: "@atelier_tvor.ba" },
                                { label: "Adresa", value: "Cukrová 12, Bratislava – Staré Mesto" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #3a3020" }}>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#4a4030", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#6a5a40" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a href="mailto:ateliertvor.ba@gmail.com"
                            className="block w-full text-center uppercase font-bold"
                            style={{ background: "#8b6914", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Napísať email →
                        </a>
                        <a href="https://instagram.com/atelier_tvor.ba" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase"
                            style={{ border: "1px solid #8b6914", color: "#8b6914", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Instagram @atelier_tvor.ba
                        </a>
                    </div>
                </div>
            </section>

            <footer style={{ borderTop: "1px solid #1e1810", padding: "28px 0", background: "#1e1810" }}>
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "12px", color: "#4a3a20", letterSpacing: "0.08em" }}>Ateliér TVOR.BA · Bratislava</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#4a3a20" }}>© 2026 · Cukrová 12, Staré Mesto</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#4a3a20" }}>Web vytvoril <span style={{ color: "#6a5a40" }}>Maxim Šinkovič</span></p>
                </div>
            </footer>
        </div>
    );
}
