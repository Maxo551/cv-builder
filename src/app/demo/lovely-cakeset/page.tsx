export const metadata = {
    title: "Lovely Cakeset – Torty na objednávku Bratislava",
    description: "Lovely Cakeset Bratislava — torty, bento cake, cupcake na objednávku. Objednávky cez WhatsApp.",
};

export default function LovelyCakesetDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#fdf9f4", color: "#2a1f14", fontFamily: "'Georgia', serif" }}>

            {/* Warm stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #c97d4e, #e8a878, #c97d4e)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(253,249,244,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #ede4d8" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", letterSpacing: "0.1em", color: "#2a1f14" }}>Lovely Cakeset</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#c97d4e", letterSpacing: "0.45em", display: "block", marginTop: "1px" }}>TORTY NA OBJEDNÁVKU · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#ponuka" style={{ color: "#bbb" }} className="hover:text-[#c97d4e] transition-colors uppercase">Ponuka</a>
                        <a href="#galeria" style={{ color: "#bbb" }} className="hover:text-[#c97d4e] transition-colors uppercase">Galéria</a>
                        <a href="#objednat" style={{ color: "#bbb" }} className="hover:text-[#c97d4e] transition-colors uppercase">Objednať</a>
                    </div>
                    <a href="#objednat" style={{ background: "#c97d4e", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Objednať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}>
                <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "36px", height: "1px", background: "#c97d4e" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.55em", color: "#c97d4e" }}>BRATISLAVA · HANDMADE</span>
                        </div>
                        <h1 style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.02em", marginBottom: "24px", fontWeight: "normal" }}>
                            Torty,<br />
                            ktoré <em style={{ color: "#c97d4e" }}>pamätáte</em><br />
                            celý život.
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#9a8474", fontSize: "14px", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px" }}>
                            Každá torta je malé dielo — ručne zdobená, z kvalitných surovín,
                            presne podľa vašich predstáv. Narodeniny, svadby, oslavy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#objednat" style={{ background: "#c97d4e", color: "#fff", padding: "14px 32px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", fontWeight: 700 }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Objednať tortu
                            </a>
                            <a href="#galeria" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#bbb" }}
                                className="uppercase hover:text-[#c97d4e] transition-colors self-center">
                                Pozrieť galériu →
                            </a>
                        </div>
                    </div>

                    {/* Cake grid placeholder */}
                    <div className="hidden md:grid grid-cols-2 gap-3">
                        <div style={{ background: "#f0e6d8", aspectRatio: "2/3", gridRow: "span 2", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "14px", left: "14px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#c9b09a" }}>TORTA</div>
                        </div>
                        <div style={{ background: "#ede0d0", aspectRatio: "1", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#c9b09a" }}>BENTO</div>
                        </div>
                        <div style={{ background: "#f5ece0", aspectRatio: "1", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#c9b09a" }}>CUPCAKE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offer */}
            <section id="ponuka" style={{ borderTop: "1px solid #ede4d8", padding: "90px 0", background: "#f7f1e8" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#c97d4e" }}>— PONUKA</span>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", marginBottom: "48px", fontWeight: "normal" }}>Čo robíme</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { tag: "TORTY", title: "Torty na objednávku", desc: "Narodeninové, svadobné, tematické. Každá torta je iná — navrhnem ju presne podľa vás.", emoji: "🎂" },
                            { tag: "BENTO", title: "Bento cake", desc: "Malá kórejská tortička — ideálna ako darček. Ručne zdobená, s vlastným odkazom.", emoji: "🍱", featured: true },
                            { tag: "CUPCAKES", title: "Cupcakes & mini dezerty", desc: "Sety cupcakes na akcie, firemné oslavy, svadby. Aj na mieru pre väčšie počty.", emoji: "🧁" },
                        ].map((s) => (
                            <div key={s.title} style={{ background: s.featured ? "#c97d4e" : "#fdf9f4", padding: "32px", border: s.featured ? "none" : "1px solid #ede4d8" }}>
                                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{s.emoji}</div>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: s.featured ? "rgba(255,255,255,0.6)" : "#c97d4e", display: "block", marginBottom: "8px" }}>{s.tag}</span>
                                <h3 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "normal", color: s.featured ? "#fff" : "#2a1f14" }}>{s.title}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: 1.7, color: s.featured ? "rgba(255,255,255,0.8)" : "#9a8474" }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="galeria" style={{ borderTop: "1px solid #ede4d8", padding: "90px 0" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#c97d4e" }}>— GALÉRIA</span>
                            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", fontWeight: "normal" }}>Naše práce</h2>
                        </div>
                        <a href="https://instagram.com/lovely_cakeset" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#bbb", letterSpacing: "0.3em" }}
                            className="hover:text-[#c97d4e] transition-colors uppercase hidden md:block">
                            Instagram →
                        </a>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} style={{ aspectRatio: "1", background: i % 3 === 0 ? "#f0e6d8" : i % 3 === 1 ? "#ede0d0" : "#f5ece0", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: "8px", right: "8px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.3em", color: "#d4b89a" }}>0{i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Order */}
            <section id="objednat" style={{ borderTop: "3px solid #c97d4e", padding: "90px 0", background: "#2a1f14", color: "#fdf9f4" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#c97d4e" }}>— OBJEDNÁVKA</span>
                        <h2 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 0.95, marginTop: "8px", marginBottom: "24px", fontWeight: "normal" }}>
                            Objednajte<br />
                            <em style={{ color: "#e8a878" }}>svoju tortu.</em>
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#7a6a5a", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px" }}>
                            Objednávky min. 5–7 dní vopred. Napíšte nám na WhatsApp alebo Instagram —
                            dohodnem veľkosť, dizajn a termín.
                        </p>
                        <div className="mt-10 space-y-4">
                            {[
                                { label: "WhatsApp", value: "+380 66 194 9387" },
                                { label: "Instagram", value: "@lovely_cakeset" },
                                { label: "Lokalita", value: "Bratislava" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #3a2d1f" }}>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#555", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#7a6a5a" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a href="https://wa.me/380661949387" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase font-bold"
                            style={{ background: "#c97d4e", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            WhatsApp objednávka →
                        </a>
                        <a href="https://instagram.com/lovely_cakeset" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase"
                            style={{ border: "1px solid #c97d4e", color: "#c97d4e", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Instagram @lovely_cakeset
                        </a>
                    </div>
                </div>
            </section>

            <footer style={{ borderTop: "1px solid #1e1510", padding: "28px 0", background: "#1e1510" }}>
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "12px", color: "#4a3a2a", letterSpacing: "0.1em" }}>Lovely Cakeset · Bratislava</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#4a3a2a" }}>© 2026 · Bratislava</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#4a3a2a" }}>Web vytvoril <span style={{ color: "#6a5a4a" }}>Maxim Šinkovič</span></p>
                </div>
            </footer>
        </div>
    );
}
