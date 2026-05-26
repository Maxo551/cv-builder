"use client";

const SPREJE_BODY = `Ahoj Honzo,

slíbil jsem demo — tady je:
https://cv-builder-git-claude-ai-website-sales-px0tl-maxo551s-projects.vercel.app/demo/spreje-praha

Udělal jsem ho přímo pro SprejePraha — tmavý urban styl, přehled produktů a značek (Montana, Molotow, MTN…), otevírací doby, adresa, kontakt a odkaz na Instagram. Je to návrh, takže cokoliv lze upravit podle vašich představ.

Co dostanete za 350 €:
• Hotová, živá webová stránka do 7 dní od potvrzení
• Mobilní verze (přes 60 % návštěvníků přichází z telefonu)
• Základní SEO — správné titulky, meta popis, rychlé načítání
• Všechny sekce z dema + úpravy dle vašich požadavků
• Nastavení hostingu (Vercel, první rok zdarma)
• 1 měsíc bezplatných oprav po spuštění

350 € je pevná cena, žádné skryté náklady. Pokud by to pomohlo, klidně lze rozdělit: 175 € při zahájení, 175 € při předání.

Pokud se vám demo líbí a chcete pokračovat, stačí odpovědět — domluvíme se na detailech a začínám hned.

S pozdravem,
Max
+421 904 340 353`;

const CHAOS_BODY = `Dobrý deň,

pred pár mesiacmi som vám písal ohľadom webovej stránky pre Chaos MMA. Vtedy som spomínal, že pripravím demo — a tu je:
https://cv-builder-git-claude-ai-website-sales-px0tl-maxo551s-projects.vercel.app/demo/chaos-bratislava

Navrhol som ho špeciálne pre bojový gym — prehľad disciplín (MMA, kickbox, thajský box, wrestling), týždenný rozvrh, info o gymu, prvý tréning zadarmo ako CTA a kontaktná sekcia.

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
https://cv-builder-git-claude-ai-website-sales-px0tl-maxo551s-projects.vercel.app/demo/onako-tattoo

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

function encode(s: string) {
    return encodeURIComponent(s);
}

const emails = [
    {
        id: "spreje",
        label: "1. Spreje Praha",
        sublabel: "Teplý lead — pýtal sa na cenu a portfólio",
        to: "sprejepraha@gmail.com",
        subject: "Re: Návrh webovej stránky",
        body: SPREJE_BODY,
        price: "350 €",
        color: "bg-yellow-400 hover:bg-yellow-300 text-black",
        border: "border-yellow-400/30",
    },
    {
        id: "chaos",
        label: "2. Chaos MMA",
        sublabel: "Follow-up po 4 mesiacoch — s reálnym demom",
        to: "chaosbratislavamma@gmail.com",
        subject: "Demo webu pre Chaos MMA — pripravené",
        body: CHAOS_BODY,
        price: "400 €",
        color: "bg-red-600 hover:bg-red-500 text-white",
        border: "border-red-500/30",
    },
    {
        id: "onako",
        label: "3. Onakô Tattoo",
        sublabel: "13K Instagram, doména 'coming soon' — ideálny lead",
        to: "info@onakotattoo.com",
        subject: "Hotový web pre Onakô Tattoo — demo pripravené",
        body: ONAKO_BODY,
        price: "400 €",
        color: "bg-white hover:bg-zinc-100 text-black",
        border: "border-zinc-500/30",
    },
];

export default function SendOutreach() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6 flex flex-col items-center justify-center">
            <div className="max-w-lg w-full">
                <div className="text-center mb-10">
                    <p className="text-xs tracking-widest text-zinc-500 uppercase mb-2">Sales outreach</p>
                    <h1 className="text-3xl font-black mb-2">Odošli 3 emaily</h1>
                    <p className="text-zinc-400">
                        Každé tlačidlo otvorí Gmail s predvyplneným emailom.
                        Skontroluj a odošli — <strong className="text-white">3 minúty, 1 150 € potenciál.</strong>
                    </p>
                </div>

                <div className="space-y-4 mb-10">
                    {emails.map((e) => (
                        <div
                            key={e.id}
                            className={`border ${e.border} rounded-2xl p-5 bg-zinc-900`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h2 className="font-black text-lg">{e.label}</h2>
                                    <p className="text-zinc-500 text-sm">{e.sublabel}</p>
                                </div>
                                <span className="text-xl font-black">{e.price}</span>
                            </div>
                            <p className="text-zinc-600 text-xs mb-4">→ {e.to}</p>
                            <a
                                href={`mailto:${e.to}?subject=${encode(e.subject)}&body=${encode(e.body)}`}
                                className={`block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition ${e.color}`}
                            >
                                Otvoriť v Gmail a odoslať →
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <p className="text-zinc-400 text-sm">
                        Celkový potenciál:{" "}
                        <span className="text-white font-black text-lg">1 150 €</span>
                        <span className="text-zinc-600 ml-2">= 350 + 400 + 400</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
