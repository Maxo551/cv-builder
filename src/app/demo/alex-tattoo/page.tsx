export const metadata = {
    title: "Alex Bykovskiy – Tattoo Artist Bratislava",
    description: "Alex Bykovskiy — trashpolka, realism & newschool tattoo artist based in Bratislava. Booking via Instagram.",
};

export default function AlexTattooDemo() {
    return (
        <div className="min-h-screen text-white" style={{ background: "#080808", fontFamily: "'Arial Black', 'Arial', sans-serif" }}>

            {/* Top strip */}
            <div style={{ background: "#E31A1A", height: "3px", width: "100%" }} />

            {/* Nav */}
            <nav className="sticky top-0 z-50" style={{ background: "#080808", borderBottom: "1px solid #1a1a1a" }}>
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span
                            className="font-black uppercase tracking-tight"
                            style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
                        >
                            ALEX
                        </span>
                        <span style={{ color: "#E31A1A", fontSize: "18px", fontWeight: 900 }}>✕</span>
                        <span
                            className="font-black uppercase"
                            style={{ fontSize: "18px", letterSpacing: "-0.02em", color: "#888" }}
                        >
                            BYKOVSKIY
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8" style={{ fontSize: "11px", letterSpacing: "0.25em" }}>
                        <a href="#portfolio" className="text-zinc-500 hover:text-white transition-colors uppercase">Portfolio</a>
                        <a href="#styly" className="text-zinc-500 hover:text-white transition-colors uppercase">Štýly</a>
                        <a href="#booking" className="text-zinc-500 hover:text-white transition-colors uppercase">Booking</a>
                    </div>
                    <a
                        href="#booking"
                        className="uppercase font-black text-white transition-colors"
                        style={{ background: "#E31A1A", padding: "8px 20px", fontSize: "11px", letterSpacing: "0.2em" }}
                    >
                        Book now
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ minHeight: "95vh", position: "relative", overflow: "hidden" }}>
                {/* Red slash diagonal */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "100%",
                    background: "#0f0f0f",
                    clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
                    zIndex: 0,
                }} />
                <div style={{
                    position: "absolute",
                    top: "20%",
                    right: "5%",
                    width: "35%",
                    height: "60%",
                    border: "1px solid #E31A1A",
                    opacity: 0.15,
                    zIndex: 0,
                }} />
                {/* Chaotic red lines */}
                <div style={{
                    position: "absolute",
                    left: "48%",
                    top: 0,
                    width: "3px",
                    height: "100%",
                    background: "#E31A1A",
                    transform: "skewX(-8deg)",
                    zIndex: 1,
                }} />
                <div style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    width: "1px",
                    height: "40%",
                    background: "#E31A1A",
                    opacity: 0.4,
                    zIndex: 1,
                }} />

                <div className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: "95vh", zIndex: 2 }}>
                    <div style={{ maxWidth: "580px" }}>
                        {/* Tag */}
                        <div className="flex items-center gap-3 mb-8">
                            <div style={{ width: "32px", height: "2px", background: "#E31A1A" }} />
                            <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#E31A1A", fontWeight: 900 }}>
                                BRATISLAVA · SLOVAKIA
                            </span>
                        </div>

                        {/* Main headline */}
                        <h1
                            className="uppercase leading-none mb-2"
                            style={{ fontSize: "clamp(5rem, 15vw, 11rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.85 }}
                        >
                            TRASH
                        </h1>
                        <h1
                            className="uppercase leading-none mb-8"
                            style={{ fontSize: "clamp(5rem, 15vw, 11rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.85, color: "#E31A1A", WebkitTextStroke: "0px" }}
                        >
                            POLKA.
                        </h1>

                        <p className="mb-10" style={{ color: "#666", lineHeight: 1.6, fontSize: "15px", fontFamily: "Arial, sans-serif", fontWeight: 400, maxWidth: "400px" }}>
                            Realism, newschool & trashpolka. Každé tetovanie je unikátne
                            umelecké dielo. Tvorím v Bratislave, cestujem do celej Európy.
                        </p>

                        <div className="flex items-center gap-6 flex-wrap">
                            <a
                                href="#booking"
                                className="uppercase font-black text-white"
                                style={{ background: "#E31A1A", padding: "14px 32px", fontSize: "12px", letterSpacing: "0.25em" }}
                            >
                                Rezervovať termín
                            </a>
                            <a
                                href="#portfolio"
                                className="uppercase"
                                style={{ color: "#666", fontSize: "11px", letterSpacing: "0.3em", fontWeight: 700 }}
                            >
                                Pozrieť práce →
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="flex gap-12 mt-16 pt-8" style={{ borderTop: "1px solid #1a1a1a" }}>
                            {[
                                { n: "25K", label: "Followers" },
                                { n: "10+", label: "Rokov skúseností" },
                                { n: "EU", label: "Travels" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="font-black" style={{ fontSize: "22px", color: "#E31A1A", letterSpacing: "-0.02em" }}>{s.n}</p>
                                    <p style={{ fontSize: "10px", color: "#555", letterSpacing: "0.3em", fontFamily: "Arial, sans-serif" }}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio grid */}
            <section id="portfolio" style={{ borderTop: "1px solid #1a1a1a", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#E31A1A", fontWeight: 900 }}>— PORTFOLIO</span>
                            <h2 className="font-black uppercase mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                                Vybrané práce
                            </h2>
                        </div>
                        <a
                            href="https://instagram.com/alexbykovskiy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "11px", color: "#555", letterSpacing: "0.3em", fontFamily: "Arial, sans-serif" }}
                            className="hover:text-white transition-colors uppercase"
                        >
                            @alexbykovskiy →
                        </a>
                    </div>

                    {/* Chaotic asymmetric grid */}
                    <div className="grid grid-cols-12 gap-2">
                        {/* Large piece */}
                        <div
                            className="col-span-7 flex items-end p-4 relative"
                            style={{ background: "#111", minHeight: "420px" }}
                        >
                            <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.4em", color: "#E31A1A", fontWeight: 900 }}>
                                TRASHPOLKA
                            </div>
                            <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "40px", height: "40px", border: "1px solid #E31A1A", opacity: 0.3 }} />
                            <span style={{ fontSize: "9px", letterSpacing: "0.4em", color: "#333", fontFamily: "Arial, sans-serif" }}>PLATE I</span>
                        </div>
                        {/* Stack right */}
                        <div className="col-span-5 flex flex-col gap-2">
                            <div className="flex-1 relative" style={{ background: "#111", minHeight: "200px", padding: "12px" }}>
                                <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.4em", color: "#555" }}>REALISM</div>
                                <span style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333", fontFamily: "Arial, sans-serif" }}>PLATE II</span>
                            </div>
                            <div className="flex-1 relative" style={{ background: "#0f0f0f", border: "1px solid #1a1a1a", minHeight: "200px", padding: "12px" }}>
                                <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "9px", letterSpacing: "0.4em", color: "#555" }}>NEWSCHOOL</div>
                                <span style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333", fontFamily: "Arial, sans-serif" }}>PLATE III</span>
                            </div>
                        </div>
                        {/* Bottom row */}
                        {[4, 5, 6].map((n) => (
                            <div
                                key={n}
                                className="col-span-4 relative"
                                style={{ background: "#111", minHeight: "220px", padding: "12px" }}
                            >
                                <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "30px", background: "#E31A1A" }} />
                                <span style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "9px", letterSpacing: "0.3em", color: "#333", fontFamily: "Arial, sans-serif" }}>PLATE {`0${n}`}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Styles */}
            <section id="styly" style={{ borderTop: "1px solid #1a1a1a", padding: "80px 0", background: "#0a0a0a" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#E31A1A", fontWeight: 900 }}>— ŠPECIALITY</span>
                    <h2 className="font-black uppercase mt-2 mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                        Štýly
                    </h2>
                    <div className="grid md:grid-cols-3 gap-px" style={{ background: "#1a1a1a" }}>
                        {[
                            {
                                name: "TRASHPOLKA",
                                desc: "Čierna, červená, chaos. Kombinácia realizmu s grafickými prvkami — každý kúsok je osobný manifest.",
                                tag: "SIGNATURE",
                            },
                            {
                                name: "REALISM",
                                desc: "Fotorealistické portréty, príroda, architektúra. Detaily, ktoré zastavujú pohľad.",
                                tag: "DETAIL",
                            },
                            {
                                name: "NEWSCHOOL",
                                desc: "Odvážne farby, exagerované tvary, ilustratívny charakter. Pre tých, čo chcú vyčnievať.",
                                tag: "BOLD",
                            },
                        ].map((s) => (
                            <div key={s.name} className="p-8 hover:bg-[#111] transition-colors" style={{ background: "#080808" }}>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-black uppercase" style={{ fontSize: "20px", letterSpacing: "-0.01em" }}>{s.name}</h3>
                                    <span style={{ fontSize: "9px", letterSpacing: "0.4em", color: "#E31A1A", fontWeight: 900 }}>{s.tag}</span>
                                </div>
                                <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.6, fontFamily: "Arial, sans-serif", fontWeight: 400 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel schedule */}
            <section style={{ borderTop: "1px solid #1a1a1a", padding: "80px 0" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#E31A1A", fontWeight: 900 }}>— CESTOVNÝ PLÁN</span>
                    <h2 className="font-black uppercase mt-2 mb-12" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}>
                        Guest spots
                    </h2>
                    <div className="grid md:grid-cols-4 gap-px" style={{ background: "#1a1a1a" }}>
                        {[
                            { city: "Bratislava", country: "SK", status: "Resident", color: "#E31A1A" },
                            { city: "Vienna", country: "AT", status: "Pravidelne", color: "#555" },
                            { city: "Prague", country: "CZ", status: "Pravidelne", color: "#555" },
                            { city: "Goa", country: "IN", status: "Sezónne", color: "#555" },
                        ].map((loc) => (
                            <div key={loc.city} className="p-6 hover:bg-[#111] transition-colors" style={{ background: "#080808" }}>
                                <p className="font-black uppercase mb-1" style={{ fontSize: "18px", letterSpacing: "-0.01em" }}>{loc.city}</p>
                                <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: loc.color, fontWeight: 900 }}>{loc.status}</p>
                                <p style={{ fontSize: "11px", color: "#333", marginTop: "4px", fontFamily: "Arial, sans-serif" }}>{loc.country}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section id="booking" style={{ borderTop: "3px solid #E31A1A", padding: "80px 0", background: "#0a0a0a" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-start">
                        <div>
                            <span style={{ fontSize: "10px", letterSpacing: "0.5em", color: "#E31A1A", fontWeight: 900 }}>— REZERVÁCIA</span>
                            <h2 className="font-black uppercase mt-2 mb-8" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 0.9 }}>
                                Poďme<br />
                                <span style={{ color: "#E31A1A" }}>tvoriť.</span>
                            </h2>
                            <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.7, fontFamily: "Arial, sans-serif", maxWidth: "380px" }}>
                                Napíš mi na Instagram — porozprávame sa o tvojej predstave,
                                dohodnem termín a navrhnem unikátny dizajn.
                            </p>
                            <div className="mt-10 space-y-4">
                                {[
                                    { label: "Studio", value: "Body Gallery, Bratislava" },
                                    { label: "Booking", value: "Instagram DM only" },
                                    { label: "Response", value: "Do 48 hodín" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-8 items-baseline pb-4" style={{ borderBottom: "1px solid #1a1a1a" }}>
                                        <span style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#333", width: "80px", flexShrink: 0, fontWeight: 700 }}>
                                            {item.label.toUpperCase()}
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#999", fontFamily: "Arial, sans-serif" }}>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <a
                                href="https://instagram.com/alexbykovskiy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center font-black uppercase text-white"
                                style={{ background: "#E31A1A", padding: "20px", fontSize: "13px", letterSpacing: "0.3em" }}
                            >
                                DM na Instagram @alexbykovskiy →
                            </a>
                            <p style={{ fontSize: "11px", color: "#333", textAlign: "center", marginTop: "12px", fontFamily: "Arial, sans-serif", letterSpacing: "0.2em" }}>
                                BOOKING ONLY VIA INSTAGRAM DIRECT MESSAGE
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: "1px solid #1a1a1a", padding: "32px 0" }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="font-black uppercase" style={{ letterSpacing: "0.15em", fontSize: "13px" }}>
                        ALEX BYKOVSKIY
                        <span style={{ color: "#E31A1A", margin: "0 8px" }}>✕</span>
                        TATTOO
                    </span>
                    <p style={{ fontSize: "11px", color: "#333", fontFamily: "Arial, sans-serif" }}>© 2026 · Bratislava, Slovakia</p>
                    <p style={{ fontSize: "11px", color: "#222", fontFamily: "Arial, sans-serif" }}>
                        Web vytvoril <span style={{ color: "#444" }}>Maxim Šinkovič</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
