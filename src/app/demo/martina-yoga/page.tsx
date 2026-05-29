export const metadata = {
    title: "Martina Fong – Yoga & Pilates Bratislava",
    description: "Private and corporate yoga & pilates classes in Bratislava. RYT200 Yoga + BASI Pilates certified.",
};

export default function MartinaYogaDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#f7f5f0", color: "#2c2c2c", fontFamily: "'Georgia', serif" }}>

            {/* Sage top stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #7a9e7e, #a8c5a0, #7a9e7e)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(247,245,240,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e0d5" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", letterSpacing: "0.06em", color: "#2c2c2c" }}>Martina Fong</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#7a9e7e", letterSpacing: "0.4em", display: "block", marginTop: "1px" }}>YOGA & PILATES · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#classes" style={{ color: "#aaa" }} className="hover:text-[#7a9e7e] transition-colors uppercase">Classes</a>
                        <a href="#about" style={{ color: "#aaa" }} className="hover:text-[#7a9e7e] transition-colors uppercase">About</a>
                        <a href="#contact" style={{ color: "#aaa" }} className="hover:text-[#7a9e7e] transition-colors uppercase">Contact</a>
                    </div>
                    <a href="#contact" style={{ background: "#7a9e7e", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Book now
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
                <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "36px", height: "1px", background: "#7a9e7e" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#7a9e7e" }}>RYT200 · BASI PILATES</span>
                        </div>
                        <h1 className="font-normal leading-none mb-8" style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
                            Find your<br />
                            <em style={{ fontStyle: "italic", color: "#7a9e7e" }}>stillness.</em>
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "14px", lineHeight: 1.8, maxWidth: "380px", marginBottom: "36px" }}>
                            Private and corporate yoga & pilates classes in Bratislava.
                            Individual attention, certified instructor, results you actually feel.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" style={{ background: "#7a9e7e", color: "#fff", padding: "14px 32px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                First class
                            </a>
                            <a href="#classes" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#bbb" }}
                                className="uppercase hover:text-[#7a9e7e] transition-colors self-center">
                                Learn more →
                            </a>
                        </div>
                        <div className="flex gap-12 mt-14 pt-8" style={{ borderTop: "1px solid #e5e0d5" }}>
                            {[
                                { n: "3K+", label: "Followers" },
                                { n: "RYT200", label: "Certified" },
                                { n: "Corp & Private", label: "Classes" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="font-normal" style={{ fontSize: "16px", color: "#7a9e7e" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", color: "#bbb", letterSpacing: "0.3em", marginTop: "4px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photo placeholder */}
                    <div className="hidden md:grid grid-cols-2 gap-3">
                        <div style={{ background: "#e8e3d8", aspectRatio: "2/3", gridRow: "span 2", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "14px", left: "14px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#bbb" }}>YOGA</div>
                        </div>
                        <div style={{ background: "#dfd9ce", aspectRatio: "1", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#bbb" }}>PILATES</div>
                        </div>
                        <div style={{ background: "#e4dfd5", aspectRatio: "1", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#bbb" }}>CORP.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classes */}
            <section id="classes" style={{ borderTop: "1px solid #e5e0d5", padding: "90px 0", background: "#f0ede6" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#7a9e7e" }}>— CLASSES</span>
                    <h2 className="font-normal mt-2 mb-14" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>What I offer</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                tag: "YOGA",
                                title: "Private yoga",
                                desc: "1-on-1 sessions tailored to your goals and level. Hatha, vinyasa, yin — whatever you need.",
                                price: "from €45 / hr",
                            },
                            {
                                tag: "PILATES",
                                title: "Pilates classes",
                                desc: "BASI Pilates method — mat and reformer. Core strength, posture, mobility.",
                                price: "from €45 / hr",
                            },
                            {
                                tag: "CORPORATE",
                                title: "Corporate wellness",
                                desc: "Group classes at your office. Regular morning or lunch sessions for your team.",
                                price: "Custom quote",
                            },
                        ].map((s) => (
                            <div key={s.title} style={{ borderTop: "2px solid #7a9e7e", paddingTop: "24px" }}>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#b5c9b3", display: "block", marginBottom: "10px" }}>{s.tag}</span>
                                <h3 className="font-normal mb-3" style={{ fontSize: "18px" }}>{s.title}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", color: "#999", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>{s.desc}</p>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 700, color: "#7a9e7e" }}>{s.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" style={{ borderTop: "1px solid #e5e0d5", padding: "90px 0" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div style={{ background: "#e4dfd5", minHeight: "480px", position: "relative" }}>
                        <div style={{ position: "absolute", bottom: "20px", right: "20px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#bbb" }}>MARTINA FONG</div>
                        <div style={{ position: "absolute", top: "20px", left: "20px", background: "#7a9e7e", padding: "8px 14px" }}>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", color: "#fff", letterSpacing: "0.4em" }}>RYT200 · BASI</span>
                        </div>
                    </div>
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#7a9e7e" }}>— ABOUT</span>
                        <h2 className="font-normal mt-2 mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Martina Fong</h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
                            Certified yoga instructor (RYT200) and pilates teacher (BASI) based in Bratislava.
                            I believe movement should feel good — my classes reflect that.
                        </p>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
                            I work with private clients and corporate teams. 3,000 people follow
                            my work on Instagram — come see why.
                        </p>
                        <a href="https://instagram.com/martina_fong" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#7a9e7e", borderBottom: "1px solid #7a9e7e", paddingBottom: "2px" }}
                            className="uppercase hover:opacity-60 transition-opacity">
                            @martina_fong on Instagram →
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" style={{ borderTop: "3px solid #7a9e7e", padding: "90px 0", background: "#2c2c2c", color: "#f7f5f0" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#7a9e7e" }}>— CONTACT</span>
                        <h2 className="font-normal mt-2 mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 0.95 }}>
                            Start<br />
                            <em style={{ fontStyle: "italic", color: "#a8c5a0" }}>today.</em>
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#777", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px" }}>
                            The first class is a trial — we figure out what you need and whether
                            we click. Just send me a message on Instagram.
                        </p>
                        <div className="mt-10 space-y-4">
                            {[
                                { label: "Instagram", value: "@martina_fong" },
                                { label: "Classes", value: "Private & Corporate" },
                                { label: "Location", value: "Bratislava" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #333" }}>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#555", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#888" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a href="https://instagram.com/martina_fong" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase font-bold"
                            style={{ background: "#7a9e7e", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Instagram @martina_fong →
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #232323", padding: "28px 0", background: "#1e1e1e" }}>
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "12px", color: "#444", letterSpacing: "0.08em" }}>Martina Fong · Yoga & Pilates Bratislava</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#444" }}>© 2026 · Bratislava</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#444" }}>Website by <span style={{ color: "#555" }}>Maxim Šinkovič</span></p>
                </div>
            </footer>
        </div>
    );
}
