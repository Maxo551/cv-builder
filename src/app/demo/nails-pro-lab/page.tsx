export const metadata = {
    title: "Nails Pro Lab – Nechtové štúdio Bratislava",
    description: "Nails Pro Lab Bratislava — prémiové gélové nechty, manikúra a nail art. Rezervácia cez Instagram alebo WhatsApp.",
};

export default function NailsProLabDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#faf9f7", color: "#1a1a1a", fontFamily: "'Georgia', 'Times New Roman', serif" }}>

            {/* Rose strip */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #D4A0A0, #E8C4C4, #D4A0A0)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(250,249,247,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #ebe9e5" }}>
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div>
                        <span className="font-normal tracking-widest uppercase" style={{ fontSize: "14px", letterSpacing: "0.25em", color: "#1a1a1a" }}>
                            NAILS PRO LAB
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8" style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}>
                        <a href="#sluzby" className="hover:text-[#D4A0A0] transition-colors uppercase" style={{ color: "#999" }}>Služby</a>
                        <a href="#galeria" className="hover:text-[#D4A0A0] transition-colors uppercase" style={{ color: "#999" }}>Galéria</a>
                        <a href="#kontakt" className="hover:text-[#D4A0A0] transition-colors uppercase" style={{ color: "#999" }}>Kontakt</a>
                    </div>
                    <a
                        href="#kontakt"
                        style={{ background: "#D4A0A0", color: "#fff", padding: "8px 20px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
                        className="uppercase hover:opacity-90 transition-opacity"
                    >
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "88vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "10%", right: "0", width: "45%", height: "80%", background: "#f2eded", clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }} />

                <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center" style={{ zIndex: 1, position: "relative" }}>
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div style={{ width: "32px", height: "1px", background: "#D4A0A0" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#D4A0A0" }}>BRATISLAVA · RUŽINOV</span>
                        </div>

                        <h1 className="font-normal leading-tight mb-6" style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                            Nechty,<br />
                            ktoré <em style={{ fontStyle: "italic", color: "#D4A0A0" }}>hovoria</em><br />
                            za vás.
                        </h1>

                        <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "15px", lineHeight: 1.7, maxWidth: "380px", marginBottom: "36px" }}>
                            Prémiové gélové nechty, nail art a manikúra. Každý set je malé umelecké dielo
                            prispôsobené vám.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#kontakt" style={{ background: "#D4A0A0", color: "#fff", padding: "14px 28px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em", fontWeight: 700 }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Rezervovať termín
                            </a>
                            <a href="#galeria" style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#aaa" }}
                                className="uppercase hover:text-[#D4A0A0] transition-colors self-center">
                                Pozrieť galériu →
                            </a>
                        </div>

                        <div className="flex gap-10 mt-12 pt-8" style={{ borderTop: "1px solid #ebe9e5" }}>
                            {[
                                { n: "5.9K", label: "Sledovatelia" },
                                { n: "5★", label: "Hodnotenia" },
                                { n: "3+", label: "Roky skúseností" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="font-normal" style={{ fontSize: "20px", color: "#D4A0A0" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#bbb", letterSpacing: "0.3em" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nail art grid placeholder */}
                    <div className="grid grid-cols-2 gap-2 hidden md:grid">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} style={{ aspectRatio: "1", background: n % 2 === 0 ? "#ede8e8" : "#e8e4e4", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#ccc" }}>0{n}</div>
                                {n === 1 && <div style={{ position: "absolute", top: "10px", left: "10px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#D4A0A0" }}>NAIL ART</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="sluzby" style={{ borderTop: "1px solid #ebe9e5", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#D4A0A0" }}>— PONUKA</span>
                    <h2 className="font-normal mt-2 mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Služby</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#ebe9e5" }}>
                        {[
                            { name: "Gélové nechty", desc: "Klasická gélovka, french, ombre, babyboomer. Trvácny výsledok na 3–4 týždne.", tag: "CLASSIC" },
                            { name: "Nail Art", desc: "Kvety, geometria, chrome, press-on. Každý set je unikátny a prispôsobený vám.", tag: "ART" },
                            { name: "Manikúra", desc: "Starostlivosť o nechty a kutikuly. Permanentný lak alebo klasika.", tag: "CARE" },
                            { name: "Prémiové sety", desc: "Luxusné nail art sety pre špeciálne príležitosti — svadby, plesy, fotosy.", tag: "PREMIUM" },
                        ].map((s) => (
                            <div key={s.name} className="p-7 hover:bg-[#f5f1f1] transition-colors" style={{ background: "#faf9f7" }}>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#D4A0A0", display: "block", marginBottom: "12px" }}>{s.tag}</span>
                                <h3 className="font-normal mb-3" style={{ fontSize: "17px" }}>{s.name}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", color: "#999", fontSize: "12px", lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="galeria" style={{ borderTop: "1px solid #ebe9e5", padding: "80px 0", background: "#f5f2f0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#D4A0A0" }}>— GALÉRIA</span>
                            <h2 className="font-normal mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Naše práce</h2>
                        </div>
                        <a href="https://instagram.com/nails.pro.lab.official" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#bbb", letterSpacing: "0.3em" }}
                            className="hover:text-[#D4A0A0] transition-colors uppercase">
                            Instagram →
                        </a>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-6 row-span-2" style={{ background: "#e8e2e2", minHeight: "380px", position: "relative" }}>
                            <div style={{ position: "absolute", top: "14px", left: "14px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#D4A0A0" }}>FEATURED</div>
                        </div>
                        {[2, 3, 4, 5, 6, 7].map((n) => (
                            <div key={n} className="col-span-3" style={{ background: n % 2 === 0 ? "#ede8e8" : "#e8e2e2", minHeight: "185px", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#ccc" }}>0{n}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "2px solid #D4A0A0", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#D4A0A0" }}>— REZERVÁCIA</span>
                            <h2 className="font-normal mt-2 mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 1 }}>
                                Rezervujte<br />
                                <em style={{ fontStyle: "italic", color: "#D4A0A0" }}>si termín.</em>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "14px", lineHeight: 1.7, maxWidth: "360px" }}>
                                Napíšte nám na Instagram alebo WhatsApp — dohovoríme termín
                                a štýl presne podľa vašich predstáv.
                            </p>
                            <div className="mt-10 space-y-4">
                                {[
                                    { label: "Adresa", value: "Klincová 22, Bratislava - Ružinov" },
                                    { label: "WhatsApp", value: "+421 944 879 450" },
                                    { label: "Instagram", value: "@nails.pro.lab.official" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #ebe9e5" }}>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#ccc", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#666" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a href="https://instagram.com/nails.pro.lab.official" target="_blank" rel="noopener noreferrer"
                                className="block w-full text-center uppercase font-bold"
                                style={{ background: "#D4A0A0", color: "#fff", padding: "18px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                                Instagram @nails.pro.lab.official →
                            </a>
                            <a href="https://wa.me/421944879450" target="_blank" rel="noopener noreferrer"
                                className="block w-full text-center uppercase"
                                style={{ border: "1px solid #D4A0A0", color: "#D4A0A0", padding: "18px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.25em" }}>
                                WhatsApp +421 944 879 450
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #ebe9e5", padding: "32px 0" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-normal tracking-widest uppercase" style={{ fontSize: "12px", letterSpacing: "0.25em" }}>Nails Pro Lab · Bratislava</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#bbb" }}>© 2026 · Ružinov, Bratislava</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#ccc" }}>
                        Web vytvoril <span style={{ color: "#aaa" }}>Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
