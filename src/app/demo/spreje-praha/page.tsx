export const metadata = {
    title: "SprejePraha – Sprej, marker, barva na graffiti",
    description: "Praha's urban art supply store. Spreje, markery, caps a příslušenství pro graffiti a street art.",
};

export default function SprejePrahaDemo() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-xl font-black tracking-tight">
                        <span className="text-yellow-400">SPREJE</span>PRAHA
                    </span>
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-400">
                        <a href="#produkty" className="hover:text-white transition">Produkty</a>
                        <a href="#znacky" className="hover:text-white transition">Značky</a>
                        <a href="#prodejna" className="hover:text-white transition">Prodejna</a>
                        <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
                    </div>
                    <a
                        href="#kontakt"
                        className="px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded hover:bg-yellow-300 transition"
                    >
                        Kontaktuj nás
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, #FFE600 0%, transparent 50%),
                                         radial-gradient(circle at 80% 20%, #FF3B00 0%, transparent 40%)`,
                    }}
                />
                <div className="relative max-w-6xl mx-auto px-6 py-24">
                    <div className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded text-yellow-400 text-xs font-bold tracking-widest uppercase mb-6">
                        Praha • Radlická 43
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
                        TVOJE<br />
                        <span className="text-yellow-400">BARVY.</span><br />
                        TVOJE<br />
                        ULICE.
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-lg mb-10">
                        Největší výběr sprejů, markerů a caps pro graffiti a street art v Praze.
                        Vše pro tvoji tvorbu – od začátečníků po profíky.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#produkty"
                            className="px-8 py-4 bg-yellow-400 text-black font-black text-lg rounded hover:bg-yellow-300 transition"
                        >
                            Prohlédnout produkty
                        </a>
                        <a
                            href="#prodejna"
                            className="px-8 py-4 border border-zinc-700 text-white font-semibold text-lg rounded hover:border-zinc-500 transition"
                        >
                            Kde nás najdeš
                        </a>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section id="produkty" className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-black mb-3">CO NABÍZÍME</h2>
                    <p className="text-zinc-500 mb-12 text-lg">Vše co potřebuješ k tvorbě</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: "🎨", name: "Spreje", desc: "Montana, Molotow, MTN, Loop" },
                            { icon: "✏️", name: "Markery", desc: "Chisel, bullet, mop markery" },
                            { icon: "🔘", name: "Caps", desc: "Skinny, fat, outline, NY thin" },
                            { icon: "📚", name: "Sketchbooky", desc: "Blackbooks, papír a podklady" },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-yellow-400/40 transition group"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="font-black text-lg mb-1 group-hover:text-yellow-400 transition">
                                    {item.name}
                                </h3>
                                <p className="text-zinc-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands */}
            <section id="znacky" className="py-24 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-black mb-3">ZNAČKY</h2>
                    <p className="text-zinc-500 mb-12 text-lg">Pracujeme s tím nejlepším</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: "MONTANA", color: "text-red-400" },
                            { name: "MOLOTOW", color: "text-blue-400" },
                            { name: "MTN 94", color: "text-green-400" },
                            { name: "LOOP", color: "text-yellow-400" },
                            { name: "IRONLAK", color: "text-orange-400" },
                        ].map((brand) => (
                            <div
                                key={brand.name}
                                className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl text-center hover:border-zinc-600 transition"
                            >
                                <span className={`font-black text-sm tracking-widest ${brand.color}`}>
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Store info */}
            <section id="prodejna" className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-4xl font-black mb-6">KDE NÁS NAJDEŠ</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <span className="text-yellow-400 text-xl mt-1">📍</span>
                                    <div>
                                        <p className="font-bold text-lg">Radlická 902/43</p>
                                        <p className="text-zinc-500">150 00 Praha 5</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-yellow-400 text-xl mt-1">🕐</span>
                                    <div>
                                        <p className="font-bold text-lg mb-2">Otevírací doba</p>
                                        <div className="space-y-1 text-zinc-400">
                                            <div className="flex justify-between gap-8">
                                                <span>Po – Pá</span>
                                                <span className="text-white font-semibold">10:00 – 18:00</span>
                                            </div>
                                            <div className="flex justify-between gap-8">
                                                <span>Sobota</span>
                                                <span className="text-white font-semibold">10:00 – 14:00</span>
                                            </div>
                                            <div className="flex justify-between gap-8">
                                                <span>Neděle</span>
                                                <span className="text-zinc-600">Zavřeno</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-yellow-400 text-xl mt-1">📞</span>
                                    <div>
                                        <p className="font-bold text-lg">+420 777 088 184</p>
                                        <p className="text-zinc-500">sprejepraha@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                            <h3 className="font-black text-2xl mb-2">
                                Sleduj nás na <span className="text-yellow-400">Instagramu</span>
                            </h3>
                            <p className="text-zinc-500 mb-6">
                                Novinky, restocky a inspo přímo od naší komunity.
                            </p>
                            <a
                                href="https://instagram.com/sprejepraha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-bold hover:opacity-90 transition w-fit"
                            >
                                <span className="text-xl">📸</span>
                                @sprejepraha
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="kontakt" className="py-24 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-black mb-4">MÁŠ DOTAZ?</h2>
                    <p className="text-zinc-500 text-lg mb-10">
                        Napiš nám nebo zavolej — rádi poradíme s výběrem.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:sprejepraha@gmail.com"
                            className="px-8 py-4 bg-yellow-400 text-black font-black rounded hover:bg-yellow-300 transition"
                        >
                            Napsat e-mail
                        </a>
                        <a
                            href="tel:+420777088184"
                            className="px-8 py-4 border border-zinc-700 font-semibold rounded hover:border-zinc-500 transition"
                        >
                            +420 777 088 184
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-zinc-900 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-black">
                        <span className="text-yellow-400">SPREJE</span>PRAHA
                    </span>
                    <p className="text-zinc-600 text-sm">
                        © 2026 SprejePraha.cz — Radlická 902/43, Praha 5
                    </p>
                    <p className="text-zinc-700 text-xs">
                        Web vytvořil <span className="text-zinc-500">Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
