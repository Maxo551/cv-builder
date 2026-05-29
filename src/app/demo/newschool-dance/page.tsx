export const metadata = {
    title: "Newschool Underground – Dance Studio Bratislava",
    description: "Hip-hop, urban & reggaeton dance classes in Bratislava. Newschool Underground Dance Studio, Pionierska 17.",
};

export default function NewschoolDanceDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#0a0a0a", color: "#f5f5f5", fontFamily: "Arial, sans-serif" }}>

            {/* Yellow stripe */}
            <div style={{ height: "4px", background: "#FFD600" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1f1f1f" }}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "14px", letterSpacing: "0.1em", color: "#fff" }}>
                            NEWSCHOOL
                        </span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#FFD600", letterSpacing: "0.4em", display: "block", marginTop: "1px" }}>UNDERGROUND DANCE STUDIO</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#rozvrh" style={{ color: "#666" }} className="hover:text-[#FFD600] transition-colors uppercase">Rozvrh</a>
                        <a href="#kurzy" style={{ color: "#666" }} className="hover:text-[#FFD600] transition-colors uppercase">Kurzy</a>
                        <a href="#kontakt" style={{ color: "#666" }} className="hover:text-[#FFD600] transition-colors uppercase">Kontakt</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#FFD600", color: "#0a0a0a", padding: "10px 24px", fontFamily: "Arial Black, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Prihlásiť sa
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 60%, #1a1500 0%, #0a0a0a 70%)" }} />

                <div className="max-w-6xl mx-auto px-6 w-full" style={{ position: "relative", zIndex: 1 }}>
                    <div className="flex items-center gap-4 mb-8">
                        <div style={{ width: "48px", height: "3px", background: "#FFD600" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#FFD600" }}>BRATISLAVA · PIONIERSKA 17</span>
                    </div>

                    <h1 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(4rem, 14vw, 12rem)", lineHeight: 0.85, letterSpacing: "-0.03em", marginBottom: "32px" }}>
                        MOVE.<br />
                        <span style={{ color: "#FFD600" }}>VIBE.</span><br />
                        GROW.
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 mt-8">
                        <div>
                            <p style={{ color: "#777", fontSize: "15px", lineHeight: 1.75, marginBottom: "36px", maxWidth: "400px" }}>
                                Hip-hop, urban & reggaeton — tancuj s ľuďmi, ktorí ťa inšpirujú.
                                Kurzy pre všetky úrovne, každý týždeň, v centre Bratislavy.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#rozvrh" style={{ background: "#FFD600", color: "#0a0a0a", padding: "16px 36px", fontFamily: "Arial Black, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                    className="uppercase hover:opacity-90 transition-opacity">
                                    Pozrieť rozvrh
                                </a>
                                <a href="#kontakt" style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#555", border: "1px solid #222", padding: "16px 24px" }}
                                    className="uppercase hover:border-[#FFD600] hover:text-[#FFD600] transition-colors">
                                    Prihlásiť sa
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-12 items-center">
                            {[
                                { n: "3+", label: "Štýly" },
                                { n: "1.8K", label: "Sledovatelia" },
                                { n: "5+", label: "Rokov" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontFamily: "Arial Black, sans-serif", fontSize: "28px", color: "#FFD600" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#555", letterSpacing: "0.35em", marginTop: "4px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative vertical text */}
                <div style={{ position: "absolute", right: "40px", top: "50%", transform: "translateY(-50%) rotate(90deg)", fontFamily: "Arial Black, sans-serif", fontSize: "9px", letterSpacing: "0.6em", color: "#1f1f1f" }}>
                    UNDERGROUND DANCE STUDIO
                </div>
            </section>

            {/* Schedule */}
            <section id="rozvrh" style={{ borderTop: "1px solid #1f1f1f", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#FFD600" }}>— ROZVRH</span>
                    <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "8px", marginBottom: "48px", letterSpacing: "-0.01em" }}>
                        Týždenný plán
                    </h2>
                    <div className="grid md:grid-cols-5 gap-3">
                        {[
                            { day: "PO", classes: [{ time: "18:00", name: "Hip-Hop Basics", level: "ZAČIATOČNÍCI" }] },
                            { day: "UT", classes: [{ time: "19:30", name: "Urban Freestyle", level: "POKROČILÍ" }] },
                            { day: "ST", classes: [{ time: "18:00", name: "Reggaeton", level: "VŠETKY ÚROVNE" }, { time: "20:00", name: "Hip-Hop Adv.", level: "POKROČILÍ" }] },
                            { day: "ŠT", classes: [{ time: "19:00", name: "Street Dance", level: "STREDNÁ ÚROVEŇ" }] },
                            { day: "SO", classes: [{ time: "10:00", name: "Open Session", level: "VŠETKY ÚROVNE" }] },
                        ].map((d) => (
                            <div key={d.day} style={{ background: "#111", border: "1px solid #1f1f1f", padding: "20px" }}>
                                <div style={{ fontFamily: "Arial Black, sans-serif", fontSize: "28px", color: "#FFD600", marginBottom: "16px", lineHeight: 1 }}>{d.day}</div>
                                <div className="space-y-4">
                                    {d.classes.map((c) => (
                                        <div key={c.time} style={{ borderLeft: "2px solid #FFD600", paddingLeft: "10px" }}>
                                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#FFD600", display: "block" }}>{c.time}</span>
                                            <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "13px", display: "block", marginTop: "2px" }}>{c.name}</span>
                                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#555", letterSpacing: "0.3em", display: "block", marginTop: "2px" }}>{c.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section id="kurzy" style={{ borderTop: "1px solid #1f1f1f", padding: "90px 0", background: "#0d0d0d" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#FFD600" }}>— KURZY</span>
                    <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "8px", marginBottom: "48px" }}>
                        Štýly
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Hip-Hop",
                                desc: "Od základov po freestyle. Groovy, cypher, battles — autentický hip-hop v každom pohybe.",
                                emoji: "🎤",
                                tag: "FOUNDATION",
                            },
                            {
                                title: "Urban & Street",
                                desc: "Moderné pohyby z ulice — krump, waacking, vogue, locking. Každá hodina je iná.",
                                emoji: "🔥",
                                tag: "STREET",
                                featured: true,
                            },
                            {
                                title: "Reggaeton",
                                desc: "Latinský rytmus, sexy pohyb, dobrá nálada. Kurz pre všetkých, ktorí chcú len tancovať.",
                                emoji: "🎵",
                                tag: "LATIN",
                            },
                        ].map((c) => (
                            <div key={c.title} style={{ background: c.featured ? "#FFD600" : "#141414", padding: "32px", border: c.featured ? "none" : "1px solid #1f1f1f" }}>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: c.featured ? "#000" : "#FFD600", display: "block", marginBottom: "12px" }}>{c.tag}</span>
                                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{c.emoji}</div>
                                <h3 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "22px", marginBottom: "12px", color: c.featured ? "#000" : "#fff" }}>{c.title}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", color: c.featured ? "#333" : "#666", fontSize: "13px", lineHeight: 1.7 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "4px solid #FFD600", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#FFD600" }}>— KONTAKT</span>
                            <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.9, marginTop: "8px", marginBottom: "24px" }}>
                                PRÍĎ<br />
                                <span style={{ color: "#FFD600" }}>TANCOVAŤ.</span>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#666", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px", marginBottom: "32px" }}>
                                Prvá hodina zadarmo — príď vyskúšať a zisti, čo ti pasuje.
                                Napíš nám na WhatsApp alebo Instagram.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Adresa", value: "Pionierska 17, Bratislava" },
                                    { label: "WhatsApp", value: "+421 908 790 216" },
                                    { label: "Instagram", value: "@newschoolsk" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #1a1a1a" }}>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#444", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#777" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a href="https://wa.me/421908790216" target="_blank" rel="noopener noreferrer"
                                className="block w-full text-center uppercase font-bold"
                                style={{ background: "#FFD600", color: "#000", padding: "20px", fontFamily: "Arial Black, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                                WhatsApp +421 908 790 216 →
                            </a>
                            <a href="https://instagram.com/newschoolsk" target="_blank" rel="noopener noreferrer"
                                className="block w-full text-center uppercase"
                                style={{ border: "1px solid #FFD600", color: "#FFD600", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                                Instagram @newschoolsk
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #111", padding: "28px 0", background: "#050505" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "11px", color: "#333", letterSpacing: "0.2em" }}>NEWSCHOOL UNDERGROUND · BRATISLAVA</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#333" }}>© 2026 · Pionierska 17, Bratislava</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#333" }}>
                        Web vytvoril <span style={{ color: "#555" }}>Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
