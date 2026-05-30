export const metadata = {
    title: "Diana Bajbar – Master Hair Colorist Bratislava",
    description: "Diana Bajbar — špecialistka na premeny vlasov, zlatý certifikát, 20 rokov skúseností. Bratislava.",
};

export default function DianaBajbarDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#0c0c0c", color: "#f0ede8", fontFamily: "'Georgia', serif" }}>

            {/* Platinum stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #8a8a8a, #d4d4d4, #f0f0f0, #d4d4d4, #8a8a8a)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(12,12,12,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e1e1e" }}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", letterSpacing: "0.12em", color: "#f0ede8" }}>Diana Bajbar</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#888", letterSpacing: "0.45em", display: "block", marginTop: "1px" }}>MASTER HAIR COLORIST · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#sluzby" style={{ color: "#555" }} className="hover:text-[#d4d4d4] transition-colors uppercase">Služby</a>
                        <a href="#galeria" style={{ color: "#555" }} className="hover:text-[#d4d4d4] transition-colors uppercase">Galéria</a>
                        <a href="#kontakt" style={{ color: "#555" }} className="hover:text-[#d4d4d4] transition-colors uppercase">Kontakt</a>
                    </div>
                    <a href="#kontakt" style={{ border: "1px solid #d4d4d4", color: "#d4d4d4", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:bg-white hover:text-black transition-all">
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 40%, #1a1a1a 0%, #0c0c0c 70%)" }} />
                <div style={{ position: "absolute", top: "8%", right: "-5%", width: "520px", height: "520px", borderRadius: "50%", border: "1px solid rgba(212,212,212,0.06)" }} />
                <div style={{ position: "absolute", top: "15%", right: "2%", width: "360px", height: "360px", borderRadius: "50%", border: "1px solid rgba(212,212,212,0.04)" }} />

                <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center" style={{ position: "relative", zIndex: 1 }}>
                    <div>
                        <div className="inline-flex items-center gap-3 mb-10 px-4 py-2" style={{ border: "1px solid #2a2a2a" }}>
                            <div style={{ width: "6px", height: "6px", background: "#d4d4d4", borderRadius: "50%" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#888" }}>ZLATÝ CERTIFIKÁT · 20 ROKOV SKÚSENOSTÍ</span>
                        </div>

                        <h1 style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 0.88, letterSpacing: "-0.03em", marginBottom: "28px", fontWeight: "normal" }}>
                            Premena,<br />
                            ktorá <em style={{ color: "#d4d4d4" }}>hovorí</em><br />
                            za vás.
                        </h1>

                        <p style={{ fontFamily: "Arial, sans-serif", color: "#555", fontSize: "14px", lineHeight: 1.8, maxWidth: "400px", marginBottom: "36px" }}>
                            Špecialistka na farbu vlasov s dvadsiatimi rokmi praxe a zlatým certifikátom.
                            Každá premena je presná, trvalá a urobená pre vás — nie zo šablóny.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#kontakt" style={{ background: "#f0ede8", color: "#0c0c0c", padding: "14px 36px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", fontWeight: 700 }}
                                className="uppercase hover:bg-white transition-colors">
                                Rezervovať termín
                            </a>
                            <a href="#galeria" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#444" }}
                                className="uppercase hover:text-[#d4d4d4] transition-colors self-center">
                                Pozrieť práce →
                            </a>
                        </div>

                        <div className="flex gap-12 mt-14 pt-8" style={{ borderTop: "1px solid #1e1e1e" }}>
                            {[
                                { n: "31K", label: "Sledovatelia" },
                                { n: "20+", label: "Rokov skúseností" },
                                { n: "Zlatý cert.", label: "Certifikácia" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#d4d4d4" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", color: "#444", letterSpacing: "0.35em", marginTop: "4px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photo placeholder — tall editorial */}
                    <div className="hidden md:block" style={{ position: "relative" }}>
                        <div style={{ background: "#161616", height: "560px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                            <div style={{ position: "absolute", top: "20px", left: "20px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#333" }}>DIANA BAJBAR</div>
                            <div style={{ position: "absolute", top: "20px", right: "20px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#444" }}>MASTER COLORIST</div>
                            <div style={{ width: "180px", height: "420px", background: "#1e1e1e", position: "relative" }} />
                        </div>
                        <div style={{ position: "absolute", bottom: "-1px", left: "0", right: "0", height: "120px", background: "linear-gradient(0deg, #0c0c0c, transparent)" }} />
                        <div style={{ position: "absolute", bottom: "20px", right: "20px", background: "#f0ede8", padding: "10px 16px" }}>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", color: "#0c0c0c", letterSpacing: "0.4em", fontWeight: 700 }}>RICCI CAPRICCI STUDIO</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="sluzby" style={{ borderTop: "1px solid #1a1a1a", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#888" }}>— SLUŽBY</span>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", marginBottom: "48px", fontWeight: "normal" }}>Špeciality</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#1a1a1a" }}>
                        {[
                            { tag: "SIGNATURE", title: "Premeny vlasov", desc: "Kompletná zmena farby, tónu alebo strihu. Konzultácia vždy v cene." },
                            { tag: "COLOR", title: "Balayage & Highlights", desc: "Prirodzený prechod, slnkom políbené tony. Ručne maľované, nie z fólie.", featured: true },
                            { tag: "TREATMENT", title: "Farbenie + starostlivosť", desc: "Farba aj hĺbková regenerácia v jednej návšteve. Vlasy zostanú živé." },
                            { tag: "REPAIR", title: "Oprava & korekcia", desc: "Zlá farba, nefunkčný strih — opravím čo iní pokazili." },
                        ].map((s) => (
                            <div key={s.title} style={{ background: s.featured ? "#f0ede8" : "#0c0c0c", padding: "32px" }}>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: s.featured ? "#888" : "#333", display: "block", marginBottom: "12px" }}>{s.tag}</span>
                                <h3 style={{ fontSize: "17px", marginBottom: "10px", fontWeight: "normal", color: s.featured ? "#0c0c0c" : "#f0ede8" }}>{s.title}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", lineHeight: 1.7, color: s.featured ? "#555" : "#444" }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="galeria" style={{ borderTop: "1px solid #1a1a1a", padding: "90px 0", background: "#080808" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-14">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#888" }}>— GALÉRIA</span>
                            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", fontWeight: "normal" }}>Premeny</h2>
                        </div>
                        <a href="https://instagram.com/diana_bajbar_haircolorist" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#444", letterSpacing: "0.3em" }}
                            className="hover:text-[#d4d4d4] transition-colors uppercase hidden md:block">
                            @diana_bajbar_haircolorist →
                        </a>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-5 row-span-2" style={{ background: "#1a1a1a", minHeight: "400px", position: "relative" }}>
                            <div style={{ position: "absolute", top: "14px", left: "14px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#d4d4d4" }}>FEATURED</div>
                            <div style={{ position: "absolute", bottom: "14px", left: "14px", fontFamily: "Georgia, serif", fontSize: "18px", color: "#333", fontStyle: "italic" }}>Premena #1</div>
                        </div>
                        <div className="col-span-4" style={{ background: "#161616", minHeight: "195px" }} />
                        <div className="col-span-3" style={{ background: "#1e1e1e", minHeight: "195px" }} />
                        <div className="col-span-3" style={{ background: "#181818", minHeight: "195px" }} />
                        <div className="col-span-4" style={{ background: "#141414", minHeight: "195px" }} />
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="col-span-3" style={{ background: n % 2 === 0 ? "#161616" : "#1a1a1a", minHeight: "180px", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.3em", color: "#2a2a2a" }}>0{n + 5}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "1px solid #f0ede8", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#888" }}>— REZERVÁCIA</span>
                        <h2 style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.92, marginTop: "8px", marginBottom: "24px", fontWeight: "normal" }}>
                            Dohodnime<br />
                            <em style={{ color: "#888" }}>termín.</em>
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#555", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px" }}>
                            Termíny sú obmedzené — prijímam len určitý počet klientok mesačne,
                            aby som každej mohla venovať plnú pozornosť.
                        </p>
                        <div className="mt-10 space-y-4">
                            {[
                                { label: "Telefón", value: "+421 904 805 184" },
                                { label: "Instagram", value: "@diana_bajbar_haircolorist" },
                                { label: "Lokalita", value: "Bratislava" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #1a1a1a" }}>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#333", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#666" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a href="tel:+421904805184"
                            className="block w-full text-center uppercase font-bold"
                            style={{ background: "#f0ede8", color: "#0c0c0c", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Zavolať +421 904 805 184 →
                        </a>
                        <a href="https://instagram.com/diana_bajbar_haircolorist" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase"
                            style={{ border: "1px solid #2a2a2a", color: "#555", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Instagram @diana_bajbar_haircolorist
                        </a>
                    </div>
                </div>
            </section>

            <footer style={{ borderTop: "1px solid #111", padding: "28px 0", background: "#070707" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "12px", color: "#2a2a2a", letterSpacing: "0.1em" }}>Diana Bajbar · Master Hair Colorist · Bratislava</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#2a2a2a" }}>© 2026 · Ricci Capricci Studio</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#2a2a2a" }}>Web vytvoril <span style={{ color: "#3a3a3a" }}>Maxim Šinkovič</span></p>
                </div>
            </footer>
        </div>
    );
}
