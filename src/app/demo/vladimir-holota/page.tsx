export const metadata = {
    title: "Vladimír Holota – Personal Trainer Bratislava",
    description: "2x IFBB World Champion. Osobný tréner a výživový poradca v Bratislave. Online coaching aj tréningy naživo.",
};

export default function VladimirHolotaDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#080808", color: "#f0f0f0", fontFamily: "Arial Black, Impact, sans-serif" }}>

            {/* Electric orange top stripe */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #FF6B00, #FF9A00, #FF6B00)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1a1a1a" }}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "13px", letterSpacing: "0.15em", color: "#f0f0f0" }}>
                            VLADIMÍR HOLOTA
                        </span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#FF6B00", letterSpacing: "0.4em", display: "block", marginTop: "1px" }}>PERSONAL TRAINER · BRATISLAVA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#sluzby" style={{ color: "#666" }} className="hover:text-[#FF6B00] transition-colors uppercase">Tréningy</a>
                        <a href="#o-mne" style={{ color: "#666" }} className="hover:text-[#FF6B00] transition-colors uppercase">O mne</a>
                        <a href="#kontakt" style={{ color: "#666" }} className="hover:text-[#FF6B00] transition-colors uppercase">Kontakt</a>
                    </div>
                    <a href="#kontakt" style={{ background: "#FF6B00", color: "#fff", padding: "10px 24px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
                        className="uppercase hover:opacity-90 transition-opacity">
                        Začať teraz
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
                {/* Background texture */}
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, #1a0a00 0%, #080808 70%)" }} />
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", background: "linear-gradient(135deg, #111 0%, #0d0600 100%)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }} />

                <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center" style={{ position: "relative", zIndex: 1 }}>
                    <div>
                        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2" style={{ border: "1px solid #FF6B00", background: "rgba(255,107,0,0.08)" }}>
                            <span style={{ color: "#FF6B00", fontSize: "10px", letterSpacing: "0.4em", fontFamily: "Arial, sans-serif" }}>2× IFBB WORLD CHAMPION</span>
                        </div>

                        <h1 style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", lineHeight: 0.9, letterSpacing: "-0.02em", fontFamily: "Arial Black, sans-serif", marginBottom: "24px" }}>
                            BUILD<br />
                            YOUR<br />
                            <span style={{ color: "#FF6B00" }}>BEST</span><br />
                            BODY.
                        </h1>

                        <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "15px", lineHeight: 1.7, maxWidth: "400px", marginBottom: "36px" }}>
                            Tréning, výživa a mentalita na úrovni svetového šampióna.
                            Osobné tréningy aj online coaching — kdekoľvek na Slovensku.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#kontakt" style={{ background: "#FF6B00", color: "#fff", padding: "16px 36px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.3em", fontWeight: 700 }}
                                className="uppercase hover:opacity-90 transition-opacity">
                                Rezervovať tréning
                            </a>
                            <a href="#sluzby" style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#555", border: "1px solid #222", padding: "16px 24px" }}
                                className="uppercase hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors">
                                Zistiť viac
                            </a>
                        </div>

                        <div className="flex gap-12 mt-14 pt-8" style={{ borderTop: "1px solid #1a1a1a" }}>
                            {[
                                { n: "2×", label: "IFBB World Champion" },
                                { n: "7K+", label: "Instagram sledovatelia" },
                                { n: "10+", label: "Rokov skúseností" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontSize: "22px", color: "#FF6B00", fontFamily: "Arial Black, sans-serif" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#555", letterSpacing: "0.3em", marginTop: "4px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — athlete photo placeholder */}
                    <div style={{ position: "relative" }} className="hidden md:block">
                        <div style={{ background: "#141414", height: "520px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: "20px", right: "20px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#FF6B00" }}>VLADIMÍR HOLOTA</div>
                            <div style={{ width: "200px", height: "380px", background: "linear-gradient(180deg, #1a1a1a 0%, #222 100%)", position: "relative" }}>
                                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "80px", color: "#1f1f1f" }}>VH</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "absolute", bottom: "-12px", left: "20px", background: "#FF6B00", padding: "10px 16px" }}>
                            <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "10px", color: "#fff", letterSpacing: "0.3em" }}>2× IFBB WORLD CHAMPION</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="sluzby" style={{ borderTop: "1px solid #1a1a1a", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#FF6B00" }}>— TRÉNINGY</span>
                    <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "8px", marginBottom: "48px", letterSpacing: "-0.01em" }}>
                        Čo ponúkam
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                tag: "OSOBNÝ",
                                title: "Tréning naživo",
                                desc: "1-on-1 tréning v Bratislave. Technicky správne cvičenie, individuálny program, motivácia na mieste.",
                                price: "od 50 € / hod",
                                highlight: true,
                            },
                            {
                                tag: "ONLINE",
                                title: "Online coaching",
                                desc: "Tréningový plán + výživa na mieru. Mesačné konzultácie, sledovanie pokroku, neobmedzená komunikácia.",
                                price: "od 80 € / mesiac",
                                highlight: false,
                            },
                            {
                                tag: "VÝŽIVA",
                                title: "Výživový plán",
                                desc: "Jedálniček nastavený na váš cieľ — chudnutie, naberanie svalov, zdravý životný štýl.",
                                price: "od 60 €",
                                highlight: false,
                            },
                        ].map((s) => (
                            <div key={s.title} style={{ background: s.highlight ? "#FF6B00" : "#111", padding: "32px", border: s.highlight ? "none" : "1px solid #1a1a1a" }}>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: s.highlight ? "rgba(255,255,255,0.6)" : "#FF6B00", display: "block", marginBottom: "12px" }}>{s.tag}</span>
                                <h3 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "18px", marginBottom: "12px", color: s.highlight ? "#fff" : "#f0f0f0" }}>{s.title}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", color: s.highlight ? "rgba(255,255,255,0.75)" : "#666", fontSize: "13px", lineHeight: 1.7, marginBottom: "24px" }}>{s.desc}</p>
                                <p style={{ fontFamily: "Arial Black, sans-serif", fontSize: "14px", color: s.highlight ? "#fff" : "#FF6B00" }}>{s.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="o-mne" style={{ borderTop: "1px solid #1a1a1a", padding: "90px 0", background: "#0d0d0d" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#FF6B00" }}>— O MNE</span>
                            <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: "8px", marginBottom: "24px", lineHeight: 0.95 }}>
                                VLADIMÍR<br />HOLOTA
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#777", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
                                Som dvojnásobný majster sveta v kulturistike podľa IFBB a osobný tréner
                                z Bratislavy s viac ako 10 rokmi skúseností v profesionálnom športe.
                            </p>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#777", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
                                Viem, čo to dá dostať telo na vrchol — a viem, ako to dosiahnuť bezpečne
                                a efektívne. Každý klient dostane individuálny prístup, nie šablónu.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "2× IFBB World Bodybuilding Champion",
                                    "10+ rokov v profesionálnom športe",
                                    "Certifikovaný personal trainer",
                                    "Výživový poradca",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div style={{ width: "6px", height: "6px", background: "#FF6B00", flexShrink: 0 }} />
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#888" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: "#141414", height: "460px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "100px", color: "#111" }}>VH</span>
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", background: "linear-gradient(0deg, #FF6B00 0%, transparent 100%)", height: "80px" }} />
                            <div style={{ position: "absolute", bottom: "16px", left: "16px", fontFamily: "Arial Black, sans-serif", fontSize: "10px", color: "#fff", letterSpacing: "0.2em" }}>2× IFBB WORLD CHAMPION</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "3px solid #FF6B00", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#FF6B00" }}>— KONTAKT</span>
                            <h2 style={{ fontFamily: "Arial Black, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.9, marginTop: "8px", marginBottom: "24px" }}>
                                ZAČNITE<br />
                                <span style={{ color: "#FF6B00" }}>DNES.</span>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#666", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px" }}>
                                Napíšte mi email alebo volajte — dohovoríme prvý tréning zadarmo,
                                aby sme zistili, či si budeme sadieť.
                            </p>
                            <div className="mt-10 space-y-4">
                                {[
                                    { label: "Email", value: "vladimir.holota@gmail.com" },
                                    { label: "Telefón", value: "+421 949 468 582" },
                                    { label: "Instagram", value: "@vladimir_holota" },
                                    { label: "Lokalita", value: "Bratislava" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #1a1a1a" }}>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#444", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#777" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <a href="mailto:vladimir.holota@gmail.com"
                                className="block w-full text-center uppercase font-bold"
                                style={{ background: "#FF6B00", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.3em" }}>
                                Napísať email →
                            </a>
                            <a href="tel:+421949468582"
                                className="block w-full text-center uppercase"
                                style={{ border: "1px solid #FF6B00", color: "#FF6B00", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.3em" }}>
                                Zavolať +421 949 468 582
                            </a>
                            <a href="https://instagram.com/vladimir_holota" target="_blank" rel="noopener noreferrer"
                                className="block w-full text-center uppercase"
                                style={{ border: "1px solid #1a1a1a", color: "#555", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.3em" }}>
                                Instagram @vladimir_holota
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #111", padding: "28px 0", background: "#050505" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Arial Black, sans-serif", fontSize: "11px", color: "#333", letterSpacing: "0.2em" }}>VLADIMÍR HOLOTA · PERSONAL TRAINER</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#333" }}>© 2026 · Bratislava, Slovensko</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#333" }}>
                        Web vytvoril <span style={{ color: "#555" }}>Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
