"use client";

const CHAOS_BODY = `Dobrý deň,

pred pár mesiacmi som vám písal ohľadom webovej stránky pre Chaos MMA. Vtedy som spomínal, že pripravím demo — a tu je:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/chaos-bratislava

Navrhol som ho špeciálne pre bojový gym — prehľad disciplín (MMA, kickbox, thajský box, wrestling), týždenný rozvrh, cenník členstva, info o gymu a kontaktná sekcia s CTA prvý tréning zadarmo.

Čo dostanete za 400 €:
• Živá webová stránka do 7 dní od potvrdenia
• Plne mobilná verzia
• Rozvrh, disciplíny, cenník, kontakt — všetko čo je v deme + vaše úpravy
• Základné SEO (aby vás ľudia našli pri hľadaní MMA Bratislava)
• Hosting prvý rok zadarmo
• 1 mesiac bezplatných úprav po spustení

400 € fixná cena, možnosť rozložiť: 200 € pri zahájení, 200 € pri odovzdaní.

Ak vás demo zaujalo, stačí odpísať.

S pozdravom,
Maxim Šinkovič
+421 904 340 353`;

const ONAKO_BODY = `Dobrý deň,

volám sa Max — som webový vývojár z Bratislavy. Všimol som si, že onakotattoo.com ukazuje "coming soon" a zároveň máte na Instagrame 13 000 sledovateľov, ktorí nemajú kde si nájsť informácie, rezervovať termín ani pozrieť galériu.

Postavil som pre vás demo — ako by mohol web vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/onako-tattoo

Čo dostanete za 400 €:
• Živá webová stránka do 7 dní od potvrdenia
• Plne mobilná, rýchla, optimalizovaná pre SEO
• Galéria prác, profily umelcov, rezervačný formulár
• Prepojenie na Instagram
• Hosting prvý rok zadarmo
• 1 mesiac bezplatných úprav po spustení

400 € fixná cena, možnosť rozložiť na 200 € pri zahájení + 200 € pri odovzdaní.

Ak vás demo zaujalo, stačí odpovedať.

S pozdravom,
Maxim Šinkovič
+421 904 340 353`;

const SOVA_DM = `Ahoj, volám sa Max — som webový vývojár z Bratislavy.

Všimol som si, že nemáš web a všetko riešiš cez Instagram. Postavil som pre teba demo — ako by mohol vyzerať tvoj web:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/sova-tattoo

Galéria, štýly, rezervačný formulár — všetko na jednom mieste. Za 350 € hotové do týždňa.

Ak ťa to zaujalo, daj vedieť 🤙`;

const ALEX_DM = `Ahoj Alex, volám sa Max — som webový vývojár z Bratislavy.

Sledujem tvoju prácu na Instagrame a myslím, že by si si zaslúžil vlastný web — nie len profil. Postavil som pre teba demo v trashpolka štýle, čierno-červené, agresívne:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/alex-tattoo

Portfolio, štýly, guest spot plán, booking — všetko na jednom mieste. Za 400 € hotové do týždňa.

Daj vedieť čo na to myslíš 🤙`;

const PATRISHA_DM = `Ahoj Patrisha, volám sa Max — som webový vývojár z Bratislavy.

Sledujem tvoju prácu — 29K followerov a žiadny vlastný web je škoda. Postavil som pre teba demo so anime estetikou, pink/purple, manga panel galéria:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/patrisha-tattoo

Galéria, štýly, booking cez Instagram — všetko na jednom mieste. Za 400 € hotové do týždňa.

Daj vedieť 🌸`;

function encode(s: string) {
    return encodeURIComponent(s);
}

export default function SendOutreach() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6 flex flex-col items-center justify-center">
            <div className="max-w-lg w-full">
                <div className="text-center mb-10">
                    <p className="text-xs tracking-widest text-zinc-500 uppercase mb-2">Sales outreach</p>
                    <h1 className="text-3xl font-black mb-2">Odošli outreach</h1>
                    <p className="text-zinc-400 text-sm">
                        2 emaily + 3 Instagram DM — <strong className="text-white">potenciál 1 950 €</strong>
                    </p>
                </div>

                <div className="space-y-4 mb-8">
                    {/* Chaos MMA — email */}
                    <div className="border border-red-500/30 rounded-2xl p-5 bg-zinc-900">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">1. Chaos MMA</h2>
                                <p className="text-zinc-500 text-sm">Follow-up po 4 mesiacoch — demo pripravené</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-4">→ chaosbratislavamma@gmail.com</p>
                        <a
                            href={`mailto:chaosbratislavamma@gmail.com?subject=${encode("Demo webu pre Chaos MMA — pripravené")}&body=${encode(CHAOS_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-red-600 hover:bg-red-500 text-white"
                        >
                            Otvoriť v Gmail a odoslať →
                        </a>
                    </div>

                    {/* Onakô Tattoo — email */}
                    <div className="border border-zinc-500/30 rounded-2xl p-5 bg-zinc-900">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">2. Onakô Tattoo</h2>
                                <p className="text-zinc-500 text-sm">13K Instagram, doména &apos;coming soon&apos;</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-4">→ info@onakotattoo.com</p>
                        <a
                            href={`mailto:info@onakotattoo.com?subject=${encode("Hotový web pre Onakô Tattoo — demo pripravené")}&body=${encode(ONAKO_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-white hover:bg-zinc-100 text-black"
                        >
                            Otvoriť v Gmail a odoslať →
                        </a>
                    </div>

                    {/* Sova Tattoo — Instagram DM */}
                    <div className="border border-purple-500/30 rounded-2xl p-5 bg-zinc-900">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">3. Sova Tattoo</h2>
                                <p className="text-zinc-500 text-sm">3.3K Instagram, žiadny web — Instagram DM</p>
                            </div>
                            <span className="text-xl font-black">350 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-3">→ @sova__ink na Instagrame</p>
                        <a
                            href="https://instagram.com/sova__ink"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white mb-3"
                        >
                            Otvoriť Instagram @sova__ink →
                        </a>
                        <div className="bg-zinc-800 rounded-xl p-3">
                            <p className="text-zinc-400 text-xs mb-2 font-bold uppercase tracking-wider">Skopíruj a pošli ako DM:</p>
                            <p className="text-zinc-300 text-xs leading-relaxed whitespace-pre-line">{SOVA_DM}</p>
                        </div>
                    </div>

                    {/* Alex Bykovskiy — Instagram DM */}
                    <div className="border border-red-900/40 rounded-2xl p-5 bg-zinc-900">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">4. Alex Bykovskiy</h2>
                                <p className="text-zinc-500 text-sm">25K Instagram, trashpolka artist, žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-3">→ @alexbykovskiy na Instagrame</p>
                        <a
                            href="https://instagram.com/alexbykovskiy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-white mb-3"
                            style={{ background: "#E31A1A" }}
                        >
                            Otvoriť Instagram @alexbykovskiy →
                        </a>
                        <div className="bg-zinc-800 rounded-xl p-3">
                            <p className="text-zinc-400 text-xs mb-2 font-bold uppercase tracking-wider">Skopíruj a pošli ako DM:</p>
                            <p className="text-zinc-300 text-xs leading-relaxed whitespace-pre-line">{ALEX_DM}</p>
                        </div>
                    </div>

                    {/* Patrisha — Instagram DM */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(255,27,141,0.3)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">5. Patrisha Ink</h2>
                                <p className="text-zinc-500 text-sm">29K Instagram, anime tattoo artist, žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-3">→ @patrisha_ink na Instagrame</p>
                        <a
                            href="https://instagram.com/patrisha_ink"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-white mb-3"
                            style={{ background: "linear-gradient(135deg, #FF1B8D, #A855F7)" }}
                        >
                            Otvoriť Instagram @patrisha_ink →
                        </a>
                        <div className="bg-zinc-800 rounded-xl p-3">
                            <p className="text-zinc-400 text-xs mb-2 font-bold uppercase tracking-wider">Skopíruj a pošli ako DM:</p>
                            <p className="text-zinc-300 text-xs leading-relaxed whitespace-pre-line">{PATRISHA_DM}</p>
                        </div>
                    </div>
                </div>

                <div className="text-center p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-zinc-400 text-sm">
                        Celkový potenciál:{" "}
                        <span className="text-white font-black text-lg">1 950 €</span>
                        <span className="text-zinc-600 ml-2">= 400 + 400 + 350 + 400 + 400</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
