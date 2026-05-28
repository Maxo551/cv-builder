export const metadata = {
    title: "Patrisha – Anime Tattoo Artist Bratislava",
    description: "Patrisha — anime & manga tattoo artist based in Bratislava. 29K followers. Booking via Instagram.",
};

export default function PatrishaTattooDemo() {
    return (
        <div className="min-h-screen text-white" style={{ background: "#08080f", fontFamily: "'Arial', sans-serif" }}>

            {/* Gradient top strip */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #FF1B8D, #A855F7, #06B6D4)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(8,8,15,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1a1a2e" }}>
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <span className="font-black uppercase tracking-tight" style={{ fontSize: "18px", letterSpacing: "-0.01em" }}>
                        PATRISHA
                        <span style={{ color: "#FF1B8D", marginLeft: "6px" }}>✦</span>
                    </span>
                    <div className="hidden md:flex items-center gap-8" style={{ fontSize: "11px", letterSpacing: "0.25em" }}>
                        <a href="#gallery" className="text-zinc-500 hover:text-white transition-colors uppercase">Galeria</a>
                        <a href="#styles" className="text-zinc-500 hover:text-white transition-colors uppercase">Štýly</a>
                        <a href="#booking" className="text-zinc-500 hover:text-white transition-colors uppercase">Booking</a>
                    </div>
                    <a
                        href="#booking"
                        className="font-black uppercase text-white"
                        style={{ background: "linear-gradient(135deg, #FF1B8D, #A855F7)", padding: "8px 20px", fontSize: "11px", letterSpacing: "0.2em", borderRadius: "4px" }}
                    >
                        Book now
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "95vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
                {/* Background glow blobs */}
                <div style={{
                    position: "absolute", top: "10%", right: "10%",
                    width: "500px", height: "500px",
                    background: "radial-gradient(circle, rgba(255,27,141,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: "10%", left: "5%",
                    width: "400px", height: "400px",
                    background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="relative max-w-6xl mx-auto px-6 w-full" style={{ zIndex: 1 }}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div style={{ width: "28px", height: "2px", background: "linear-gradient(90deg, #FF1B8D, #A855F7)" }} />
                                <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#FF1B8D", fontWeight: 700 }}>
                                    BRATISLAVA · SLOVAKIA
                                </span>
                            </div>

                            <h1
                                className="font-black uppercase leading-none mb-4"
                                style={{ fontSize: "clamp(3.5rem, 11vw, 8rem)", letterSpacing: "-0.03em", lineHeight: 0.88 }}
                            >
                                ANIME<br />
                                <span style={{ WebkitTextStroke: "2px #FF1B8D", color: "transparent" }}>TATTOO</span><br />
                                ARTIST.
                            </h1>

                            <p className="mb-8" style={{ color: "#666", fontSize: "15px", lineHeight: 1.7, maxWidth: "380px" }}>
                                Manga, anime, pop-art. Každé tetovanie je pocta postavám
                                a svetom, ktoré milujeme. Cestujem po celej Európe.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href="#booking"
                                    className="font-black uppercase text-white"
                                    style={{ background: "linear-gradient(135deg, #FF1B8D, #A855F7)", padding: "14px 28px", fontSize: "12px", letterSpacing: "0.2em", borderRadius: "4px" }}
                                >
                                    Rezervovať termín
                                </a>
                                <a
                                    href="#gallery"
                                    style={{ color: "#555", fontSize: "11px", letterSpacing: "0.3em", fontWeight: 700 }}
                                    className="uppercase hover:text-white transition-colors"
                                >
                                    Pozrieť práce →
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-10 mt-14 pt-8" style={{ borderTop: "1px solid #1a1a2e" }}>
                                {[
                                    { n: "29K", label: "Followers" },
                                    { n: "EU", label: "Guest spots" },
                                    { n: "∞", label: "Anime štýlov" },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <p className="font-black" style={{ fontSize: "22px", background: "linear-gradient(135deg, #FF1B8D, #A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.02em" }}>{s.n}</p>
                                        <p style={{ fontSize: "10px", color: "#444", letterSpacing: "0.3em" }}>{s.label.toUpperCase()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Portrait placeholder */}
                        <div className="relative hidden md:block">
                            <div style={{ aspectRatio: "3/4", background: "#111120", position: "relative", overflow: "hidden", borderRadius: "4px" }}>
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,27,141,0.08) 0%, rgba(168,85,247,0.08) 100%)" }} />
                                <div style={{ position: "absolute", top: "16px", left: "16px", right: "16px", bottom: "16px", border: "1px solid rgba(255,27,141,0.2)", borderRadius: "2px" }} />
                                <div style={{ position: "absolute", bottom: "24px", left: "24px", fontSize: "10px", letterSpacing: "0.4em", color: "#FF1B8D", fontWeight: 700 }}>
                                    @patrisha_ink
                                </div>
                            </div>
                            {/* Decorative corner element */}
                            <div style={{ position: "absolute", top: "-12px", right: "-12px", width: "80px", height: "80px", border: "2px solid rgba(168,85,247,0.3)", borderRadius: "50%" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" style={{ borderTop: "1px solid #1a1a2e", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#FF1B8D", fontWeight: 700 }}>— PORTFOLIO</span>
                            <h2 className="font-black uppercase mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                                Vybrané práce
                            </h2>
                        </div>
                        <a
                            href="https://instagram.com/patrisha_ink"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "11px", color: "#555", letterSpacing: "0.3em" }}
                            className="hover:text-white transition-colors uppercase"
                        >
                            @patrisha_ink →
                        </a>
                    </div>

                    {/* Manga panel inspired grid */}
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-5 row-span-2 relative" style={{ background: "#111120", minHeight: "380px" }}>
                            <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.4em", color: "#FF1B8D", fontWeight: 700 }}>ANIME</div>
                            <div style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>FIG. 01</div>
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,27,141,0.05) 0%, transparent 60%)" }} />
                        </div>
                        <div className="col-span-7 relative" style={{ background: "#0f0f1a", minHeight: "185px", border: "1px solid #1a1a2e" }}>
                            <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.4em", color: "#A855F7", fontWeight: 700 }}>MANGA</div>
                            <div style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>FIG. 02</div>
                        </div>
                        <div className="col-span-4 relative" style={{ background: "#111120", minHeight: "185px" }}>
                            <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.4em", color: "#06B6D4", fontWeight: 700 }}>POP ART</div>
                            <div style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>FIG. 03</div>
                        </div>
                        <div className="col-span-3 relative" style={{ background: "#0d0d1a", border: "1px solid #1a1a2e", minHeight: "185px" }}>
                            <div style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>FIG. 04</div>
                        </div>
                        {/* Bottom strip */}
                        {[5, 6, 7].map((n) => (
                            <div key={n} className="col-span-4 relative" style={{ background: "#111120", minHeight: "200px", border: n === 6 ? "1px solid rgba(255,27,141,0.15)" : "none" }}>
                                <div style={{ position: "absolute", top: 0, left: 0, width: n === 6 ? "100%" : "0", height: "2px", background: "linear-gradient(90deg, #FF1B8D, #A855F7)", opacity: n === 6 ? 1 : 0 }} />
                                <div style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>FIG. 0{n}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Styles */}
            <section id="styles" style={{ borderTop: "1px solid #1a1a2e", padding: "80px 0", background: "#060610" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#FF1B8D", fontWeight: 700 }}>— ŠPECIALITY</span>
                    <h2 className="font-black uppercase mt-2 mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                        Štýly
                    </h2>
                    <div className="grid md:grid-cols-3 gap-px" style={{ background: "#1a1a2e" }}>
                        {[
                            {
                                name: "Anime & Manga",
                                desc: "Postavy z tvojho obľúbeného anime — Naruto, Attack on Titan, Demon Slayer, JJK. Každý detail na mieru.",
                                color: "#FF1B8D",
                                tag: "SIGNATURE",
                            },
                            {
                                name: "Pop Art",
                                desc: "Výrazné farby, bold línie, retro komiksový feeling. Pre tých, čo chcú web v skutočnom živote.",
                                color: "#A855F7",
                                tag: "COLORFUL",
                            },
                            {
                                name: "Fine Line Color",
                                desc: "Jemné línie s farebnými akcentmi. Elegantné anime motívy s trvalým WOW efektom.",
                                color: "#06B6D4",
                                tag: "DELICATE",
                            },
                        ].map((s) => (
                            <div key={s.name} className="p-8 hover:bg-[#0f0f1a] transition-colors" style={{ background: "#08080f" }}>
                                <div style={{ width: "32px", height: "3px", background: s.color, marginBottom: "20px", borderRadius: "2px" }} />
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-black uppercase" style={{ fontSize: "16px", letterSpacing: "-0.01em" }}>{s.name}</h3>
                                    <span style={{ fontSize: "9px", letterSpacing: "0.4em", color: s.color, fontWeight: 700 }}>{s.tag}</span>
                                </div>
                                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section id="booking" style={{ borderTop: "1px solid #1a1a2e", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#FF1B8D", fontWeight: 700 }}>— REZERVÁCIA</span>
                            <h2 className="font-black uppercase mt-2 mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}>
                                Tvoj<br />
                                <span style={{ background: "linear-gradient(135deg, #FF1B8D, #A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    anime.
                                </span>
                            </h2>
                            <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, maxWidth: "380px", marginBottom: "32px" }}>
                                Napíš mi na Instagram s tvojou predstavou — postavou, štýlom,
                                miestom a veľkosťou. Ozvem sa čo najskôr.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Studio", value: "Bratislava, Slovakia" },
                                    { label: "Guest spots", value: "Celá Európa" },
                                    { label: "Booking", value: "Instagram DM only" },
                                    { label: "Odpoveď", value: "Do 48 hodín" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-8 items-baseline pb-3" style={{ borderBottom: "1px solid #1a1a2e" }}>
                                        <span style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#333", width: "80px", flexShrink: 0, fontWeight: 700 }}>
                                            {item.label.toUpperCase()}
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#888" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <a
                                href="https://instagram.com/patrisha_ink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center font-black uppercase text-white"
                                style={{
                                    background: "linear-gradient(135deg, #FF1B8D, #A855F7)",
                                    padding: "20px",
                                    fontSize: "13px",
                                    letterSpacing: "0.25em",
                                    borderRadius: "4px",
                                    marginBottom: "12px",
                                }}
                            >
                                DM na Instagram @patrisha_ink →
                            </a>
                            <p style={{ fontSize: "11px", color: "#333", textAlign: "center", letterSpacing: "0.2em" }}>
                                BOOKING ONLY VIA INSTAGRAM DIRECT MESSAGE
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #1a1a2e", padding: "32px 0" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-black uppercase" style={{ letterSpacing: "0.15em", fontSize: "13px" }}>
                        PATRISHA
                        <span style={{ background: "linear-gradient(135deg, #FF1B8D, #A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 8px" }}>✦</span>
                        ANIME TATTOO
                    </span>
                    <p style={{ fontSize: "11px", color: "#333" }}>© 2026 · Bratislava, Slovakia</p>
                    <p style={{ fontSize: "11px", color: "#222" }}>
                        Web vytvoril <span style={{ color: "#444" }}>Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
