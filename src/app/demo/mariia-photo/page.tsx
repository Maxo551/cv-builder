export const metadata = {
    title: "Mariia Yurchenko – Photographer Slovakia",
    description: "Wedding, portrait & family photography in Bratislava and Slovakia. Book your session with Mariia Yurchenko.",
};

export default function MariiaPhotoDemo() {
    return (
        <div className="min-h-screen" style={{ background: "#f9f7f4", color: "#1a1a1a", fontFamily: "'Georgia', 'Times New Roman', serif" }}>

            {/* Thin top bar */}
            <div style={{ height: "2px", background: "#1a1a1a" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(249,247,244,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e0dbd3" }}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div>
                        <span style={{ fontFamily: "Georgia, serif", fontSize: "15px", letterSpacing: "0.08em", color: "#1a1a1a", fontWeight: "normal" }}>
                            Mariia Yurchenko
                        </span>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#aaa", letterSpacing: "0.4em", display: "block", marginTop: "1px" }}>PHOTOGRAPHER · SLOVAKIA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em" }}>
                        <a href="#portfolio" style={{ color: "#999" }} className="hover:text-[#1a1a1a] transition-colors uppercase">Portfolio</a>
                        <a href="#o-mne" style={{ color: "#999" }} className="hover:text-[#1a1a1a] transition-colors uppercase">O mne</a>
                        <a href="#kontakt" style={{ color: "#999" }} className="hover:text-[#1a1a1a] transition-colors uppercase">Kontakt</a>
                    </div>
                    <a href="#kontakt" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.25em", color: "#fff", background: "#1a1a1a", padding: "10px 22px" }}
                        className="uppercase hover:opacity-80 transition-opacity">
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}>
                <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div style={{ width: "40px", height: "1px", background: "#1a1a1a" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#999" }}>BRATISLAVA · SLOVENSKO</span>
                        </div>
                        <h1 className="font-normal leading-none mb-8" style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
                            Moments<br />
                            worth<br />
                            <em style={{ fontStyle: "italic" }}>keeping.</em>
                        </h1>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#777", fontSize: "14px", lineHeight: 1.75, maxWidth: "380px", marginBottom: "40px" }}>
                            Svadby, portréty, rodiny — zachytávam skutočné emócie, nie pózovanie.
                            Každá fotografia je príbeh, ktorý zostane navždy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#kontakt" style={{ background: "#1a1a1a", color: "#fff", padding: "14px 32px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
                                className="uppercase hover:opacity-80 transition-opacity">
                                Rezervovať session
                            </a>
                            <a href="#portfolio" style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#aaa" }}
                                className="uppercase hover:text-[#1a1a1a] transition-colors self-center">
                                Pozrieť práce →
                            </a>
                        </div>
                        <div className="flex gap-12 mt-14 pt-8" style={{ borderTop: "1px solid #e0dbd3" }}>
                            {[
                                { n: "14K", label: "Sledovatelia" },
                                { n: "3+", label: "Roky praxe" },
                                { n: "SK · EU", label: "Pôsobnosť" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="font-normal" style={{ fontSize: "22px" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#bbb", letterSpacing: "0.35em", marginTop: "4px" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Photo grid */}
                    <div className="grid grid-cols-2 gap-3 hidden md:grid">
                        <div style={{ aspectRatio: "3/4", background: "#e8e3dc", gridRow: "span 2", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "14px", left: "14px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#bbb" }}>WEDDING</div>
                        </div>
                        <div style={{ aspectRatio: "1", background: "#dedad4", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#bbb" }}>PORTRAIT</div>
                        </div>
                        <div style={{ aspectRatio: "1", background: "#e3dfd8", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#bbb" }}>FAMILY</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section id="portfolio" style={{ borderTop: "1px solid #e0dbd3", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-14">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#999" }}>— PORTFÓLIO</span>
                            <h2 className="font-normal mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>Vybrané práce</h2>
                        </div>
                        <a href="https://instagram.com/mari.iayurchenko" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#bbb", letterSpacing: "0.3em" }}
                            className="hover:text-[#1a1a1a] transition-colors uppercase hidden md:block">
                            Instagram @mari.iayurchenko →
                        </a>
                    </div>

                    {/* Masonry-style grid */}
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-7" style={{ background: "#e0dbd3", minHeight: "440px", position: "relative" }}>
                            <div style={{ position: "absolute", top: "16px", left: "16px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#999" }}>SVADBA · 2024</div>
                            <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                                <p style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#555", fontStyle: "italic" }}>"Najkrajší deň"</p>
                            </div>
                        </div>
                        <div className="col-span-5 grid grid-rows-2 gap-3">
                            <div style={{ background: "#dbd6ce", minHeight: "213px", position: "relative" }}>
                                <div style={{ position: "absolute", top: "12px", left: "12px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#aaa" }}>PORTRÉT</div>
                            </div>
                            <div style={{ background: "#e8e3dc", minHeight: "213px", position: "relative" }}>
                                <div style={{ position: "absolute", top: "12px", left: "12px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#aaa" }}>RODINA</div>
                            </div>
                        </div>
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="col-span-3" style={{ background: n % 2 === 0 ? "#dedad4" : "#e3dfd8", minHeight: "200px", position: "relative" }}>
                                <div style={{ position: "absolute", bottom: "10px", right: "10px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.3em", color: "#ccc" }}>0{n + 4}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="sluzby" style={{ borderTop: "1px solid #e0dbd3", padding: "90px 0", background: "#f2efe9" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#999" }}>— PONUKA</span>
                    <h2 className="font-normal mt-2 mb-14" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>Čo fotím</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Svadobná fotografia",
                                desc: "Celý váš svadobný deň — prípravy, obrad, oslava. Reportáž aj pózované portréty.",
                                price: "od 800 €",
                                tag: "WEDDING",
                            },
                            {
                                title: "Portrét & lifestyle",
                                desc: "Portréty, ktoré ukazujú vašu skutočnú osobnosť. Pre Instagram, LinkedIn alebo len pre vás.",
                                price: "od 150 €",
                                tag: "PORTRAIT",
                            },
                            {
                                title: "Rodinná fotografia",
                                desc: "Spoločné momenty, detské míľniky, tehotenstvo. Prirodzene a s citom.",
                                price: "od 200 €",
                                tag: "FAMILY",
                            },
                        ].map((s) => (
                            <div key={s.title} style={{ borderTop: "2px solid #1a1a1a", paddingTop: "24px" }}>
                                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#bbb", display: "block", marginBottom: "12px" }}>{s.tag}</span>
                                <h3 className="font-normal mb-3" style={{ fontSize: "20px" }}>{s.title}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>{s.desc}</p>
                                <p style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>{s.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="o-mne" style={{ borderTop: "1px solid #e0dbd3", padding: "90px 0" }}>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div style={{ background: "#dedad4", minHeight: "500px", position: "relative" }}>
                        <div style={{ position: "absolute", bottom: "20px", right: "20px", fontFamily: "Arial, sans-serif", fontSize: "8px", letterSpacing: "0.4em", color: "#aaa" }}>MARIIA · PHOTOGRAPHER</div>
                    </div>
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#999" }}>— O MNE</span>
                        <h2 className="font-normal mt-2 mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Ahoj, som Mariia.</h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#777", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
                            Som fotografka zo Slovenska so srdcom pre zachytávanie skutočných emócií.
                            Verím, že najlepšie fotografie vznikajú vtedy, keď sa cítite prirodzene —
                            nie keď pózujete.
                        </p>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#777", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>
                            Fotím svadby, portréty a rodiny v celom Slovensku a Európe.
                            14 000 ľudí sleduje moju prácu na Instagrame — poďte zistiť prečo.
                        </p>
                        <a href="https://instagram.com/mari.iayurchenko" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#1a1a1a", borderBottom: "1px solid #1a1a1a", paddingBottom: "2px" }}
                            className="uppercase hover:opacity-60 transition-opacity">
                            @mari.iayurchenko na Instagrame →
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" style={{ borderTop: "2px solid #1a1a1a", padding: "90px 0", background: "#1a1a1a", color: "#f9f7f4" }}>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#666" }}>— REZERVÁCIA</span>
                        <h2 className="font-normal mt-2 mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 0.95 }}>
                            Dohodnime<br />
                            <em style={{ fontStyle: "italic", color: "#c5b99a" }}>si termín.</em>
                        </h2>
                        <p style={{ fontFamily: "Arial, sans-serif", color: "#888", fontSize: "14px", lineHeight: 1.75, maxWidth: "360px" }}>
                            Napíšte mi na Instagram alebo email — rada sa dozviem o vašej vízii
                            a dohovoríme všetky detaily.
                        </p>
                        <div className="mt-10 space-y-4">
                            {[
                                { label: "Email", value: "mariiayurchenko1499@gmail.com" },
                                { label: "Instagram", value: "@mari.iayurchenko" },
                                { label: "Pôsobnosť", value: "Slovensko · Európa" },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #2a2a2a" }}>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#555", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#aaa" }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <a href="mailto:mariiayurchenko1499@gmail.com"
                            className="block w-full text-center uppercase"
                            style={{ background: "#f9f7f4", color: "#1a1a1a", padding: "18px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em", fontWeight: 700 }}>
                            Napísať email →
                        </a>
                        <a href="https://instagram.com/mari.iayurchenko" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center uppercase"
                            style={{ border: "1px solid #333", color: "#888", padding: "18px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em" }}>
                            Instagram @mari.iayurchenko
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #222", padding: "28px 0", background: "#111" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "#555", letterSpacing: "0.08em" }}>Mariia Yurchenko · Photographer Slovakia</span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#444" }}>© 2026 · Bratislava, Slovensko</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#444" }}>
                        Web vytvoril <span style={{ color: "#666" }}>Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
