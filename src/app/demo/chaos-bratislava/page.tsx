export const metadata = {
    title: "Chaos MMA Bratislava – Tréning bojových umení",
    description: "Chaos MMA Bratislava – tréningy MMA, kickboxu, wrestlingu a thajského boxu pre všetky úrovne.",
};

export default function ChaosBratislavaDemo() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white font-sans">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-xl font-black tracking-tight">
                        <span className="text-red-500">CHAOS</span>{" "}
                        <span className="text-zinc-400 font-normal text-sm">MMA</span>
                    </span>
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-400">
                        <a href="#treningy" className="hover:text-white transition">Tréningy</a>
                        <a href="#rozvrh" className="hover:text-white transition">Rozvrh</a>
                        <a href="#o-nas" className="hover:text-white transition">O nás</a>
                        <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
                    </div>
                    <a
                        href="#kontakt"
                        className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-500 transition"
                    >
                        Skúsiť zadarmo
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 70% 50%, #DC2626 0%, transparent 50%),
                                         radial-gradient(circle at 10% 80%, #7C3AED 0%, transparent 40%)`,
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgb(9,9,11))]" />
                <div className="relative max-w-6xl mx-auto px-6 py-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        Bratislava • otvorený gym
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
                        PREBUĎ<br />
                        <span className="text-red-500">BOJOVNÍKA</span><br />
                        V SEBE.
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-lg mb-10">
                        MMA, kickbox, thajský box a wrestling pre všetky úrovne.
                        Tréningy vedené skúsenými zápasníkmi v srdci Bratislavy.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#kontakt"
                            className="px-8 py-4 bg-red-600 text-white font-black text-lg rounded hover:bg-red-500 transition"
                        >
                            1. tréning zadarmo
                        </a>
                        <a
                            href="#rozvrh"
                            className="px-8 py-4 border border-zinc-700 text-white font-semibold text-lg rounded hover:border-zinc-500 transition"
                        >
                            Zobraziť rozvrh
                        </a>
                    </div>
                </div>
            </section>

            {/* Disciplines */}
            <section id="treningy" className="py-24 bg-black">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-black mb-3">TRÉNINGY</h2>
                    <p className="text-zinc-500 mb-12 text-lg">Pre každého — od začiatočníkov po súťažiacich</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                name: "MMA",
                                icon: "🥊",
                                desc: "Kompletný systém boja v stoji aj na zemi. Integrácia všetkých bojových štýlov.",
                                color: "border-red-500/40 hover:border-red-500",
                                badge: "Populárne",
                            },
                            {
                                name: "Kickbox",
                                icon: "🦵",
                                desc: "Technika úderov rukami a nohami. Ideálne pre kondíciu aj sebaobranu.",
                                color: "border-orange-500/40 hover:border-orange-500",
                                badge: null,
                            },
                            {
                                name: "Thajský box",
                                icon: "⚡",
                                desc: "Muay Thai — osem zbraní tela. Lakte, kolená, kopance a údery.",
                                color: "border-yellow-500/40 hover:border-yellow-500",
                                badge: null,
                            },
                            {
                                name: "Wrestling",
                                icon: "🤼",
                                desc: "Technika hodov, striahania a kontroly na zemi. Základ každého MMA bojovníka.",
                                color: "border-purple-500/40 hover:border-purple-500",
                                badge: null,
                            },
                        ].map((d) => (
                            <div
                                key={d.name}
                                className={`p-6 bg-zinc-900 border rounded-xl transition relative ${d.color}`}
                            >
                                {d.badge && (
                                    <span className="absolute top-4 right-4 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                                        {d.badge}
                                    </span>
                                )}
                                <div className="text-4xl mb-4">{d.icon}</div>
                                <h3 className="font-black text-xl mb-2">{d.name}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section id="rozvrh" className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-black mb-3">TÝŽDENNÝ ROZVRH</h2>
                    <p className="text-zinc-500 mb-12 text-lg">Nájdi si tréning, ktorý ti vyhovuje</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-800">
                                    <th className="text-left py-3 pr-6 text-zinc-500 font-semibold">Čas</th>
                                    {["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok"].map((d) => (
                                        <th key={d} className="text-left py-3 px-3 text-zinc-500 font-semibold">
                                            {d}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        time: "07:00",
                                        mon: { name: "Kickbox", color: "text-orange-400" },
                                        tue: null,
                                        wed: { name: "Kickbox", color: "text-orange-400" },
                                        thu: null,
                                        fri: { name: "MMA", color: "text-red-400" },
                                    },
                                    {
                                        time: "17:00",
                                        mon: { name: "MMA", color: "text-red-400" },
                                        tue: { name: "Thajský box", color: "text-yellow-400" },
                                        wed: { name: "Wrestling", color: "text-purple-400" },
                                        thu: { name: "MMA", color: "text-red-400" },
                                        fri: { name: "Kickbox", color: "text-orange-400" },
                                    },
                                    {
                                        time: "19:00",
                                        mon: { name: "Wrestling", color: "text-purple-400" },
                                        tue: { name: "MMA", color: "text-red-400" },
                                        wed: { name: "Kickbox", color: "text-orange-400" },
                                        thu: { name: "Thajský box", color: "text-yellow-400" },
                                        fri: null,
                                    },
                                ].map((row) => (
                                    <tr key={row.time} className="border-b border-zinc-900">
                                        <td className="py-4 pr-6 font-mono text-zinc-400">{row.time}</td>
                                        {[row.mon, row.tue, row.wed, row.thu, row.fri].map((cell, i) => (
                                            <td key={i} className="py-4 px-3">
                                                {cell ? (
                                                    <span className={`font-semibold ${cell.color}`}>
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

            {/* About + Location */}
            <section id="o-nas" className="py-24 bg-black">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-black mb-6">O GYMU</h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                Chaos MMA je komunita bojovníkov, ktorá víta každého — bez ohľadu
                                na skúsenosti. U nás tréninguje začiatočníci aj skúsení zápasníci
                                bok po boku.
                            </p>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Naši tréneri majú roky skúseností z medzinárodných súťaží a sú
                                pripravení doviesť ťa na tvoju osobnú úroveň.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                                <div className="flex gap-4 items-start">
                                    <span className="text-red-500 text-2xl">📍</span>
                                    <div>
                                        <p className="font-bold text-lg">Bratislava</p>
                                        <p className="text-zinc-500">Adresu zverejníme čoskoro</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                                <div className="flex gap-4 items-start">
                                    <span className="text-red-500 text-2xl">🕐</span>
                                    <div>
                                        <p className="font-bold text-lg mb-1">Gym je otvorený</p>
                                        <p className="text-zinc-500">Po – Pi: 06:30 – 21:00</p>
                                        <p className="text-zinc-500">So: 09:00 – 14:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                                <div className="flex gap-4 items-start">
                                    <span className="text-red-500 text-2xl">💳</span>
                                    <div>
                                        <p className="font-bold text-lg mb-1">Členstvo</p>
                                        <p className="text-zinc-500">Mesačné: od 40€ / Single: 8€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="kontakt" className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-black mb-4">
                        PRVÝ TRÉNING <span className="text-red-500">ZADARMO</span>
                    </h2>
                    <p className="text-zinc-400 text-xl mb-10">
                        Príď sa pozrieť, vyskúšaj tréning a rozhodni sa bez záväzkov.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:chaosbratislavamma@gmail.com"
                            className="px-8 py-4 bg-red-600 text-white font-black text-lg rounded hover:bg-red-500 transition"
                        >
                            Napísať e-mail
                        </a>
                        <a
                            href="https://instagram.com/chaosbratislava"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-zinc-700 font-semibold text-lg rounded hover:border-zinc-500 transition"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-zinc-900 bg-black">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-black">
                        <span className="text-red-500">CHAOS</span> MMA Bratislava
                    </span>
                    <p className="text-zinc-600 text-sm">© 2026 Chaos MMA Bratislava</p>
                    <p className="text-zinc-700 text-xs">
                        Web vytvoril <span className="text-zinc-500">Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
