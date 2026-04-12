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
        sk: [
            "Súhlas so spracovaním osobných údajov podľa článku 6 ods. 1 písm. a) a článku 7 nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takých údajov, ktorým sa ruší smernica 95/46/ES (ďalej tiež len „GDPR“).",
            "Odkliknutím tejto položky ako fyzická osoba identifikovaná v tomto elektronickom formulári (ďalej tiež ako „Subjekt údajov“) udeľujem súhlas združeniu Asociácia pre podporu zamestnanosti, právna forma: Občianske združenie, odborová organizácia a organizácia zamestnávateľov, IČO: 42417261, sídlo: Škultétyho 1, 831 03 Bratislava-Nové Mesto, registračné číslo: VVS/1-900/90-45357, registrový úrad: Okresný úrad Bratislava (ďalej tiež ako „Poskytovateľ“), aby ma zaradili do databázy uchádzačov o zamestnanie alebo o inú formu spolupráce s Poskytovateľom (ďalej tiež ako „Databáza“).",
            "Zároveň súhlasím s tým, aby Poskytovateľ za účelom vedenia a ďalšieho spracovania Databázy a vyhľadávania vhodných kandidátov na prácu spracovával moje osobné údaje v rozsahu: meno, priezvisko, dátum narodenia, kontaktné údaje, údaje o dosiahnutom vzdelaní, predchádzajúcich pracovných skúsenostiach a ďalšie údaje uvedené v mojom životopise alebo inom dokumente, ktorý som predložil pri prejavení záujmu o prácu alebo o inú formu spolupráce.",
            "Tento súhlas udeľujem na dobu 5 rokov odo dňa jeho udelenia. Udelením súhlasu tiež potvrdzujem, že som bol oboznámený s podmienkami spracúvania mojich osobných údajov v dokumente Zásady spracúvania osobných údajov, že poskytnuté osobné údaje sú pravdivé, aktuálne a boli poskytnuté slobodne, a že Poskytovateľ bude tento dokument alebo iný doklad o poskytnutí súhlasu uchovávať na účely preukázania splnenia svojej právnej povinnosti.",
        ].join(" "),
        en: [
            "Consent to the processing of personal data pursuant to Article 6(1)(a) and Article 7 of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, repealing Directive 95/46/EC (hereinafter also referred to as the “GDPR”).",
            "By clicking this item, as the natural person identified in this electronic form (hereinafter also referred to as the “Data Subject”), I give consent to the association Asociácia pre podporu zamestnanosti, legal form: Civic association, trade union organisation and employers' organisation, Company ID: 42417261, registered office: Škultétyho 1, 831 03 Bratislava-Nové Mesto, registration number: VVS/1-900/90-45357, registry authority: District Office Bratislava (hereinafter also referred to as the “Provider”), to include me in the database of job applicants or other forms of cooperation with the Provider (hereinafter also referred to as the “Database”).",
            "At the same time, I consent to the Provider processing my personal data for the purpose of maintaining and further processing the Database and searching for suitable job candidates, to the extent of: name, surname, date of birth, contact details, information on achieved education, previous work experience and other information stated in my CV or in any other document that I submitted when expressing interest in employment or another form of cooperation.",
            "This consent is granted for a period of 5 years from the date on which it is given. By granting this consent, I also confirm that I have been acquainted with the conditions of the processing of my personal data in the Privacy Policy document, that the personal data provided is true, up to date and was provided freely, and that the Provider will retain this document or another proof of consent for the purpose of demonstrating compliance with its legal obligations.",
        ].join(" ")
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
