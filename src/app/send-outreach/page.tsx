"use client";

const CHAOS_BODY = `Dobrý deň,

pred pár mesiacmi som vám písal ohľadom webovej stránky pre Chaos MMA. Vtedy som spomínal, že pripravím demo — a tu je:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/chaos-bratislava

Navrhol som ho špeciálne pre váš gym — prehľad disciplín (MMA, kickbox, thajský box, wrestling), týždenný rozvrh, info o gymu, prvý tréning zadarmo ako CTA a kontaktná sekcia. Dizajn je v modro-čiernych farbách vášho klubu.

Čo dostanete za 400 €:
• Živá webová stránka do 7 dní od potvrdenia
• Plne mobilná verzia
• Rozvrh, disciplíny, kontakt — všetko čo je v deme + vaše úpravy
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

const PATRISHA_DM = `Ahoj Patrisha, volám sa Max — som webový vývojár z Bratislavy.

Sledujem tvoju prácu — 29K followerov a žiadny vlastný web je škoda. Postavil som pre teba demo so anime estetikou, pink/purple, manga panel galéria:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/patrisha-tattoo

Galéria, štýly, booking cez Instagram — všetko na jednom mieste. Za 400 € hotové do týždňa.

Daj vedieť 🌸`;

const MARIIA_BODY = `Dobrý deň Mariia,

volám sa Max — som webový vývojár z Bratislavy. Sledujem vašu prácu na Instagrame — 14 000 sledovateľov a žiadny vlastný web je podľa mňa veľká škoda, lebo ľudia, ktorí si vás nájdu, nemajú kde získať viac info ani poslať dopyt.

Postavil som pre vás demo — ako by mohol web vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/mariia-photo

Dizajn je elegantný, minimalistický, so zameraním na fotografie — portfólio, sekcia o vás, cenník a kontaktná sekcia.

Čo dostanete za 400 €:
• Živá webová stránka do 7 dní od potvrdenia
• Plne mobilná, rýchla, optimalizovaná pre SEO
• Portfólio, cenník, kontakt — všetko čo je v deme + vaše úpravy
• Hosting prvý rok zadarmo
• 1 mesiac bezplatných úprav po spustení

400 € fixná cena, možnosť rozložiť: 200 € pri zahájení, 200 € pri odovzdaní.

Ak vás demo zaujalo, stačí odpovedať.

S pozdravom,
Maxim Šinkovič
+421 904 340 353`;

const VLADIMIR_BODY = `Dobrý deň Vladimír,

volám sa Max — som webový vývojár z Bratislavy. Videl som váš Instagram @vladimir_holota — 7 000 sledovateľov, 2x majster sveta, a žiadny vlastný web. To je škoda, lebo ľudia, ktorí vás hľadajú online, nemajú kde poslať dopyt ani zistiť ceny.

Postavil som pre vás demo — ako by mohol web vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/vladimir-holota

Čo dostanete za 400 €:
• Živá webová stránka do 7 dní od potvrdenia
• Plne mobilná verzia
• Služby, o vás, kontakt + možnosť rezervácie — všetko čo je v deme + vaše úpravy
• Základné SEO (aby vás ľudia našli pri hľadaní "personal trainer Bratislava")
• Hosting prvý rok zadarmo
• 1 mesiac bezplatných úprav po spustení

400 € fixná cena, možnosť rozložiť: 200 € pri zahájení, 200 € pri odovzdaní.

Ak vás demo zaujalo, stačí odpísať.

S pozdravom,
Maxim Šinkovič
+421 904 340 353`;

const NEWSCHOOL_DM = `Ahoj, volám sa Max — som webový vývojár z Bratislavy.

Videl som váš Instagram @newschoolsk — máte aktívne štúdio, krásne obsah, ale web newschoolsk.vercel.app je prázdny. Postavil som demo — ako by mohol skutočný web vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/newschool-dance

Rozvrh hodín, štýly, kontakt + prihlásenie — všetko na jednom mieste. Za 400 € hotové do týždňa.

Napíšte ak vás to zaujalo 💛`;

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
                        3 odoslané · 4 nové na odoslanie — <strong className="text-white">potenciál 2 800 €</strong>
                    </p>
                </div>

                <div className="space-y-4 mb-8">
                    {/* Chaos MMA — email */}
                    <div className="border border-[#1456FF]/30 rounded-2xl p-5 bg-zinc-900">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">1. Chaos MMA</h2>
                                <p className="text-zinc-500 text-sm">Follow-up — demo v modro-čiernych farbách</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-500 text-xs mb-1">→ chaosbratislavamma@gmail.com</p>
                        <p className="text-green-500 text-xs font-bold mb-4">✓ Odoslané</p>
                        <a
                            href={`mailto:chaosbratislavamma@gmail.com?subject=${encode("Demo webu pre Chaos MMA — pripravené")}&body=${encode(CHAOS_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400"
                        >
                            Otvoriť znova v Gmail →
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
                        <p className="text-zinc-500 text-xs mb-1">→ info@onakotattoo.com</p>
                        <p className="text-green-500 text-xs font-bold mb-4">✓ Odoslané</p>
                        <a
                            href={`mailto:info@onakotattoo.com?subject=${encode("Hotový web pre Onakô Tattoo — demo pripravené")}&body=${encode(ONAKO_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400"
                        >
                            Otvoriť znova v Gmail →
                        </a>
                    </div>

                    {/* Patrisha — Instagram DM */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(255,27,141,0.3)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">3. Patrisha Ink</h2>
                                <p className="text-zinc-500 text-sm">29K Instagram, anime tattoo artist, žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-500 text-xs mb-1">→ @patrisha_ink na Instagrame</p>
                        <p className="text-green-500 text-xs font-bold mb-4">✓ DM odoslaný</p>
                        <a href="https://instagram.com/patrisha_ink" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Otvoriť Instagram →
                        </a>
                    </div>

                    {/* Karin kd_makeupartist — email (draft v Gmail) */}
                    <div className="border border-zinc-700/40 rounded-2xl p-5 bg-zinc-900">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">4. Karin Križanovičová</h2>
                                <p className="text-zinc-500 text-sm">5.8K Instagram, makeup artist, žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-4">→ kd.krizanovicova@gmail.com · Draft v Gmail čaká na odoslanie</p>
                        <a href={`mailto:kd.krizanovicova@gmail.com?subject=${encodeURIComponent("Hotový web pre makeup artistku — demo pripravené")}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-white hover:bg-zinc-100 text-black">
                            Otvoriť Gmail draft →
                        </a>
                    </div>

                    {/* Mariia Yurchenko — email */}
                    <div className="border border-zinc-600/30 rounded-2xl p-5 bg-zinc-900">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">5. Mariia Yurchenko</h2>
                                <p className="text-zinc-500 text-sm">14K Instagram, fotografka, žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-4">→ mariiayurchenko1499@gmail.com</p>
                        <a href={`mailto:mariiayurchenko1499@gmail.com?subject=${encode("Demo webu pre fotografku — Mariia Yurchenko")}&body=${encode(MARIIA_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-white hover:bg-zinc-100 text-black mb-3">
                            Otvoriť v Gmail →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/mariia-photo" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* Vladimír Holota — email */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(255,107,0,0.3)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">6. Vladimír Holota</h2>
                                <p className="text-zinc-500 text-sm">7K Instagram, 2× IFBB World Champion, žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-4">→ vladimir.holota@gmail.com</p>
                        <a href={`mailto:vladimir.holota@gmail.com?subject=${encode("Demo webu pre Vladimíra Holotu — personal trainer")}&body=${encode(VLADIMIR_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-white mb-3 hover:opacity-90"
                            style={{ background: "#FF6B00" }}>
                            Otvoriť v Gmail →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/vladimir-holota" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* Newschool Dance — Instagram DM */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(255,214,0,0.25)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">7. Newschool Dance Studio</h2>
                                <p className="text-zinc-500 text-sm">1.8K Instagram, prázdny Vercel web, WhatsApp dostupný</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <p className="text-zinc-600 text-xs mb-3">→ @newschoolsk na Instagrame · WhatsApp +421 908 790 216</p>
                        <a href="https://wa.me/421908790216" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-black mb-3 hover:opacity-90"
                            style={{ background: "#FFD600" }}>
                            Otvoriť WhatsApp →
                        </a>
                        <div className="bg-zinc-800 rounded-xl p-3 mb-2">
                            <p className="text-zinc-400 text-xs mb-2 font-bold uppercase tracking-wider">Skopíruj a pošli ako DM / WhatsApp:</p>
                            <p className="text-zinc-300 text-xs leading-relaxed whitespace-pre-line">{NEWSCHOOL_DM}</p>
                        </div>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/newschool-dance" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                </div>

                <div className="text-center p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-zinc-400 text-sm">
                        Celkový potenciál:{" "}
                        <span className="text-white font-black text-lg">2 800 €</span>
                        <span className="text-zinc-600 ml-2">= 7 × 400 €</span>
                    </p>
                    <p className="text-green-600 text-xs mt-1 font-bold">3 odoslaných · 4 čakajú na odoslanie</p>
                </div>
            </div>
        </div>
    );
}
