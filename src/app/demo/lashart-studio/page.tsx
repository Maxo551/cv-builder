export const metadata = {
    title: "LASHart Studio – Mihalnice a obočie Bratislava",
    description: "LASHart Studio Bratislava — predĺženie mihalníc, lash lift, powder brows. Súkennícka 4, Ružinov.",
};

export default function LashartDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#0e0b0f", color: "#f0eef2", fontFamily: "Arial, sans-serif" }}>

            {/* Lilac stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #9b6fa0, #c9a0d4, #9b6fa0)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(14,11,15,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e1820" }}>
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "15px", letterSpacing: "0.15em", color: "#f0eef2" }}>LASHART</span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#9b6fa0", letterSpacing: "0.45em", display: "block", marginTop: "1px" }}>STUDIO · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#sluzby" style={{ color: "#555" }} className="hover:text-[#c9a0d4] transition-colors uppercase">Služby</a>
                        <a href="#cenik" style={{ color: "#555" }} className="hover:text-[#c9a0d4] transition-colors uppercase">Cenník</a>
                        <a href="#kontakt" style={{ color: "#555" }} className="hover:text-[#c9a0d4] transition-colors uppercase">Kontakt</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#9b6fa0", color: "#fff", padding: "10px 22px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, #1a0d1e 0%, #0e0b0f 65%)" }} />
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "42%", background: "#130f16", clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }} />

                <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center" style={{ position: "relative", zIndex: 1 }}>
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "36px", height: "1px", background: "#9b6fa0" }} />
                            <span style={{ fontSize: "9px", letterSpacing: "0.55em", color: "#9b6fa0" }}>SÚKENNÍCKA 4 · RUŽINOV</span>
                        </div>
                        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", marginBottom: "24px", fontWeight: "normal" }}>
                            Eyes<br />
                            that <em style={{ color: "#c9a0d4" }}>speak</em><br />
                            for you.
                        </h1>
                        <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.8, maxWidth: "360px", marginBottom: "36px" }}>
                            Predĺženie mihalníc, lash lift, powder brows — každý detail
                            urobený s presnosťou a citom. Studio v Ružinove, Bratislava.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#kontakt" style={{ background: "#9b6fa0", color: "#fff", padding: "14px 32px", fontSize: "10px", letterSpacing: "0.3em", fontWeight: 700 }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Rezervovať termín
                            </a>
                            <a href="#sluzby" style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#555" }}
                                className="uppercase hover:text-[#c9a0d4] transition-colors self-center">
                                Služby →
                            </a>
                        </div>
                        <div className="flex gap-12 mt-14 pt-8" style={{ borderTop: "1px solid #1e1820" }}>
                            {[
                                { n: "2.3K", label: "Sledovatelia" },
                                { n: "5★", label: "Hodnotenia" },
                                { n: "Phibrows", label: "Certifikovaná" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#c9a0d4" }}>{s.n}</p>
                                    <p style={{ fontSize: "9px", color: "#444", letterSpacing: "0.3em", marginTop: "4px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} style={{ aspectRatio: "1", background: n % 2 === 0 ? "#1a1520" : "#160f1a", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: "10px", right: "10px", fontSize: "8px", letterSpacing: "0.4em", color: "#2e2535" }}>0{n}</div>
                                {n === 1 && <div style={{ position: "absolute", top: "10px", left: "10px", fontSize: "8px", letterSpacing: "0.4em", color: "#9b6fa0" }}>LASH</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="sluzby" style={{ borderTop: "1px solid #1e1820", padding: "90px 0" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <span style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#9b6fa0" }}>— SLUŽBY</span>
                    <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", marginBottom: "48px", fontWeight: "normal" }}>Čo ponúkame</h2>
                    <div className="grid md:grid-cols-2 gap-px" style={{ background: "#1e1820" }}>
                        {[
                            { tag: "LASHES", title: "Predĺženie mihalníc", desc: "Klasická, ruská, mega volume — výsledok, ktorý drží 3–4 týždne. Prirodzene aj dramaticky, podľa vás." },
                            { tag: "LIFT", title: "Lash & Brow Lift", desc: "Trvalá na mihalnice alebo obočie. Žiadne predĺženia, len zvýraznenie vášho prirodzeného pohľadu." },
                            { tag: "BROWS", title: "Powder Brows", desc: "Semi-permanentné obočie metódou Phibrows. Výsledok, ktorý vyzerá ako make-up, ale nezmyje sa.", featured: true },
                            { tag: "CARE", title: "Doplnenie & údržba", desc: "Pravidelné doplnenie o 2–3 týždne. Udržte svoj look bez kompromisov." },
                        ].map((s) => (
                            <div key={s.title} style={{ background: s.featured ? "#9b6fa0" : "#0e0b0f", padding: "32px" }}>
                                <span style={{ fontSize: "8px", letterSpacing: "0.5em", color: s.featured ? "rgba(255,255,255,0.5)" : "#9b6fa0", display: "block", marginBottom: "10px" }}>{s.tag}</span>
                                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", marginBottom: "10px", fontWeight: "normal", color: s.featured ? "#fff" : "#f0eef2" }}>{s.title}</h3>
                                <p style={{ fontSize: "13px", lineHeight: 1.7, color: s.featured ? "rgba(255,255,255,0.75)" : "#555" }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price */}
            <section id="cenik" style={{ borderTop: "1px solid #1e1820", padding: "90px 0", background: "#0b0810" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <span style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#9b6fa0" }}>— CENNÍK</span>
                    <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "8px", marginBottom: "48px", fontWeight: "normal" }}>Ceny</h2>
                    <div className="space-y-0">
                        {[
                            { name: "Klasické predĺženie", price: "od 45 €" },
                            { name: "Ruská volume / Mega volume", price: "od 60 €" },
                            { name: "Doplnenie (2–3 týždne)", price: "od 30 €" },
                            { name: "Lash Lift + Keratin", price: "od 40 €" },
                            { name: "Brow Lift", price: "od 25 €" },
                            { name: "Powder Brows (Phibrows)", price: "od 180 €" },
                        ].map((item) => (
                            <div key={item.name} className="flex justify-between items-baseline py-4" style={{ borderBottom: "1px solid #1a1620" }}>
                                <span style={{ fontSize: "14px", color: "#888" }}>{item.name}</span>
                                <span style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#c9a0d4" }}>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "3px solid #9b6fa0", padding: "90px 0" }}>
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#9b6fa0" }}>— REZERVÁCIA</span>
                        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 0.95, marginTop: "8px", marginBottom: "24px", fontWeight: "normal" }}>
                            Rezervujte<br />
                            <em style={{ color: "#c9a0d4" }}>si termín.</em>
                        </h2>
                        <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px" }}>
                            Napíšte nám na Instagram alebo zavolajte — dohodnem termín, ktorý vám vyhovuje.
                        </p>
                        <div className="mt-10 space-y-4">
                            {[
                                { label: "Adresa", value: "Súkennícka 4, Bratislava – Ružinov" },
                                { label: "Telefón", value: "+421 917 066 888" },
                                { label: "Instagram", value: "@lashart_studio" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #1a1620" }}>
                                    <span style={{ fontSize: "9px", letterSpacing: "0.4em", color: "#333", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                    <span style={{ fontSize: "13px", color: "#666" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a href="tel:+421917066888"
                            className="block w-full text-center uppercase font-bold"
                            style={{ background: "#9b6fa0", color: "#fff", padding: "20px", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Zavolať +421 917 066 888 →
                        </a>
                        <a href="https://instagram.com/lashart_studio" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase"
                            style={{ border: "1px solid #9b6fa0", color: "#9b6fa0", padding: "20px", fontSize: "12px", letterSpacing: "0.25em" }}>
                            Instagram @lashart_studio
                        </a>
                    </div>
                </div>
            </section>

            <footer style={{ borderTop: "1px solid #111", padding: "28px 0", background: "#070508" }}>
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "12px", color: "#333", letterSpacing: "0.15em" }}>LASHART STUDIO · BRATISLAVA</span>
                    <p style={{ fontSize: "11px", color: "#333" }}>© 2026 · Súkennícka 4, Ružinov</p>
                    <p style={{ fontSize: "11px", color: "#333" }}>Web vytvoril <span style={{ color: "#444" }}>Maxim Šinkovič</span></p>
                </div>
            </footer>
        </div>
    );
}
