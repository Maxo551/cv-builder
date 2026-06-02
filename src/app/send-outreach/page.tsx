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

píšem vám, lebo som narazil na váš Instagram — 14-tisíc ľudí sleduje vašu prácu a pritom nemáte vlastný web. To ma celkom prekvapilo, lebo s takým portfóliom by ste mali mať miesto, kam ľudí pošlete, keď sa pýtajú na termíny a ceny.

Tak som vám jeden web rovno postavil, nech vidíte, čo myslím:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/mariia-photo

Volám sa Max, robím weby v Bratislave. Toto je hotové demo presne pre vás — portfólio, niečo o vás, cenník a kontakt. Spravím vám to celé do týždňa za 400 €, aj s hostingom na prvý rok a mesiacom úprav navrch.

Ak sa vám to páči, ozvite sa a doladíme detaily.

Max
+421 904 340 353`;

const VLADIMIR_BODY = `Ahoj Vladimír,

natrafil som na tvoj Instagram — dvojnásobný majster sveta a žiadny web, to mi nedalo. Ľudia, čo ťa hľadajú, nemajú kde nájsť ceny ani ti napísať poriadny dopyt, všetko ide cez DM.

Postavil som ti rovno demo, nech vidíš, o čom hovorím:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/vladimir-holota

Volám sa Max, robím weby v Bratislave. Toto je hotová ukážka pre teba — služby, niečo o tebe, kontakt aj rezervácia. Celé to spravím do týždňa za 400 €, aj s hostingom na prvý rok a mesiacom úprav.

Ak ťa to chytí, ozvi sa a doladíme to.

Max
+421 904 340 353`;

const DJSNOWMAN_BODY = `Ahoj Radoslav,

volám sa Max, robím weby v Bratislave. Natrafil som na tvoj Instagram — 500+ svadieb a pritom žiadny web. To ma prekvapilo, lebo ľudia, čo ťa hľadajú pred svadbou, nemajú kde nájsť info, počuť mixe ani ti napísať dopyt.

Postavil som ti rovno demo:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/dj-snowman

Volám sa Max. Spravím ti to do týždňa za 400 €, s hostingom na prvý rok a mesiacom úprav.

Ak ťa to zaujalo, ozvi sa.

Max
+421 904 340 353`;

const LASHART_DM = `Ahoj, volám sa Max — robím weby v Bratislave.

Videl som váš Instagram @lashart_studio — 2 300 followerov a krásne práce, no vaša webstránka je len prázdna Webnode šablóna. Postavil som vám demo, ako by mohol skutočný web vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/lashart-studio

Cenník, služby, rezervácia — všetko na jednom mieste. Za 400 € hotové do týždňa.

Napíšte ak vás to zaujalo 💜`;

const CAKESET_DM = `Ahoj, volám sa Max — robím weby v Bratislave.

Videl som váš Instagram @lovely_cakeset — nádherné torty a pritom žiadny vlastný web. Postavil som vám demo, ako by mohol vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/lovely-cakeset

Galéria, ponuka, objednávka — všetko na jednom mieste. Za 400 € hotové do týždňa.

Napíšte ak vás to zaujalo 🎂`;

const ATELIER_BODY = `Dobrý deň,

volám sa Max — robím weby v Bratislave. Videl som váš Instagram @atelier_tvor.ba — 3-tisíc followerov a skvelé kurzy, ale váš web (ateliertvorba.sk) je len parkovacia stránka bez obsahu.

Postavil som vám demo, ako by mohol web vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/atelier-tvorba

Kurzy, teambuilding, rezervácia — všetko na jednom mieste. Za 400 € hotové do týždňa, s hostingom prvý rok.

Ozvite sa ak vás to zaujíma.

Max
+421 904 340 353`;

const DIELNA_BODY = `Dobrý deň,

volám sa Max — robím weby v Bratislave. Narazil som na váš Instagram @dielnakeramicka — 1 400 followerov, plný skvelých záberov z kurzov v Starej Tržnici, ale žiadna webstránka kde by si záujemcovia našli info, ceny a prihlásili sa.

Postavil som vám demo, ako by to mohlo vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/dielna-keramicka

Krúžky, workshopy, teambuilding, detské kurzy — prehľadne na jednom mieste, s prihlasovacím formulárom. Za 400 € hotové do týždňa, hosting prvý rok zadarmo.

Ozvite sa ak vás to zaujíma.

Max
+421 904 340 353`;

const FLOWERS_DM = `Zdravím, volám sa Max — robím weby v Bratislave.

Videl som váš Instagram @flowers_studio.sk — 6 400 sledovateľov, krásne kytice, objednávky cez DM a telefón. Kúsok vám chýba — poriadna webstránka kde si zákazníci môžu priamo objednať, pozrieť ceny a galériu, bez toho aby čakali na odpoveď v správach.

Postavil som vám demo, ako by to mohlo vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/flowers-studio-ba

Svadobné kvety, darčeky, firemné dekorácie, objednávkový formulár — všetko na jednom mieste. Za 400 € hotové do týždňa, hosting prvý rok zadarmo.

Ozvi sa ak ťa to zaujíma.

Max
+421 904 340 353`;

const YESNAILS_DM = `Ahoj, som Max — robím weby v Bratislave.

Narazil som na @yes_nails_ba — 5 000+ followerov, skvelé práce, ale webstránku nemáš, len Taplink. To nie je to isté.

Postavil som ti demo, ako by mohol skutočný web vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/yes-nails-ba

Gélovanie, manikúra, pedikúra, laminácia obočia — prehľadne s cenníkom a rezervačným formulárom. 400 €, hotové do týždňa.

Ozvi sa ak ťa to zaujíma 💅

Max`;

const LARI_DM = `Ahoj, som Max — robím weby v Bratislave.

Videl som @lari_masaz_bratislava — máš aktívny Instagram, ale žiadnu webstránku kde by sa záujemcovia mohli pozrieť na ponuku a rezervovať termín.

Postavil som ti demo, ako by to mohlo vyzerať:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/lari-masaz

Relaxačná, športová, reflexológia — prehľadne s cenníkom a kontaktom. Za 400 € hotové do týždňa.

Ozvi sa ak ťa to zaujíma 🌿

Max`;

const MARTINA_DM = `Hey Martina, I'm Max — a web developer based in Bratislava.

I saw your profile — 3K followers, yoga and pilates, but no website. I built a demo to show you what it could look like:
https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/martina-yoga

Classes, about you, booking — all in one place. €400, done in a week.

Let me know 🌿`;

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
                        10 odoslaných · 5 nové — <strong className="text-white">potenciál 6 000 €</strong>
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
                        <a href="https://instagram.com/chaos_bratislava" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/chaos_bratislava</a>
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
                        <a href="https://instagram.com/onakotattoo" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/onakotattoo</a>
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
                        <a href="https://instagram.com/patrisha_ink" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/patrisha_ink</a>
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
                        <a href="https://instagram.com/kd_makeupartist" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/kd_makeupartist</a>
                        <p className="text-green-500 text-xs font-bold mb-3">✓ Email odoslaný</p>
                        <a href={`mailto:kd.krizanovicova@gmail.com?subject=${encodeURIComponent("Hotový web pre makeup artistku — demo pripravené")}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Otvoriť znova →
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
                        <a href="https://instagram.com/mari.iayurchenko" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/mari.iayurchenko</a>
                        <p className="text-zinc-600 text-xs mb-1">→ mariiayurchenko1499@gmail.com</p>
                        <p className="text-green-500 text-xs font-bold mb-3">✓ Email odoslaný</p>
                        <a href={`mailto:mariiayurchenko1499@gmail.com?subject=${encode("Demo webu pre fotografku — Mariia Yurchenko")}&body=${encode(MARIIA_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400 mb-3">
                            Otvoriť znova →
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
                        <a href="https://instagram.com/vladimir_holota" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/vladimir_holota</a>
                        <p className="text-zinc-600 text-xs mb-1">→ vladimir.holota@gmail.com</p>
                        <p className="text-green-500 text-xs font-bold mb-3">✓ Email odoslaný</p>
                        <a href={`mailto:vladimir.holota@gmail.com?subject=${encode("Demo webu pre Vladimíra Holotu — personal trainer")}&body=${encode(VLADIMIR_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400 mb-3">
                            Otvoriť znova →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/vladimir-holota" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* DJ Snowman — email */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">7. DJ Snowman</h2>
                                <p className="text-zinc-500 text-sm">~2K Instagram · 500+ svadieb · email v bio · žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/djsnowman_official" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/djsnowman_official</a>
                        <p className="text-zinc-600 text-xs mb-1">→ petrusradoslav@gmail.com</p>
                        <p className="text-green-500 text-xs font-bold mb-3">✓ Email odoslaný</p>
                        <a href={`mailto:petrusradoslav@gmail.com?subject=${encode("Postavil som ti web — DJ Snowman demo")}&body=${encode(DJSNOWMAN_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400 mb-3">
                            Otvoriť znova →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/dj-snowman" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* LASHart Studio — Instagram DM / WhatsApp */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(155,111,160,0.3)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">9. LASHart Studio</h2>
                                <p className="text-zinc-500 text-sm">2.3K Instagram · mihalnice & obočie · len prázdna Webnode stránka</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/lashart_studio" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/lashart_studio</a>
                        <p className="text-zinc-600 text-xs mb-1">→ @lashart_studio · WhatsApp +421 917 066 888</p>
                        <p className="text-green-500 text-xs font-bold mb-3">✓ DM odoslaná</p>
                        <a href="https://wa.me/421917066888" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400 mb-3">
                            Otvoriť WhatsApp →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/lashart-studio" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* Lovely Cakeset — Instagram / WhatsApp DM */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(201,125,78,0.3)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">10. Lovely Cakeset</h2>
                                <p className="text-zinc-500 text-sm">~800 Instagram · torty na objednávku · len WhatsApp</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/lovely_cakeset" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/lovely_cakeset</a>
                        <p className="text-zinc-600 text-xs mb-1">→ @lovely_cakeset · WhatsApp +380 66 194 9387</p>
                        <p className="text-green-500 text-xs font-bold mb-3">✓ DM odoslaná</p>
                        <a href="https://wa.me/380661949387" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400 mb-3">
                            Otvoriť WhatsApp →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/lovely-cakeset" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* Martina Fong — Instagram DM */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(122,158,126,0.3)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">8. Martina Fong</h2>
                                <p className="text-zinc-500 text-sm">3K Instagram · yoga & pilates · žiadny web</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/martina_fong" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/martina_fong</a>
                        <p className="text-zinc-600 text-xs mb-1">→ @martina_fong na Instagrame</p>
                        <p className="text-green-500 text-xs font-bold mb-3">✓ DM odoslaná</p>
                        <a href="https://instagram.com/martina_fong" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400 mb-3">
                            Otvoriť Instagram →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/martina-yoga" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                </div>

                    {/* Ateliér TVOR.BA — email */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(139,105,20,0.35)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">11. Ateliér TVOR.BA</h2>
                                <p className="text-zinc-500 text-sm">3K Instagram · keramické kurzy · doména = prázdna parkovacia stránka</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/atelier_tvor.ba" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/atelier_tvor.ba</a>
                        <p className="text-zinc-600 text-xs mb-4">→ ateliertvor.ba@gmail.com</p>
                        <a href={`mailto:ateliertvor.ba@gmail.com?subject=${encode("Demo webu pre Ateliér TVOR.BA — pripravené")}&body=${encode(ATELIER_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-black mb-3 hover:opacity-90"
                            style={{ background: "#c4983a" }}>
                            Otvoriť v Gmail →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/atelier-tvorba" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* Dielňa Keramika — email */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(181,83,60,0.35)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">12. Dielňa Keramika</h2>
                                <p className="text-zinc-500 text-sm">1.4K Instagram · keramické kurzy · Stará Tržnica · iba Instagram a Facebook</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/dielnakeramicka" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/dielnakeramicka</a>
                        <p className="text-zinc-600 text-xs mb-4">→ dielnakeramicka@gmail.com</p>
                        <a href={`mailto:dielnakeramicka@gmail.com?subject=${encode("Demo webu pre Dielňu Keramika — pripravené")}&body=${encode(DIELNA_BODY)}`}
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-white mb-3 hover:opacity-90"
                            style={{ background: "#b5533c" }}>
                            Otvoriť v Gmail →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/dielna-keramicka" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* Flowers Studio BA — DM/call */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(45,90,39,0.4)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">13. Flowers Bratislava</h2>
                                <p className="text-zinc-500 text-sm">6.4K Instagram · floristka · doručenie · iba IG + telefón</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/flowers_studio.sk" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/flowers_studio.sk</a>
                        <p className="text-zinc-600 text-xs mb-4">→ DM na Instagram alebo 📞 +421 918 446 390</p>
                        <a href="https://instagram.com/flowers_studio.sk" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-white mb-3 hover:opacity-90"
                            style={{ background: "#2d5a27" }}>
                            Otvoriť Instagram DM →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/flowers-studio-ba" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* YES Nails BA — DM */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(196,148,138,0.35)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">14. YES Nails BA</h2>
                                <p className="text-zinc-500 text-sm">5.1K Instagram · manikúra, pedikúra, laminácia · iba Taplink (nie web)</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/yes_nails_ba" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/yes_nails_ba</a>
                        <p className="text-zinc-600 text-xs mb-4">→ DM na Instagram</p>
                        <a href="https://instagram.com/yes_nails_ba" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-white mb-3 hover:opacity-90"
                            style={{ background: "#a06070" }}>
                            Otvoriť Instagram DM →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/yes-nails-ba" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                    {/* Lari Masáž — DM */}
                    <div className="border rounded-2xl p-5 bg-zinc-900" style={{ borderColor: "rgba(122,90,48,0.35)" }}>
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="font-black text-lg">15. Lari Masáž</h2>
                                <p className="text-zinc-500 text-sm">Aktívny Instagram · masérska súkromná prax · žiadna webstránka</p>
                            </div>
                            <span className="text-xl font-black">400 €</span>
                        </div>
                        <a href="https://instagram.com/lari_masaz_bratislava" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-300 transition-colors block mb-1">↗ instagram.com/lari_masaz_bratislava</a>
                        <p className="text-zinc-600 text-xs mb-4">→ DM na Instagram</p>
                        <a href="https://instagram.com/lari_masaz_bratislava" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition text-white mb-3 hover:opacity-90"
                            style={{ background: "#7a5a30" }}>
                            Otvoriť Instagram DM →
                        </a>
                        <a href="https://cv-builder-git-demos-maxo551s-projects.vercel.app/demo/lari-masaz" target="_blank" rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-6 rounded-xl text-xs transition bg-zinc-800 hover:bg-zinc-700 text-zinc-400">
                            Pozrieť demo →
                        </a>
                    </div>

                <div className="text-center p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-zinc-400 text-sm">
                        Celkový potenciál:{" "}
                        <span className="text-white font-black text-lg">6 000 €</span>
                        <span className="text-zinc-600 ml-2">= 15 × 400 €</span>
                    </p>
                    <p className="text-green-600 text-xs mt-1 font-bold">10 odoslaných · 5 čakajú na odoslanie</p>
                </div>
            </div>
        </div>
    );
}
