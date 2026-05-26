export const metadata = {
    title: "Onakô Tattoo Bratislava – Tetovanie a galéria umenia",
    description: "Onakô Tattoo Bratislava — custom tetovanie, resident a guest artists, art gallery. Špitálska 20.",
};

export default function OnakoTattooDemo() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-zinc-900">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-xl tracking-[0.3em] font-light uppercase text-white">
                        Onakô
                    </span>
                    <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-zinc-500">
                        <a href="#artists" className="hover:text-white transition">Umelci</a>
                        <a href="#styles" className="hover:text-white transition">Štýly</a>
                        <a href="#gallery" className="hover:text-white transition">Galéria</a>
                        <a href="#contact" className="hover:text-white transition">Kontakt</a>
                    </div>
                    <a
                        href="#contact"
                        className="px-4 py-2 border border-zinc-700 text-zinc-300 text-xs font-semibold tracking-widest uppercase rounded hover:border-white hover:text-white transition"
                    >
                        Rezervovať
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-16 min-h-screen flex items-end relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(ellipse at 30% 40%, rgba(139,92,246,0.12) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 70%, rgba(236,72,153,0.08) 0%, transparent 50%)
                        `,
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span
                        className="text-[20vw] font-black tracking-tighter opacity-[0.03] text-white leading-none"
                        aria-hidden
                    >
                        ONAKÔ
                    </span>
                </div>
                <div className="relative max-w-6xl mx-auto px-6 pb-20 w-full">
                    <div className="max-w-xl">
                        <p className="text-xs tracking-[0.4em] text-zinc-500 uppercase mb-6">
                            Tatoo studio & Art gallery • Bratislava
                        </p>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
                            Umenie<br />
                            na koži.
                        </h1>
                        <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-sm">
                            Custom tetovanie, resident a guest umelci, galéria. Špitálska 20, Bratislava.
                            Pon–Pia 10:00–17:00.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-white text-black font-bold text-sm tracking-wider uppercase rounded hover:bg-zinc-100 transition"
                            >
                                Rezervovať termín
                            </a>
                            <a
                                href="#gallery"
                                className="px-6 py-3 border border-zinc-800 text-zinc-400 font-semibold text-sm tracking-wider uppercase rounded hover:border-zinc-600 hover:text-white transition"
                            >
                                Pozrieť práce
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <div className="border-y border-zinc-900 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <div className="grid grid-cols-3 divide-x divide-zinc-900 text-center">
                        {[
                            { n: "13K+", label: "Instagram" },
                            { n: "2018", label: "Rok vzniku" },
                            { n: "100%", label: "Custom" },
                        ].map((s) => (
                            <div key={s.label} className="px-6 py-2">
                                <p className="text-2xl font-black mb-1">{s.n}</p>
                                <p className="text-xs tracking-widest text-zinc-600 uppercase">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Artists */}
            <section id="artists" className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs tracking-[0.4em] text-zinc-600 uppercase mb-4">Tím</p>
                    <h2 className="text-4xl font-black mb-16">Resident umelci</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Resident Artist",
                                spec: "Black & Grey · Fine Line",
                                avail: "Voľné termíny",
                            },
                            {
                                name: "Resident Artist",
                                spec: "Japanese · Neo-Traditional",
                                avail: "Voľné termíny",
                            },
                            {
                                name: "Guest Artist",
                                spec: "Geometric · Dotwork",
                                avail: "Termíny na dopyt",
                            },
                        ].map((a, i) => (
                            <div
                                key={i}
                                className="group border border-zinc-900 rounded-xl p-6 hover:border-zinc-700 transition"
                            >
                                <div className="w-full h-48 bg-zinc-900 rounded-lg mb-5 flex items-center justify-center">
                                    <span className="text-zinc-700 text-xs tracking-widest uppercase">Portfolio foto</span>
                                </div>
                                <h3 className="font-bold text-lg mb-1">{a.name}</h3>
                                <p className="text-zinc-500 text-sm mb-3">{a.spec}</p>
                                <span className="inline-block px-2 py-0.5 bg-zinc-900 text-zinc-400 text-xs rounded">
                                    {a.avail}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Styles */}
            <section id="styles" className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs tracking-[0.4em] text-zinc-600 uppercase mb-4">Štýly</p>
                    <h2 className="text-4xl font-black mb-12">Čo robíme</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "Black & Grey",
                            "Fine Line",
                            "Japanese",
                            "Neo-Traditional",
                            "Geometric",
                            "Dotwork",
                            "Lettering",
                            "Cover-up",
                            "Custom",
                        ].map((style) => (
                            <div
                                key={style}
                                className="p-4 border border-zinc-900 rounded-lg hover:border-zinc-700 transition"
                            >
                                <span className="text-sm font-semibold text-zinc-300">{style}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery placeholder */}
            <section id="gallery" className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs tracking-[0.4em] text-zinc-600 uppercase mb-4">Inšpirácia</p>
                    <h2 className="text-4xl font-black mb-12">Galéria prác</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square bg-zinc-900 rounded-lg hover:bg-zinc-800 transition flex items-center justify-center"
                            >
                                <span className="text-zinc-700 text-xs tracking-widest">foto</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-zinc-600 text-sm mt-6 text-center">
                        Viac prác na{" "}
                        <a
                            href="https://instagram.com/onako_tattoo"
                            className="text-zinc-400 hover:text-white transition underline underline-offset-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @onako_tattoo
                        </a>
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <p className="text-xs tracking-[0.4em] text-zinc-600 uppercase mb-4">Kontakt</p>
                            <h2 className="text-4xl font-black mb-8">Dohovoríme sa</h2>
                            <div className="space-y-5">
                                <div className="flex gap-4 items-start">
                                    <span className="text-zinc-500 text-lg mt-0.5">📍</span>
                                    <div>
                                        <p className="font-semibold">Špitálska 20, 811 01 Bratislava</p>
                                        <p className="text-zinc-600 text-sm">Staré Mesto</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-zinc-500 text-lg mt-0.5">🕐</span>
                                    <div>
                                        <p className="font-semibold">Pondelok – Piatok</p>
                                        <p className="text-zinc-600 text-sm">10:00 – 17:00</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-zinc-500 text-lg mt-0.5">✉️</span>
                                    <a
                                        href="mailto:info@onakotattoo.com"
                                        className="font-semibold hover:text-zinc-300 transition"
                                    >
                                        info@onakotattoo.com
                                    </a>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-zinc-500 text-lg mt-0.5">📸</span>
                                    <a
                                        href="https://instagram.com/onako_tattoo"
                                        className="font-semibold hover:text-zinc-300 transition"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @onako_tattoo
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="p-8 border border-zinc-800 rounded-2xl">
                                <h3 className="text-2xl font-black mb-3">Rezervácia termínu</h3>
                                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                                    Napíšte nám svoju predstavu — motív, štýl, veľkosť a miesto.
                                    Ozveme sa čo najskôr.
                                </p>
                                <a
                                    href="mailto:info@onakotattoo.com?subject=Rezervacia terminu"
                                    className="block w-full text-center px-6 py-3 bg-white text-black font-bold text-sm tracking-wider uppercase rounded hover:bg-zinc-100 transition"
                                >
                                    Napísať správu
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="tracking-[0.3em] font-light uppercase text-zinc-400">Onakô Tattoo</span>
                    <p className="text-zinc-700 text-sm">© 2026 Onakô Tattoo Bratislava</p>
                    <p className="text-zinc-800 text-xs">
                        Web vytvoril <span className="text-zinc-600">Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
