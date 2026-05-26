export const metadata = {
    title: "Chaos MMA Bratislava – Tréning bojových umení",
    description: "Chaos MMA Bratislava – tréningy MMA, kickboxu, wrestlingu a thajského boxu pre všetky úrovne.",
};

export default function ChaosBratislavaDemo() {
    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-red-600 rotate-45 flex items-center justify-center">
                            <span className="text-white font-black text-xs -rotate-45">C</span>
                        </div>
                        <span className="font-black text-base tracking-widest uppercase">CHAOS MMA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-zinc-500">
                        <a href="#treningy" className="hover:text-white transition-colors">Tréningy</a>
                        <a href="#rozvrh" className="hover:text-white transition-colors">Rozvrh</a>
                        <a href="#cenik" className="hover:text-white transition-colors">Cenník</a>
                        <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
                    </div>
                    <a href="#kontakt" className="px-5 py-2.5 bg-red-600 text-white text-xs font-black tracking-widest uppercase hover:bg-red-500 transition-colors">
                        1. TRÉNING ZADARMO
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Diagonal background element */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-0 right-0 w-2/3 h-full bg-zinc-900"
                        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
                    />
                    <div
                        className="absolute top-0 right-0 w-2/3 h-full opacity-30"
                        style={{
                            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                            background: "radial-gradient(circle at 60% 40%, #DC2626 0%, transparent 60%)",
                        }}
                    />
                    {/* Vertical red slash */}
                    <div
                        className="absolute top-0 h-full w-1 bg-red-600"
                        style={{ left: "calc(33.33% + 2px)", transform: "skewX(-5deg)" }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
                    <div className="max-w-2xl">
                        <p className="text-xs tracking-[0.5em] text-red-500 font-bold uppercase mb-4">
                            Bratislava • Bojové umenia
                        </p>
                        <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.9] tracking-tight mb-8 uppercase">
                            Boj<br />
                            začína<br />
                            <span className="text-red-600">tu.</span>
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md">
                            MMA, kickbox, thajský box a wrestling. Tréningy pre každého —
                            od prvého kroku po súťažné medaily.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="#kontakt" className="px-8 py-4 bg-red-600 text-white font-black text-sm tracking-widest uppercase hover:bg-red-500 transition-colors">
                                Vyskúšať zadarmo
                            </a>
                            <a href="#rozvrh" className="text-sm font-bold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                                <span>Pozrieť rozvrh</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats — bottom strip */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-3 divide-x divide-zinc-800">
                            {[
                                { n: "4", label: "Disciplíny" },
                                { n: "3×", label: "Tréning týždenne" },
                                { n: "1.", label: "Tréning zadarmo" },
                            ].map((s) => (
                                <div key={s.label} className="py-5 px-8 flex items-baseline gap-3">
                                    <span className="text-2xl font-black text-red-500">{s.n}</span>
                                    <span className="text-xs tracking-widest text-zinc-500 uppercase">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Disciplines */}
            <section id="treningy" className="py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <p className="text-xs tracking-[0.4em] text-red-500 font-bold uppercase mb-3">Čo trénujeme</p>
                            <h2 className="text-5xl font-black uppercase">Disciplíny</h2>
                        </div>
                        <p className="text-zinc-600 text-sm max-w-xs text-right hidden md:block">
                            Každý tréning vedie skúsený inštruktor. Začiatočníci vítaní.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-px bg-zinc-800">
                        {[
                            {
                                name: "MMA",
                                tag: "Najobľúbenejšie",
                                desc: "Mixed Martial Arts — kompletný bojový systém v stoji aj na zemi. Ideálne pre tých, čo chcú vedieť všetko.",
                                accent: "bg-red-600",
                                times: ["Po 17:00", "St 19:00", "Pi 17:00"],
                            },
                            {
                                name: "Kickbox",
                                tag: "Pre kondíciu",
                                desc: "Techniky úderov rukami a nohami. Výborná kombinácia cardio tréningu a sebaobranných zručností.",
                                accent: "bg-orange-500",
                                times: ["Po 07:00", "St 07:00", "Št 19:00"],
                            },
                            {
                                name: "Thajský box",
                                tag: "Muay Thai",
                                desc: "8 zbraní tela — ruky, nohy, lakte, kolená. Jeden z najkomplexnejších a najúčinnejších bojových štýlov.",
                                accent: "bg-yellow-500",
                                times: ["Ut 17:00", "Št 17:00"],
                            },
                            {
                                name: "Wrestling",
                                tag: "Základ MMA",
                                desc: "Technika hodov, striahania a kontroly. Základ každého úspešného MMA bojovníka.",
                                accent: "bg-purple-500",
                                times: ["Po 19:00", "Ut 19:00"],
                            },
                        ].map((d) => (
                            <div key={d.name} className="bg-zinc-900 p-8 group hover:bg-zinc-800 transition-colors">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase mb-1">{d.name}</h3>
                                        <span className={`inline-block px-2 py-0.5 text-xs font-bold ${d.accent} text-black uppercase tracking-wider`}>
                                            {d.tag}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-zinc-500 leading-relaxed mb-6 text-sm">{d.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {d.times.map((t) => (
                                        <span key={t} className="px-3 py-1 border border-zinc-700 text-zinc-400 text-xs font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section id="rozvrh" className="py-28 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-xs tracking-[0.4em] text-red-500 font-bold uppercase mb-3">Týždenný plán</p>
                    <h2 className="text-5xl font-black uppercase mb-16">Rozvrh</h2>
                    <div className="overflow-x-auto -mx-6 px-6">
                        <table className="w-full min-w-[640px]">
                            <thead>
                                <tr>
                                    <th className="text-left pb-4 pr-8 text-xs tracking-widest text-zinc-600 uppercase font-bold w-20">Čas</th>
                                    {["Po", "Ut", "St", "Št", "Pi"].map((d) => (
                                        <th key={d} className="text-left pb-4 px-4 text-xs tracking-widest text-zinc-600 uppercase font-bold">
                                            {d}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        time: "07:00",
                                        cells: [
                                            { name: "Kickbox", color: "text-orange-400 bg-orange-400/10" },
                                            null,
                                            { name: "Kickbox", color: "text-orange-400 bg-orange-400/10" },
                                            null,
                                            { name: "MMA", color: "text-red-400 bg-red-400/10" },
                                        ],
                                    },
                                    {
                                        time: "17:00",
                                        cells: [
                                            { name: "MMA", color: "text-red-400 bg-red-400/10" },
                                            { name: "Thajský box", color: "text-yellow-400 bg-yellow-400/10" },
                                            { name: "Wrestling", color: "text-purple-400 bg-purple-400/10" },
                                            { name: "MMA", color: "text-red-400 bg-red-400/10" },
                                            { name: "Kickbox", color: "text-orange-400 bg-orange-400/10" },
                                        ],
                                    },
                                    {
                                        time: "19:00",
                                        cells: [
                                            { name: "Wrestling", color: "text-purple-400 bg-purple-400/10" },
                                            { name: "MMA", color: "text-red-400 bg-red-400/10" },
                                            { name: "Kickbox", color: "text-orange-400 bg-orange-400/10" },
                                            { name: "Thajský box", color: "text-yellow-400 bg-yellow-400/10" },
                                            null,
                                        ],
                                    },
                                ].map((row) => (
                                    <tr key={row.time} className="border-t border-zinc-800">
                                        <td className="py-4 pr-8 font-mono text-sm font-bold text-zinc-400">{row.time}</td>
                                        {row.cells.map((cell, i) => (
                                            <td key={i} className="py-4 px-4">
                                                {cell ? (
                                                    <span className={`px-3 py-1.5 text-xs font-bold rounded-sm ${cell.color}`}>
                                                        {cell.name}
                                                    </span>
                                                ) : (
                                                    <span className="text-zinc-800">—</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="cenik" className="py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-xs tracking-[0.4em] text-red-500 font-bold uppercase mb-3">Členstvo</p>
                    <h2 className="text-5xl font-black uppercase mb-16">Cenník</h2>
                    <div className="grid md:grid-cols-3 gap-px bg-zinc-800">
                        {[
                            {
                                name: "Trial",
                                price: "0€",
                                sub: "prvý tréning",
                                items: ["1 tréning zadarmo", "Všetky disciplíny", "Bez záväzkov"],
                                cta: "Rezervovať",
                                highlight: false,
                            },
                            {
                                name: "Mesačné",
                                price: "40€",
                                sub: "/ mesiac",
                                items: ["Neobmedzené tréningy", "Všetky disciplíny", "Šatňa + sprchy"],
                                cta: "Začať teraz",
                                highlight: true,
                            },
                            {
                                name: "Single",
                                price: "8€",
                                sub: "/ vstup",
                                items: ["Jeden tréning", "Podľa rozvrhu", "Bez registrácie"],
                                cta: "Prídem sa pozrieť",
                                highlight: false,
                            },
                        ].map((p) => (
                            <div
                                key={p.name}
                                className={`p-8 ${p.highlight ? "bg-red-600" : "bg-zinc-900"}`}
                            >
                                <p className="text-xs tracking-widest uppercase font-bold mb-4 opacity-70">{p.name}</p>
                                <div className="mb-6">
                                    <span className="text-5xl font-black">{p.price}</span>
                                    <span className={`text-sm ml-2 ${p.highlight ? "text-red-200" : "text-zinc-500"}`}>{p.sub}</span>
                                </div>
                                <ul className="space-y-2 mb-8">
                                    {p.items.map((item) => (
                                        <li key={item} className={`text-sm flex items-center gap-2 ${p.highlight ? "text-red-100" : "text-zinc-400"}`}>
                                            <span className="w-1 h-1 bg-current rounded-full shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#kontakt"
                                    className={`block text-center py-3 px-6 text-xs font-black tracking-widest uppercase transition-colors ${
                                        p.highlight
                                            ? "bg-white text-red-600 hover:bg-zinc-100"
                                            : "border border-zinc-700 text-white hover:border-white"
                                    }`}
                                >
                                    {p.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" className="py-28 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-xs tracking-[0.4em] text-red-500 font-bold uppercase mb-3">Príď trénovať</p>
                            <h2 className="text-5xl font-black uppercase mb-10">Kontakt</h2>
                            <div className="space-y-6">
                                {[
                                    { label: "Adresa", value: "Bratislava — zverejníme čoskoro" },
                                    { label: "Otváracie hodiny", value: "Po – Pi: 06:30 – 21:00 / So: 09:00 – 14:00" },
                                    { label: "Email", value: "chaosbratislavamma@gmail.com" },
                                    { label: "Instagram", value: "@chaosbratislava" },
                                ].map((item) => (
                                    <div key={item.label} className="border-b border-zinc-800 pb-5">
                                        <p className="text-xs tracking-widest text-zinc-600 uppercase font-bold mb-1">{item.label}</p>
                                        <p className="text-white font-semibold">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#0d0d0d] p-8">
                            <h3 className="text-2xl font-black uppercase mb-2">Prvý tréning zadarmo</h3>
                            <p className="text-zinc-500 text-sm mb-8">
                                Príď sa pozrieť, vyskúšaj tréning a rozhodni sa bez záväzkov.
                                Napíš nám — ozveme sa do 24 hodín.
                            </p>
                            <a
                                href="mailto:chaosbratislavamma@gmail.com?subject=Prvý tréning zadarmo"
                                className="block w-full text-center py-4 bg-red-600 text-white text-xs font-black tracking-widest uppercase hover:bg-red-500 transition-colors mb-3"
                            >
                                Napísať e-mail
                            </a>
                            <a
                                href="https://instagram.com/chaosbratislava"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 border border-zinc-700 text-zinc-400 text-xs font-bold tracking-widest uppercase hover:border-zinc-500 hover:text-white transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-600 rotate-45" />
                        <span className="font-black text-sm tracking-widest uppercase">Chaos MMA Bratislava</span>
                    </div>
                    <p className="text-zinc-700 text-xs">© 2026 Chaos MMA Bratislava</p>
                    <p className="text-zinc-800 text-xs">
                        Web vytvoril <span className="text-zinc-600">Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
