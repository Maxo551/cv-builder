export const metadata = {
    title: "Sova Tattoo Bratislava – Tetovanie na mieru",
    description: "Sova Tattoo Bratislava — custom tetovanie, black & grey, fine line. Rezervácia cez Instagram.",
};

export default function SovaTattooDemo() {
    return (
        <div className="min-h-screen bg-[#111010] text-white" style={{ fontFamily: "'Georgia', serif" }}>
            {/* Top strip */}
            <div
                className="w-full py-2 px-6 flex items-center justify-between"
                style={{ fontFamily: "sans-serif", background: "#1a1a1a", fontSize: "11px", letterSpacing: "0.3em" }}
            >
                <span className="text-zinc-600 uppercase">Bratislava · Slovakia</span>
                <span className="text-zinc-600 uppercase">Vol. I · 2026</span>
                <span className="text-zinc-600 uppercase">Booking by appointment</span>
            </div>

            {/* Nav */}
            <nav className="sticky top-0 z-50 border-b border-zinc-900" style={{ background: "#111010" }}>
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <span className="text-2xl tracking-[0.15em]">SOVA</span>
                    <div
                        className="hidden md:flex items-center gap-10 text-zinc-500 uppercase"
                        style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.35em" }}
                    >
                        <a href="#prace" className="hover:text-white transition-colors">Práce</a>
                        <a href="#styly" className="hover:text-white transition-colors">Štýly</a>
                        <a href="#rezervacia" className="hover:text-white transition-colors">Rezervácia</a>
                    </div>
                    <a
                        href="#rezervacia"
                        className="border border-zinc-700 hover:border-white px-4 py-1.5 transition-colors"
                        style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.25em" }}
                    >
                        TERMÍN
                    </a>
                </div>
            </nav>

            {/* Hero — full viewport */}
            <section className="relative" style={{ minHeight: "calc(100vh - 84px)" }}>
                <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-between py-16" style={{ minHeight: "calc(100vh - 84px)" }}>
                    {/* Main text */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="grid md:grid-cols-2 gap-12 items-end">
                            <div>
                                <p
                                    className="text-zinc-600 uppercase mb-8"
                                    style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.4em" }}
                                >
                                    I. &nbsp; Tatoo Studio
                                </p>
                                <h1
                                    className="font-normal leading-[0.85] tracking-tight"
                                    style={{ fontSize: "clamp(4.5rem, 14vw, 10rem)" }}
                                >
                                    Kresba<br />
                                    <em
                                        className="not-italic"
                                        style={{ color: "#888" }}
                                    >
                                        pod
                                    </em>{" "}
                                    kožou.
                                </h1>
                            </div>
                            <div className="md:pb-4">
                                {/* Portrait placeholder */}
                                <div
                                    className="w-full bg-zinc-900 flex items-end p-5 relative"
                                    style={{ aspectRatio: "4/5" }}
                                >
                                    <div
                                        className="absolute top-3 left-3 right-3 bottom-3 border border-zinc-800 pointer-events-none"
                                        style={{ borderWidth: "1px" }}
                                    />
                                    <span
                                        className="text-zinc-700 uppercase"
                                        style={{ fontFamily: "sans-serif", fontSize: "10px", letterSpacing: "0.4em" }}
                                    >
                                        Plate Nº 01
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom info row */}
                    <div
                        className="border-t border-zinc-900 pt-8 grid grid-cols-3 gap-6"
                        style={{ fontFamily: "sans-serif" }}
                    >
                        <div>
                            <p className="text-zinc-600 uppercase mb-1" style={{ fontSize: "10px", letterSpacing: "0.4em" }}>Štúdio</p>
                            <p className="text-zinc-300 text-sm">Bratislava, Slovakia</p>
                        </div>
                        <div>
                            <p className="text-zinc-600 uppercase mb-1" style={{ fontSize: "10px", letterSpacing: "0.4em" }}>Špecializácia</p>
                            <p className="text-zinc-300 text-sm">Black & Grey · Fine Line</p>
                        </div>
                        <div>
                            <p className="text-zinc-600 uppercase mb-1" style={{ fontSize: "10px", letterSpacing: "0.4em" }}>Booking</p>
                            <a
                                href="#rezervacia"
                                className="text-white text-sm hover:text-zinc-300 transition-colors"
                            >
                                Na termín →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="prace" className="border-t border-zinc-900 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-baseline justify-between mb-12">
                        <div>
                            <span
                                className="text-zinc-600 mr-4"
                                style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.4em" }}
                            >
                                II.
                            </span>
                            <h2 className="inline text-3xl font-normal">Vybrané práce</h2>
                        </div>
                        <a
                            href="https://instagram.com/sova__ink"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-white transition-colors"
                            style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.3em" }}
                        >
                            @sova__ink →
                        </a>
                    </div>

                    {/* Asymmetric grid */}
                    <div className="grid grid-cols-3 gap-2">
                        {/* Large featured piece */}
                        <div
                            className="col-span-2 row-span-2 bg-zinc-900 flex items-end p-4 relative"
                            style={{ minHeight: "480px" }}
                        >
                            <div className="absolute top-3 left-3" style={{ fontFamily: "sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#4a4a4a" }}>FIG. 01</div>
                            <div className="absolute bottom-3 right-3" style={{ fontFamily: "sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "#4a4a4a" }}>Black & Grey</div>
                        </div>
                        {/* Small pieces */}
                        {[2, 3, 4, 5, 6].map((n) => (
                            <div
                                key={n}
                                className="bg-zinc-900 hover:bg-zinc-800 transition-colors flex items-end p-3 relative"
                                style={{ aspectRatio: "1" }}
                            >
                                <span
                                    className="text-zinc-700"
                                    style={{ fontFamily: "sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
                                >
                                    {`FIG. 0${n}`}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Styles */}
            <section id="styly" className="border-t border-zinc-900 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-12">
                        <span
                            className="text-zinc-600 mr-4"
                            style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.4em" }}
                        >
                            III.
                        </span>
                        <h2 className="inline text-3xl font-normal">Štýly</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900">
                        {[
                            { name: "Black & Grey", note: "Realizmus, portréty, botanika" },
                            { name: "Fine Line", note: "Jemné línie, minimalismus" },
                            { name: "Dotwork", note: "Bodkovaná technika, mandaly" },
                            { name: "Cover-up", note: "Prekrytie starých tetovaní" },
                        ].map((s) => (
                            <div key={s.name} className="bg-[#111010] p-6 hover:bg-zinc-900 transition-colors">
                                <h3 className="text-lg font-normal mb-2">{s.name}</h3>
                                <p
                                    className="text-zinc-600"
                                    style={{ fontFamily: "sans-serif", fontSize: "12px" }}
                                >
                                    {s.note}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="border-t border-zinc-900 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16">
                        <span
                            className="text-zinc-600 mr-4"
                            style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.4em" }}
                        >
                            IV.
                        </span>
                        <h2 className="inline text-3xl font-normal">Ako to funguje</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-px bg-zinc-900">
                        {[
                            { n: "01", title: "Konzultácia", desc: "Popíš svoju predstavu — motív, štýl, miesto, veľkosť." },
                            { n: "02", title: "Návrh", desc: "Vytvorím návrh na mieru. Pred realizáciou ho schváliš." },
                            { n: "03", title: "Tetovanie", desc: "Termín v štúdiu. Trvanie závisí od rozsahu práce." },
                            { n: "04", title: "Hojenie", desc: "Dostaneš inštrukcie starostlivosti. Som k dispozícii." },
                        ].map((step) => (
                            <div key={step.n} className="bg-[#111010] p-6 hover:bg-zinc-900 transition-colors">
                                <p
                                    className="text-zinc-600 mb-4"
                                    style={{ fontFamily: "sans-serif", fontSize: "28px", letterSpacing: "-0.02em" }}
                                >
                                    {step.n}
                                </p>
                                <h3 className="text-lg font-normal mb-2">{step.title}</h3>
                                <p className="text-zinc-600 text-sm" style={{ fontFamily: "sans-serif" }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section id="rezervacia" className="border-t border-zinc-900 py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16">
                        <span
                            className="text-zinc-600 mr-4"
                            style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.4em" }}
                        >
                            V.
                        </span>
                        <h2 className="inline text-3xl font-normal">Rezervácia</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <p className="text-zinc-400 leading-relaxed mb-12 text-lg">
                                Každý kúsok vzniká na mieru. Napíš o svojej predstave —
                                čím viac detailov, tým lepšie. Ozvem sa čo najskôr.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { label: "Instagram", value: "@sova__ink" },
                                    { label: "Lokalita", value: "Bratislava, Slovakia" },
                                    { label: "Odpoveď", value: "Do 24 hodín" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-12 items-baseline border-b border-zinc-900 pb-4">
                                        <span
                                            className="text-zinc-600 w-24 shrink-0 uppercase"
                                            style={{ fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "0.35em" }}
                                        >
                                            {item.label}
                                        </span>
                                        <span className="text-zinc-300 text-sm" style={{ fontFamily: "sans-serif" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <a
                                href="https://instagram.com/sova__ink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors mb-4"
                                style={{ fontFamily: "sans-serif", fontSize: "12px", letterSpacing: "0.35em" }}
                            >
                                DM na Instagram →
                            </a>
                            <p
                                className="text-zinc-600 text-center"
                                style={{ fontFamily: "sans-serif", fontSize: "12px" }}
                            >
                                Booking only via Instagram direct message
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-900 py-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="tracking-[0.2em]">SOVA TATTOO</span>
                    <p className="text-zinc-700 text-xs" style={{ fontFamily: "sans-serif" }}>© 2026 Sova Tattoo · Bratislava</p>
                    <p className="text-zinc-800 text-xs" style={{ fontFamily: "sans-serif" }}>
                        Web vytvoril <span className="text-zinc-700">Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
