export const metadata = {
    title: "Oľha Khomich – Makeup Artist & Academy Bratislava",
    description: "Oľha Khomich — profesionálna makeup artistka a lektorka. Líčenie, obočie, kurzy. Bratislava.",
};

export default function OlhaMakeupDemo() {
    return (
        <div className="min-h-screen text-white" style={{ background: "#0c0c0c", fontFamily: "'Georgia', 'Times New Roman', serif" }}>

            {/* Gold strip */}
            <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "rgba(12,12,12,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1f1f1f" }}>
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div>
                        <span className="font-normal tracking-[0.25em] uppercase text-white" style={{ fontSize: "15px", letterSpacing: "0.3em" }}>
                            OĽHA KHOMICH
                        </span>
                        <span style={{ color: "#C9A84C", margin: "0 8px", fontSize: "12px" }}>·</span>
                        <span style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#666", fontFamily: "Arial, sans-serif" }}>MAKEUP ARTIST</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8" style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.25em" }}>
                        <a href="#portfolio" className="text-zinc-500 hover:text-white transition-colors uppercase">Portfolio</a>
                        <a href="#sluzby" className="text-zinc-500 hover:text-white transition-colors uppercase">Služby</a>
                        <a href="#kurzy" className="text-zinc-500 hover:text-white transition-colors uppercase">Kurzy</a>
                        <a href="#booking" className="text-zinc-500 hover:text-white transition-colors uppercase">Kontakt</a>
                    </div>
                    <a
                        href="#booking"
                        style={{ border: "1px solid #C9A84C", color: "#C9A84C", padding: "8px 20px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
                        className="uppercase hover:bg-[#C9A84C] hover:text-black transition-all"
                    >
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "92vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
                {/* Subtle gold glow */}
                <div style={{ position: "absolute", top: "20%", right: "15%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center" style={{ zIndex: 1, position: "relative" }}>
                    <div>
                        {/* Eyebrow */}
                        <div className="flex items-center gap-4 mb-10">
                            <div style={{ width: "40px", height: "1px", background: "#C9A84C" }} />
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#C9A84C" }}>
                                BRATISLAVA · SLOVENSKO
                            </span>
                        </div>

                        <h1
                            className="font-normal leading-tight mb-6"
                            style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 1, letterSpacing: "-0.01em" }}
                        >
                            Viac ako<br />
                            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>líčenie.</em>
                        </h1>

                        <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.7, maxWidth: "400px", marginBottom: "40px", fontFamily: "Arial, sans-serif", fontWeight: 400 }}>
                            Makeup artistka, lektorka a zakladateľka vlastnej akadémie.
                            Svadby, fotenie, kurzy a každodenné premeny — v Bratislave a celej Európe.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href="#booking"
                                style={{ background: "#C9A84C", color: "#000", padding: "14px 32px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.3em", fontWeight: 700 }}
                                className="uppercase hover:opacity-90 transition-opacity"
                            >
                                Rezervovať termín
                            </a>
                            <a
                                href="#portfolio"
                                style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.3em", color: "#555" }}
                                className="uppercase hover:text-white transition-colors"
                            >
                                Pozrieť portfolio →
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-14 pt-8" style={{ borderTop: "1px solid #1f1f1f" }}>
                            {[
                                { n: "28K", label: "Sledovatelia" },
                                { n: "EU", label: "Svadby" },
                                { n: "10+", label: "Rokov praxe" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="font-normal" style={{ fontSize: "22px", color: "#C9A84C", letterSpacing: "0.05em" }}>{s.n}</p>
                                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#444", letterSpacing: "0.4em" }}>{s.label.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Portrait placeholder */}
                    <div style={{ position: "relative" }}>
                        <div style={{ aspectRatio: "3/4", background: "#141414", position: "relative" }}>
                            <div style={{ position: "absolute", inset: "16px", border: "1px solid rgba(201,168,76,0.2)" }} />
                            <div style={{ position: "absolute", bottom: "24px", left: "24px", fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#C9A84C", opacity: 0.7 }}>
                                @olyakhomichmakeup
                            </div>
                        </div>
                        <div style={{ position: "absolute", top: "-16px", right: "-16px", width: "80px", height: "80px", border: "1px solid rgba(201,168,76,0.2)" }} />
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section id="portfolio" style={{ borderTop: "1px solid #1f1f1f", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#C9A84C" }}>— PORTFOLIO</span>
                            <h2 className="font-normal mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Vybrané práce</h2>
                        </div>
                        <a href="https://instagram.com/olyakhomichmakeup" target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#555", letterSpacing: "0.3em" }}
                            className="hover:text-white transition-colors uppercase">
                            @olyakhomichmakeup →
                        </a>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-8 relative" style={{ background: "#141414", minHeight: "400px" }}>
                            <div style={{ position: "absolute", top: "16px", left: "16px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#C9A84C" }}>SVADBA</div>
                            <div style={{ position: "absolute", bottom: "16px", right: "16px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>I.</div>
                        </div>
                        <div className="col-span-4 flex flex-col gap-2">
                            {["EDITORIAL", "DENNÉ"].map((tag, i) => (
                                <div key={tag} style={{ background: "#141414", flex: 1, minHeight: "196px", position: "relative", padding: "12px" }}>
                                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#666" }}>{tag}</div>
                                    <div style={{ position: "absolute", bottom: "12px", right: "12px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>{["II.", "III."][i]}</div>
                                </div>
                            ))}
                        </div>
                        {["IV.", "V.", "VI."].map((n) => (
                            <div key={n} className="col-span-4" style={{ background: "#141414", minHeight: "220px", position: "relative", padding: "12px", borderTop: n === "V." ? "2px solid rgba(201,168,76,0.3)" : "none" }}>
                                <div style={{ position: "absolute", bottom: "12px", right: "12px", fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "#333" }}>{n}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="sluzby" style={{ borderTop: "1px solid #1f1f1f", padding: "80px 0", background: "#0a0a0a" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#C9A84C" }}>— SLUŽBY</span>
                    <h2 className="font-normal mt-2 mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>Čo ponúkam</h2>
                    <div className="grid md:grid-cols-3 gap-px" style={{ background: "#1f1f1f" }}>
                        {[
                            { name: "Svadobné líčenie", desc: "Kompletná príprava nevesty a jej svadobného dňa — od skúšky po finálny výsledok.", tag: "WEDDING" },
                            { name: "Obočie & lashes", desc: "Permanentné obočie, laminovanie, microblading. Efekt na mesiace bez každodennej starostlivosti.", tag: "PERM" },
                            { name: "Foto & video", desc: "Líčenie pre módne foto sety, reklamné kampane, TikTok a Instagram obsah.", tag: "MEDIA" },
                        ].map((s) => (
                            <div key={s.name} className="p-8 hover:bg-[#111] transition-colors" style={{ background: "#0c0c0c" }}>
                                <div className="flex items-center justify-between mb-4">
                                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "#C9A84C" }}>{s.tag}</span>
                                </div>
                                <h3 className="font-normal mb-3" style={{ fontSize: "20px" }}>{s.name}</h3>
                                <p style={{ fontFamily: "Arial, sans-serif", color: "#555", fontSize: "13px", lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section id="kurzy" style={{ borderTop: "1px solid #1f1f1f", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#C9A84C" }}>— AKADÉMIA</span>
                            <h2 className="font-normal mt-2 mb-6" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1 }}>
                                Naučím<br />
                                <em style={{ fontStyle: "italic", color: "#C9A84C" }}>aj teba.</em>
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#555", fontSize: "14px", lineHeight: 1.7, marginBottom: "32px" }}>
                                Individuálne kurzy líčenia pre začiatočníkov aj pokročilých.
                                Naučíš sa techniky, ktoré používajú profesionálni makeup artisti.
                            </p>
                            <a href="#booking" style={{ background: "#C9A84C", color: "#000", padding: "14px 28px", fontFamily: "Arial, sans-serif", fontSize: "11px", letterSpacing: "0.3em", fontWeight: 700 }}
                                className="uppercase inline-block hover:opacity-90 transition-opacity">
                                Mám záujem o kurz
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-px" style={{ background: "#1f1f1f" }}>
                            {[
                                { title: "Kurz pre začiatočníkov", desc: "Základné techniky, príprava pleti, deňné líčenie." },
                                { title: "Pokročilý kurz", desc: "Večerné, dramatické, editoriale a filmové techniky." },
                                { title: "Svadobný kurz", desc: "Naučíš sa oblíčiť seba aj nevestu na svadobný deň." },
                                { title: "1:1 konzultácia", desc: "Osobné vedenie prispôsobené tvojej tvári a potrebám." },
                            ].map((c) => (
                                <div key={c.title} className="p-6 hover:bg-[#141414] transition-colors" style={{ background: "#0c0c0c" }}>
                                    <h4 className="font-normal mb-2" style={{ fontSize: "14px", letterSpacing: "0.05em" }}>{c.title}</h4>
                                    <p style={{ fontFamily: "Arial, sans-serif", color: "#444", fontSize: "12px", lineHeight: 1.5 }}>{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section id="booking" style={{ borderTop: "2px solid #C9A84C", padding: "80px 0", background: "#0a0a0a" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#C9A84C" }}>— REZERVÁCIA</span>
                            <h2 className="font-normal mt-2 mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 1 }}>
                                Napíš mi.
                            </h2>
                            <p style={{ fontFamily: "Arial, sans-serif", color: "#555", fontSize: "14px", lineHeight: 1.7, maxWidth: "360px" }}>
                                Každý projekt je unikátny. Napíš mi na Instagram — dohovoríme
                                sa na detailoch a ja sa postarám o zvyšok.
                            </p>
                            <div className="mt-10 space-y-4">
                                {[
                                    { label: "Lokalita", value: "Bratislava + cestovné" },
                                    { label: "Booking", value: "Instagram DM" },
                                    { label: "Odpoveď", value: "Do 24 hodín" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #1f1f1f" }}>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "10px", letterSpacing: "0.4em", color: "#333", width: "80px", flexShrink: 0, fontWeight: 700 }}>{item.label.toUpperCase()}</span>
                                        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#888" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <a
                                href="https://instagram.com/olyakhomichmakeup"
                                target="_blank" rel="noopener noreferrer"
                                className="block w-full text-center uppercase font-bold"
                                style={{ background: "#C9A84C", color: "#000", padding: "20px", fontFamily: "Arial, sans-serif", fontSize: "12px", letterSpacing: "0.3em", marginBottom: "12px" }}
                            >
                                DM na @olyakhomichmakeup →
                            </a>
                            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#333", textAlign: "center", letterSpacing: "0.2em" }}>
                                BOOKING VIA INSTAGRAM
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #1f1f1f", padding: "32px 0" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-normal tracking-widest uppercase" style={{ fontSize: "12px", letterSpacing: "0.3em" }}>
                        Oľha Khomich
                        <span style={{ color: "#C9A84C", margin: "0 10px" }}>·</span>
                        Makeup Artist
                    </span>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#333" }}>© 2026 · Bratislava</p>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#222" }}>
                        Web vytvoril <span style={{ color: "#444" }}>Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
