"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "sk";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
    // Home page
    "home.title": { en: "CV Click Builder", sk: "CV Click Builder" },
    "home.candidate.title": { en: "For Candidates", sk: "Pre uchádzačov" },
    "home.candidate.desc": { en: "Build your professional CV in minutes using our click-based wizard.", sk: "Vytvorte si profesionálny životopis za pár minút pomocou nášho sprievodcu." },
    "home.candidate.btn": { en: "Create Your CV", sk: "Vytvoriť životopis" },
    "home.admin.title": { en: "For Admins", sk: "Pre adminov" },
    "home.admin.btn": { en: "Sign In", sk: "Prihlásiť sa" },
    "home.lang.label": { en: "Language / Jazyk", sk: "Jazyk / Language" },

    // Steps
    "step.basicInfo": { en: "Basic Info", sk: "Základné info" },
    "step.education": { en: "Education", sk: "Vzdelanie" },
    "step.experience": { en: "Experience", sk: "Skúsenosti" },
    "step.skills": { en: "Skills", sk: "Zručnosti" },
    "step.languages": { en: "Languages", sk: "Jazyky" },
    "step.license": { en: "License", sk: "Vodičský preukaz" },
    "step.certificates": { en: "Certificates", sk: "Certifikáty" },
    "step.upload": { en: "Upload", sk: "Nahrať CV" },
    "step.gdpr": { en: "GDPR", sk: "GDPR" },
    "step.of": { en: "of", sk: "z" },
    "step.previous": { en: "Previous", sk: "Späť" },
    "step.next": { en: "Next Step", sk: "Ďalší krok" },
    "step.submit": { en: "Submit CV", sk: "Odoslať životopis" },
    "step.submitting": { en: "Submitting...", sk: "Odosielam..." },

    // Step 1 - Basic Info
    "basic.title": { en: "Basic Information", sk: "Základné informácie" },
    "basic.firstName": { en: "First Name *", sk: "Meno *" },
    "basic.lastName": { en: "Last Name *", sk: "Priezvisko *" },
    "basic.email": { en: "Email Address *", sk: "E-mailová adresa *" },
    "basic.phone": { en: "Phone Number", sk: "Telefónne číslo" },
    "basic.city": { en: "City / Region *", sk: "Mesto / Región *" },
    "basic.position": { en: "Desired Position *", sk: "Požadovaná pozícia *" },
    "basic.firstName.ph": { en: "John", sk: "Ján" },
    "basic.lastName.ph": { en: "Doe", sk: "Novák" },
    "basic.city.ph": { en: "Bratislava", sk: "Bratislava" },
    "basic.position.ph": { en: "Warehouse Worker", sk: "Skladník" },

    // Step 2 - Education
    "edu.title": { en: "Education", sk: "Vzdelanie" },
    "edu.add": { en: "+ Add Education", sk: "+ Pridať vzdelanie" },
    "edu.empty": { en: "No education added yet. Click \"+ Add Education\" to start.", sk: "Zatiaľ žiadne vzdelanie. Kliknite na \"+ Pridať vzdelanie\"." },
    "edu.level": { en: "Level", sk: "Stupeň" },
    "edu.school": { en: "School / University", sk: "Škola / Univerzita" },
    "edu.field": { en: "Field of Study", sk: "Odbor štúdia" },
    "edu.startDate": { en: "Start Date", sk: "Dátum začiatku" },
    "edu.endDate": { en: "End Date", sk: "Dátum ukončenia" },
    "edu.current": { en: "I am currently studying here", sk: "Momentálne tu študujem" },
    "edu.school.ph": { en: "e.g. Technical University", sk: "napr. Technická univerzita" },
    "edu.field.ph": { en: "e.g. Mechanical Engineering", sk: "napr. Strojárstvo" },

    // Step 3 - Experience
    "exp.title": { en: "Work Experience", sk: "Pracovné skúsenosti" },
    "exp.add": { en: "+ Add Experience", sk: "+ Pridať skúsenosť" },
    "exp.empty": { en: "No experience added yet. Click \"+ Add Experience\" to start.", sk: "Zatiaľ žiadne skúsenosti. Kliknite na \"+ Pridať skúsenosť\"." },
    "exp.position": { en: "Position", sk: "Pozícia" },
    "exp.company": { en: "Company", sk: "Firma" },
    "exp.industry": { en: "Industry", sk: "Odvetvie" },
    "exp.industry.select": { en: "— Select industry —", sk: "— Vyberte odvetvie —" },
    "exp.industry.custom": { en: "Enter industry", sk: "Zadajte odvetvie" },
    "exp.industry.custom.ph": { en: "e.g. IT, Marketing, Finance...", sk: "napr. IT, Marketing, Finančníctvo..." },
    "exp.startDate": { en: "Start Date", sk: "Dátum začiatku" },
    "exp.endDate": { en: "End Date", sk: "Dátum ukončenia" },
    "exp.current": { en: "I currently work here", sk: "Momentálne tu pracujem" },
    "exp.description": { en: "Description", sk: "Popis" },
    "exp.description.ph": { en: "Describe your responsibilities and achievements...", sk: "Popíšte vaše povinnosti a úspechy..." },
    "exp.position.ph": { en: "e.g. Welder", sk: "napr. Zvárač" },
    "exp.company.ph": { en: "e.g. Steel Works s.r.o.", sk: "napr. Oceliarsky závod s.r.o." },

    // Step 4 - Skills
    "skills.title": { en: "Skills", sk: "Zručnosti" },
    "skills.core": { en: "Core Skills", sk: "Hlavné zručnosti" },
    "skills.other": { en: "Other Skills (press Enter to add)", sk: "Ďalšie zručnosti (stlačte Enter)" },
    "skills.other.ph": { en: "Type a skill and press Enter...", sk: "Napíšte zručnosť a stlačte Enter..." },

    // Step 5 - Languages
    "lang.title": { en: "Languages", sk: "Jazyky" },
    "lang.add": { en: "+ Add Language", sk: "+ Pridať jazyk" },

    // Step 6 - License
    "license.title": { en: "Driver's License", sk: "Vodičský preukaz" },
    "license.has": { en: "I have a driver's license", sk: "Mám vodičský preukaz" },
    "license.types": { en: "License Types", sk: "Kategórie preukazu" },

    // Step 7 - Certificates
    "cert.title": { en: "Certificates & Courses", sk: "Certifikáty a kurzy" },
    "cert.add": { en: "+ Add Certificate", sk: "+ Pridať certifikát" },
    "cert.empty": { en: "No certificates added yet.", sk: "Zatiaľ žiadne certifikáty." },
    "cert.name": { en: "Certificate Name", sk: "Názov certifikátu" },
    "cert.issuer": { en: "Issuing Organization", sk: "Vydávajúca organizácia" },
    "cert.year": { en: "Year", sk: "Rok" },

    // Step 8 - Upload
    "upload.title": { en: "Upload Your CV", sk: "Nahrať životopis" },
    "upload.desc": { en: "Optionally upload your existing CV (PDF, DOC, DOCX)", sk: "Voliteľne nahrajte váš existujúci životopis (PDF, DOC, DOCX)" },
    "upload.btn": { en: "Choose File", sk: "Vybrať súbor" },
    "upload.skip": { en: "You can skip this step if you don't have a file to upload.", sk: "Tento krok môžete preskočiť ak nemáte súbor na nahranie." },

    // Step 9 - GDPR
    "gdpr.title": { en: "Privacy & Consent", sk: "Súhlas so spracovaním osobných údajov" },
    "gdpr.consent.label": {
        sk: "Súhlas so spracovaním osobných údajov podľa článku 6 ods. 1. písm. a) a článku 7 nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a voľnom pohybe takých údajov, ktorým sa ruší smernica 95/46/ES (všeobecné nariadenie o ochrane údajov) (ďalej tiež „GDPR\") ODKLIKNUTÍM TEJTO POLOŽKY AKO FYZICKÁ OSOBA IDENTIFIKOVANÁ V TOMTO ELEKTRONICKOM FORMULÁRI (ďalej tiež ako „Subjekt údajov\") UDEĽUJEM SÚHLAS spoločnosti RELATED SERVICES s.r.o., sídlo: Ul. Garbiarska 4, 031 01 Liptovský Mikuláš, IČO: 47 699 809, DIČ: 2024068981, Zápis: Spoločnosť zapísal Okresný súd Žilina do Obchodného registra pod číslom Sro/66922/L (ďalej tiež „Poskytovateľ\"); aby ma zaradili do databázy uchádzačov o zamestnanie alebo o inú formu spolupráce s Poskytovateľom (ďalej tiež „Databáza\") a v tej súvislosti, aby za účelom vedenia a ďalšieho spracovania Databázy a v rámci toho tiež vyhľadávania vhodných kandidátov na prácu (ďalej tiež „Účel\"), Poskytovateľ spracovával moje osobné údaje v rozsahu: meno, priezvisko, dátum narodenia, kontaktné údaje, údaje o dosiahnutom vzdelaní a predchádzajúcich pracovných skúsenostiach a ďalšie údaje uvedené v mojom životopise alebo v akomkoľvek inom dokumente, ktorý som ktorémukoľvek zo Správcov predložil pri prejavení záujmu o prácu alebo o inú formu spolupráce (ďalej spoločne ako „Osobné údaje\") (ďalej tiež „Súhlas\"). Vyššie vyjadrený Súhlas udeľujem na dobu 5 rokov odo dňa udelenia Súhlasu (ďalej tiež „Doba trvania\"). Udelením tohto Súhlasu tiež potvrdzujem, že ma Správcovia oboznámili s podmienkami spracovania mojich Osobných údajov v dokumente Zásady spracúvania osobných údajov, ktorý som si prečítal. Prehlasujem, že poskytnuté Osobné údaje sú pravdivé, aktuálne a boli poskytnuté slobodne. Subjekt údajov berie na vedomie, že Poskytovateľ bude tento dokument, resp. dokument preukazujúci poskytnutie Súhlasu uchovávať na účely splnenia právnej povinnosti byť schopní doložiť, že Subjekt údajov udelil súhlas so spracovaním Osobných údajov. Subjekt údajov vyhlasuje, že tento Súhlas bol poskytnutý Subjektom údajov slobodne a dobrovoľne a že Subjektu údajov boli v súvislosti s udelením Súhlasu poskytnuté aj informácie o základných častiach dohody Správcov uvedené v článku 26 ods. 1 GDPR, vzťahujúce sa na spracovanie Osobných údajov na základe tohto Súhlasu a to v znení uvedenom v prílohe tohto Súhlasu.",
        en: "Consent to the processing of personal data pursuant to Article 6(1)(a) and Article 7 of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, repealing Directive 95/46/EC (General Data Protection Regulation) (hereinafter also \"GDPR\") BY CLICKING THIS ITEM, AS THE NATURAL PERSON IDENTIFIED IN THIS ELECTRONIC FORM (hereinafter also \"Data Subject\"), I GIVE CONSENT to RELATED SERVICES s.r.o., registered office: Ul. Garbiarska 4, 031 01 Liptovský Mikuláš, Company ID: 47 699 809, VAT ID: 2024068981, Registration: The company was registered by the District Court Žilina in the Commercial Register under number Sro/66922/L (hereinafter also \"Provider\"); to include me in the database of job applicants or other forms of cooperation with the Provider (hereinafter also \"Database\") and in that context, for the purpose of maintaining and further processing the Database and in that context also searching for suitable job candidates (hereinafter also \"Purpose\"), for the Provider to process my personal data to the extent of: name, surname, date of birth, contact details, information on achieved education and previous work experience and other data stated in my CV or any other document I submitted to any of the Controllers when expressing interest in work or other form of cooperation (hereinafter collectively \"Personal Data\") (hereinafter also \"Consent\"). The above-expressed Consent is granted for a period of 5 years from the date of granting the Consent (hereinafter also \"Duration\"). By granting this Consent I also confirm that the Controllers have acquainted me with the conditions of processing my Personal Data in the document Privacy Policy, which I have read. I declare that the provided Personal Data is true, current and was provided freely. The Data Subject acknowledges that the Provider will retain this document, or the document proving the granting of Consent, for the purposes of fulfilling the legal obligation to be able to demonstrate that the Data Subject granted consent to the processing of Personal Data. The Data Subject declares that this Consent was provided by the Data Subject freely and voluntarily and that the Data Subject was, in connection with the granting of Consent, also provided with information about the basic parts of the Controllers\' agreement referred to in Article 26(1) GDPR, relating to the processing of Personal Data on the basis of this Consent as set out in the annex to this Consent."
    },
    "gdpr.policy.link": { en: "Read full Privacy Policy", sk: "Prečítať Zásady spracúvania osobných údajov" },
    "gdpr.required": { en: "You must accept the consent to submit your CV.", sk: "Pre odoslanie životopisu musíte udeliť súhlas." },
};

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => {},
    t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");

    useEffect(() => {
        const stored = localStorage.getItem("cv_lang") as Lang;
        if (stored === "en" || stored === "sk") setLangState(stored);
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem("cv_lang", l);
    };

    const t = (key: string): string => {
        return translations[key]?.[lang] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
