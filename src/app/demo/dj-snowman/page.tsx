export const metadata = {
    title: "DJ Snowman – Svadobný a eventový DJ Bratislava",
    description: "500+ svadieb. DJ Snowman — svadobný a eventový DJ v Bratislave. Rezervácia termínu.",
};

export default function DjSnowmanDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#06060a", color: "#f0f0f0", fontFamily: "Arial, sans-serif" }}>

            {/* Gold stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #C9A84C, #F0D080, #C9A84C)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(6,6,10,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #141420" }}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "15px", letterSpacing: "0.15em", color: "#fff" }}>DJ SNOWMAN</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#C9A84C", letterSpacing: "0.4em", display: "block", marginTop: "1px" }}>SVADOBNÝ & EVENTOVÝ DJ · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#sluzby" style={{ color: "#555" }} className="hover:text-[#C9A84C] transition-colors uppercase">Služby</a>
                        <a href="#o-mne" style={{ color: "#555" }} className="hover:text-[#C9A84C] transition-colors uppercase">O mne</a>
                        <a href="#kontakt" style={{ color: "#555" }} className="hover:text-[#C9A84C] transition-colors uppercase">Kontakt</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#C9A84C", color: "#06060a", padding: "10px 24px", fontFamily: "Arial Black, sans-serif", fontSize: "10px", letterSpacing: "0.2em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 60%, #1a1408 0%, #06060a 65%)" }} />
                {/* Decorative circles */}
                <div style={{ position: "absolute", right: "-10%", top: "10%", width: "600px", height: "600px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)" }} />
                <div style={{ position: "absolute", right: "-5%", top: "15%", width: "450px", height: "450px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.05)" }} />

                <div className="max-w-6xl mx-auto px-6 w-full" style={{ position: "relative", zIndex: 1 }}>
                    <div className="flex items-center gap-4 mb-10">
                        <div style={{ width: "48px", height: "2px", background: "#C9A84C" }} />
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.6em", color: "#C9A84C" }}>BRATISLAVA · SLOVENSKO</span>
                    </div>

                    <h1 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(4rem, 13vw, 11rem)", lineHeight: 0.87, letterSpacing: "-0.03em", marginBottom: "36px" }}>
                        YOUR<br />
                        NIGHT.<br />
                        <span style={{ color: "#C9A84C" }}>YOUR</span><br />
                        MUSIC.
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 mt-4">
                        <div>
                            <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.75, marginBottom: "36px", maxWidth: "420px" }}>
                                Svadby, firemné akcie, súkromné párty — každý event dostane
                                vlastný soundtrack. Nie šablónu, ale hudbu, ktorú si zapamätáte.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#kontakt" style={{ background: "#C9A84C", color: "#06060a", padding: "16px 36px", fontFamily: "Arial Black, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
                                    className="uppercase hover:opacity-90 transition-opacity">
                                    Rezervovať termín
                                </a>
                                <a href="#sluzby" style={{ fontSize: "11px", letterSpacing: "0.25em", color: "#444", border: "1px solid #1a1a2a", padding: "16px 24px" }}
                                    className="uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                                    Viac info
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-14 items-center">
                            {[
                                { n: "500+", label: "Svadieb" },
                                { n: "15+", label: "Rokov" },
                                { n: "1.9K", label: "Sledovatelia" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontFamily: "Arial Black, sans-serif", fontSize: "30px", color: "#C9A84C", lineHeight: 1 }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#444", letterSpacing: "0.35em", marginTop: "6px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="sluzby" style={{ borderTop: "1px solid #0f0f1a", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#C9A84C" }}>— SLUŽBY</span>
                    <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "8px", marginBottom: "48px", letterSpacing: "-0.01em" }}>
                        Čo zahrám
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                tag: "SVADBA",
                                title: "Svadobný DJ",
                                desc: "Od prvého tanca až po poslednú pesničku. Playlist šitý na mieru pre váš veľký deň — romantika aj párty v jednom.",
                                featured: true,
                            },
                            {
                                tag: "FIREMNÉ AKCIE",
                                title: "Corporate event",
                                desc: "Firemné večierky, teambuildingy, galavečery. Profesionálny servis, správna atmosféra pre správne publikum.",
                                featured: false,
                            },
                            {
                                tag: "SÚKROMNÉ PÁRTY",
                                title: "Narodeniny & oslavy",
                                desc: "Súkromné párty, narodeninové oslavy, plesy. Zahrám čo chcete — žánre, dekády, energie.",
                                featured: false,
                            },
                        ].map((s) => (
                            <div key={s.title} style={{ background: s.featured ? "#C9A84C" : "#0d0d18", padding: "32px", border: s.featured ? "none" : "1px solid #141420" }}>
                                <span style={{ fontSize: "8px", letterSpacing: "0.5em", color: s.featured ? "rgba(6,6,10,0.5)" : "#C9A84C", display: "block", marginBottom: "14px" }}>{s.tag}</span>
                                <h3 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "18px", marginBottom: "12px", color: s.featured ? "#06060a" : "#fff" }}>{s.title}</h3>
                                <p style={{ color: s.featured ? "rgba(6,6,10,0.65)" : "#555", fontSize: "13px", lineHeight: 1.7 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="o-mne" style={{ borderTop: "1px solid #0f0f1a", padding: "90px 0", background: "#080810" }}>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#C9A84C" }}>— O MNE</span>
                        <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "8px", marginBottom: "24px", lineHeight: 0.95 }}>
                            DJ SNOWMAN
                        </h2>
                        <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
                            Volám sa Radoslav Petrus. Za DJ pultom stojím viac ako 15 rokov
                            a za ten čas som si zahral na vyše 500 svadbách a nespočetnom
                            množstve firemných akcií po celom Slovensku.
                        </p>
                        <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
                            Každý event beriem vážne — dopredu sa dohodnem na žánroch,
                            kľúčových pesničkách aj momentoch. Žiadne prekvapenia, len dobrá nálada.
                        </p>
                        <div className="space-y-3">
                            {[
                                "500+ svadieb odohraných",
                                "Bratislava a celé Slovensko",
                                "Vlastné profesionálne ozvučenie",
                                "Individuálny playlist pre každý event",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div style={{ width: "6px", height: "6px", background: "#C9A84C", flexShrink: 0 }} />
                                    <span style={{ fontSize: "13px", color: "#666" }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ background: "#0d0d18", height: "460px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #141420" }}>
                        <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "80px", color: "#0f0f1a" }}>DJ</span>
                        <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(0deg, rgba(201,168,76,0.15) 0%, transparent 100%)", height: "120px" }} />
                        <div style={{ position: "absolute", top: "20px", right: "20px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#C9A84C" }}>SNOWMAN</div>
                        <div style={{ position: "absolute", bottom: "20px", left: "20px", fontFamily: "Arial Black, sans-serif", fontSize: "10px", color: "#C9A84C", letterSpacing: "0.2em" }}>500+ SVADIEB</div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "3px solid #C9A84C", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#C9A84C" }}>— REZERVÁCIA</span>
                        <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.9, marginTop: "8px", marginBottom: "24px" }}>
                            REZERVUJTE<br />
                            <span style={{ color: "#C9A84C" }}>TERMÍN.</span>
                        </h2>
                        <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px", marginBottom: "32px" }}>
                            Termíny sa obsadzujú rýchlo — hlavne soboty v sezóne.
                            Napíšte mi čím skôr a dohodnem sa s vami na detailoch.
                        </p>
                        <div className="space-y-4">
                            {[
                                { label: "Email", value: "petrusradoslav@gmail.com" },
                                { label: "Telefón", value: "+421 915 965 178" },
                                { label: "Instagram", value: "@djsnowman_official" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #0f0f1a" }}>
                                    <span style={{ fontSize: "9px", letterSpacing: "0.4em", color: "#333", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                    <span style={{ fontSize: "13px", color: "#666" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a href="mailto:petrusradoslav@gmail.com"
                            className="block w-full text-center uppercase font-bold"
                            style={{ background: "#C9A84C", color: "#06060a", padding: "20px", fontFamily: "Arial Black, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Napísať email →
                        </a>
                        <a href="tel:+421915965178"
                            className="block w-full text-center uppercase"
                            style={{ border: "1px solid #C9A84C", color: "#C9A84C", padding: "20px", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Zavolať +421 915 965 178
                        </a>
                        <a href="https://instagram.com/djsnowman_official" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase"
                            style={{ border: "1px solid #141420", color: "#444", padding: "20px", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Instagram @djsnowman_official
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #0d0d18", padding: "28px 0", background: "#040408" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "11px", color: "#222", letterSpacing: "0.2em" }}>DJ SNOWMAN · BRATISLAVA</span>
                    <p style={{ fontSize: "11px", color: "#222" }}>© 2026 · Radoslav Petrus</p>
                    <p style={{ fontSize: "11px", color: "#222" }}>Web vytvoril <span style={{ color: "#333" }}>Maxim Šinkovič</span></p>
                </div>
            </footer>
        </div>
    );
}
