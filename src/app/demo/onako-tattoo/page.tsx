export const metadata = {
    title: "Onakô Tattoo Bratislava – Tetovanie a galéria umenia",
    description: "Onakô Tattoo Bratislava — custom tetovanie, resident a guest artists, art gallery. Špitálska 20.",
};

export default function OnakoTattooDemo() {
    return (
        <div className="min-h-screen bg-[#080808] text-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-lg tracking-[0.25em] font-normal">ONAKÔ</span>
                    <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.3em] text-zinc-500 uppercase" style={{ fontFamily: "sans-serif" }}>
                        <a href="#umelci" className="hover:text-white transition-colors">Umelci</a>
                        <a href="#galeria" className="hover:text-white transition-colors">Galéria</a>
                        <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
                    </div>
                    <a
                        href="#kontakt"
                        className="text-xs tracking-[0.3em] uppercase border-b border-zinc-600 pb-0.5 hover:border-white transition-colors"
                        style={{ fontFamily: "sans-serif" }}
                    >
                        Rezervácia
                    </a>
                </div>
            </nav>

            {/* Hero — editorial split layout */}
            <section className="min-h-screen flex flex-col">
                {/* Top half — large text */}
                <div className="flex-1 flex items-end pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
                    <div>
                        <p
                            className="text-xs tracking-[0.5em] text-zinc-600 uppercase mb-6"
                            style={{ fontFamily: "sans-serif" }}
                        >
                            Tattoo & Art Studio — Bratislava
                        </p>
                        <h1
                            className="text-[clamp(4rem,13vw,9rem)] font-normal leading-[0.9] tracking-[-0.02em]"
                        >
                            Umenie<br />
                            <em className="not-italic text-zinc-600">na</em> koži.
                        </h1>
                    </div>
                </div>

                {/* Bottom half — details */}
                <div className="max-w-7xl mx-auto px-6 w-full pb-24">
                    <div className="border-t border-zinc-800 pt-10 grid md:grid-cols-3 gap-10">
                        <div>
                            <p
                                className="text-xs tracking-[0.4em] text-zinc-600 uppercase mb-3"
                                style={{ fontFamily: "sans-serif" }}
                            >
                                Adresa
                            </p>
                            <p className="text-zinc-300 text-sm leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                                Špitálska 20<br />
                                811 01 Bratislava<br />
                                Staré Mesto
                            </p>
                        </div>
                        <div>
                            <p
                                className="text-xs tracking-[0.4em] text-zinc-600 uppercase mb-3"
                                style={{ fontFamily: "sans-serif" }}
                            >
                                Hodiny
                            </p>
                            <p className="text-zinc-300 text-sm leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                                Pondelok – Piatok<br />
                                10:00 – 17:00
                            </p>
                        </div>
                        <div className="flex items-end">
                            <div className="flex gap-6">
                                <a
                                    href="#kontakt"
                                    className="px-6 py-3 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-zinc-100 transition-colors"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    Rezervovať
                                </a>
                                <a
                                    href="#galeria"
                                    className="px-6 py-3 border border-zinc-800 text-zinc-400 text-xs tracking-widest uppercase hover:border-zinc-600 hover:text-white transition-colors"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    Galéria
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <div className="border-y border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-3 divide-x divide-zinc-900">
                        {[
                            { n: "13 000+", label: "Instagram followers" },
                            { n: "2018", label: "Rok vzniku" },
                            { n: "100%", label: "Custom design" },
                        ].map((s) => (
                            <div key={s.label} className="py-8 px-8">
                                <p className="text-2xl font-normal mb-1">{s.n}</p>
                                <p
                                    className="text-xs tracking-[0.3em] text-zinc-600 uppercase"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Artists */}
            <section id="umelci" className="py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="border-b border-zinc-900 pb-6 mb-16 flex items-end justify-between">
                        <h2 className="text-4xl font-normal">Resident umelci</h2>
                        <p
                            className="text-xs tracking-[0.3em] text-zinc-600 uppercase hidden md:block"
                            style={{ fontFamily: "sans-serif" }}
                        >
                            Guest artists na dopyt
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                role: "Resident Artist I",
                                spec: "Black & Grey · Fine Line",
                                note: "Voľné termíny",
                                styles: ["Portréty", "Realizmus", "Botanika"],
                            },
                            {
                                role: "Resident Artist II",
                                spec: "Japanese · Neo-Traditional",
                                note: "Voľné termíny",
                                styles: ["Japonské vzory", "Draci", "Kvety"],
                            },
                            {
                                role: "Guest Artist",
                                spec: "Geometric · Dotwork",
                                note: "Na dopyt",
                                styles: ["Geometria", "Mandaly", "Minimalizmus"],
                            },
                        ].map((a, i) => (
                            <div key={i}>
                                {/* Photo placeholder */}
                                <div className="w-full aspect-[3/4] bg-zinc-900 mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-end p-4">
                                        <span
                                            className="text-xs tracking-widest text-zinc-700 uppercase"
                                            style={{ fontFamily: "sans-serif" }}
                                        >
                                            Portfolio foto
                                        </span>
                                    </div>
                                </div>
                                <p
                                    className="text-xs tracking-[0.3em] text-zinc-600 uppercase mb-1"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    {a.role}
                                </p>
                                <p className="text-xl font-normal mb-3">{a.spec}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {a.styles.map((s) => (
                                        <span
                                            key={s}
                                            className="text-xs text-zinc-500 border-b border-zinc-800"
                                            style={{ fontFamily: "sans-serif" }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <p
                                    className="text-xs tracking-widest text-zinc-500 uppercase"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    {a.note}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Styles */}
            <section className="py-28 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl font-normal mb-8">Štýly & techniky</h2>
                            <p className="text-zinc-500 leading-relaxed mb-8" style={{ fontFamily: "sans-serif" }}>
                                Každé tetovanie je originálny umelecký kúsok navrhnutý priamo pre vás.
                                Pracujeme v širokej škále štýlov — od jemných línií po prepracované japonské kompozície.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-px bg-zinc-900">
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
                                    className="bg-[#080808] p-4 hover:bg-zinc-900 transition-colors"
                                >
                                    <span
                                        className="text-xs text-zinc-400 tracking-wider"
                                        style={{ fontFamily: "sans-serif" }}
                                    >
                                        {style}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="galeria" className="py-28 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-16">
                        <h2 className="text-4xl font-normal">Galéria prác</h2>
                        <a
                            href="https://instagram.com/onako_tattoo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs tracking-[0.3em] text-zinc-500 uppercase hover:text-white transition-colors border-b border-zinc-800 pb-0.5"
                            style={{ fontFamily: "sans-serif" }}
                        >
                            @onako_tattoo →
                        </a>
                    </div>
                    {/* Gallery grid — varied sizes */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={`tall-${i}`}
                                className={`bg-zinc-900 hover:bg-zinc-800 transition-colors flex items-end p-3 ${i === 0 ? "row-span-2 aspect-auto" : "aspect-square"}`}
                                style={i === 0 ? { aspectRatio: "auto", minHeight: "400px" } : {}}
                            >
                                <span
                                    className="text-xs text-zinc-700 tracking-widest"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    foto
                                </span>
                            </div>
                        ))}
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={`sq-${i}`}
                                className="aspect-square bg-zinc-900 hover:bg-zinc-800 transition-colors flex items-end p-3"
                            >
                                <span
                                    className="text-xs text-zinc-700 tracking-widest"
                                    style={{ fontFamily: "sans-serif" }}
                                >
                                    foto
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" className="py-28 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-normal mb-12">Rezervácia termínu</h2>
                            <div className="space-y-8">
                                {[
                                    { label: "Adresa", value: "Špitálska 20, 811 01 Bratislava" },
                                    { label: "Hodiny", value: "Po – Pi  10:00 – 17:00" },
                                    { label: "Email", value: "info@onakotattoo.com" },
                                    { label: "Instagram", value: "@onako_tattoo" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-10 items-baseline">
                                        <span
                                            className="text-xs tracking-[0.3em] text-zinc-600 uppercase w-24 shrink-0"
                                            style={{ fontFamily: "sans-serif" }}
                                        >
                                            {item.label}
                                        </span>
                                        <span className="text-zinc-300 text-sm" style={{ fontFamily: "sans-serif" }}>
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-zinc-600 text-sm leading-relaxed mb-8" style={{ fontFamily: "sans-serif" }}>
                                Napíšte nám o svojom motíve — štýl, veľkosť, miesto.
                                Čím viac detailov, tým lepšie vám vieme poradiť.
                                Ozveme sa čo najskôr.
                            </p>
                            <a
                                href="mailto:info@onakotattoo.com?subject=Rezervacia terminu — Onako Tattoo"
                                className="inline-block px-8 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-zinc-100 transition-colors mb-4"
                                style={{ fontFamily: "sans-serif" }}
                            >
                                Napísať správu →
                            </a>
                            <br />
                            <a
                                href="https://instagram.com/onako_tattoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs tracking-[0.3em] text-zinc-600 uppercase hover:text-white transition-colors border-b border-zinc-800 pb-0.5"
                                style={{ fontFamily: "sans-serif" }}
                            >
                                DM na Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="tracking-[0.3em] text-zinc-500">ONAKÔ TATTOO</span>
                    <p className="text-zinc-800 text-xs" style={{ fontFamily: "sans-serif" }}>© 2026 Onakô Tattoo Bratislava</p>
                    <p className="text-zinc-800 text-xs" style={{ fontFamily: "sans-serif" }}>
                        Web vytvoril <span className="text-zinc-700">Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
