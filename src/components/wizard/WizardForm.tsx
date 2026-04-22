"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const STEPS_EN = ["Basic Info", "Education", "Experience", "Skills", "Languages", "License", "Certificates", "Upload", "GDPR"];
const STEPS_SK = ["Základné info", "Vzdelanie", "Skúsenosti", "Zručnosti", "Jazyky", "Vodičský preukaz", "Certifikáty", "Nahrať CV", "GDPR"];

export default function WizardForm() {
    const router = useRouter();
    const { lang, t } = useLanguage();
    const STEPS = lang === "sk" ? STEPS_SK : STEPS_EN;
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<any>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        desiredPosition: "",
        education: [],
        workExperience: [],
        skills: [],
        languages: [],
        driversLicense: {
            hasLicense: false,
            types: [],
        },
        certificates: [],
        cvFile: null,
        gdprConsent: false,
    });

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const updateFormData = (data: any) => {
        setFormData((prev: any) => ({ ...prev, ...data }));
    };

    const getMissingBasicFields = () => {
        const requiredFields = [
            { key: "firstName", label: t("basic.firstName").replace(" *", "") },
            { key: "lastName", label: t("basic.lastName").replace(" *", "") },
            { key: "email", label: t("basic.email").replace(" *", "") },
            { key: "city", label: t("basic.city").replace(" *", "") },
            { key: "desiredPosition", label: t("basic.position").replace(" *", "") },
        ];

        return requiredFields.filter(({ key }) => !String(formData[key] ?? "").trim());
    };

    const isLastStep = currentStep === STEPS.length;

    const handleSubmit = async () => {
        const missingBasicFields = getMissingBasicFields();
        if (missingBasicFields.length > 0) {
            setCurrentStep(1);
            alert(`Please fill in: ${missingBasicFields.map(({ label }) => label).join(", ")}`);
            return;
        }

        if (!formData.gdprConsent) {
            setCurrentStep(STEPS.length);
            alert(t("gdpr.required"));
            return;
        }

        setLoading(true);
        try {
            const data = new FormData();
            const trimmedBasicInfo = {
                firstName: formData.firstName.trim(),
                lastName: formData.lastName.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                city: formData.city.trim(),
                desiredPosition: formData.desiredPosition.trim(),
            };

            // Append basic fields
            data.append("firstName", trimmedBasicInfo.firstName);
            data.append("lastName", trimmedBasicInfo.lastName);
            data.append("email", trimmedBasicInfo.email);
            data.append("phone", trimmedBasicInfo.phone);
            data.append("city", trimmedBasicInfo.city);
            data.append("desiredPosition", trimmedBasicInfo.desiredPosition);
            data.append("gdprConsent", formData.gdprConsent.toString());
            data.append("hasDriversLicense", formData.driversLicense.hasLicense.toString());
            data.append("driversLicenseTypes", JSON.stringify(formData.driversLicense.types));

            // Append complex objects as JSON strings
            data.append("education", JSON.stringify(formData.education));
            data.append("workExperience", JSON.stringify(formData.workExperience));
            data.append("skills", JSON.stringify(formData.skills));
            data.append("languages", JSON.stringify(formData.languages));
            data.append("certificates", JSON.stringify(formData.certificates));

            // Append File
            if (formData.cvFile) {
                data.append("cvFile", formData.cvFile);
            }

            const response = await fetch("/api/candidates", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                const { shareToken } = await response.json();
                router.push(`/candidate/share/${shareToken}`);
            } else {
                const error = await response.json();
                alert(`Submission failed: ${error.message || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Submission failed", error);
            alert("An error occurred during submission.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-slate-200">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-500">
                        Step {currentStep} {t("step.of")} {STEPS.length}
                    </span>
                    <span className="text-sm font-bold text-blue-600">
                        {STEPS[currentStep - 1]}
                    </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Form Content */}
            <div className="min-h-[400px]">
                {currentStep === 1 && (
                    <Step1 data={formData} update={updateFormData} />
                )}
                {currentStep === 2 && (
                    <Step2 data={formData} update={updateFormData} />
                )}
                {currentStep === 3 && (
                    <Step3 data={formData} update={updateFormData} />
                )}
                {currentStep === 4 && (
                    <Step4 data={formData} update={updateFormData} />
                )}
                {currentStep === 5 && (
                    <Step5 data={formData} update={updateFormData} />
                )}
                {currentStep === 6 && (
                    <Step6 data={formData} update={updateFormData} />
                )}
                {currentStep === 7 && (
                    <Step7 data={formData} update={updateFormData} />
                )}
                {currentStep === 8 && (
                    <Step8 data={formData} update={updateFormData} />
                )}
                {currentStep === 9 && (
                    <Step9 data={formData} update={updateFormData} />
                )}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between border-t pt-6">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={cn(
                        "px-6 py-2 rounded-lg font-medium transition",
                        currentStep === 1
                            ? "bg-slate-50 text-slate-300 cursor-not-allowed"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    )}
                >
                    {t("step.previous")}
                </button>
                <button
                    onClick={isLastStep ? handleSubmit : nextStep}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md disabled:bg-blue-400"
                >
                    {loading ? t("step.submitting") : isLastStep ? t("step.submit") : t("step.next")}
                </button>
            </div>
        </div>
    );
}

function Step1({ data, update }: any) {
    const { t } = useLanguage();
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const desiredPositionRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const refs = [
            { key: "firstName", ref: firstNameRef },
            { key: "lastName", ref: lastNameRef },
            { key: "email", ref: emailRef },
            { key: "phone", ref: phoneRef },
            { key: "city", ref: cityRef },
            { key: "desiredPosition", ref: desiredPositionRef },
        ];

        const syncAutofillValues = () => {
            const nextValues: Record<string, string> = {};

            refs.forEach(({ key, ref }) => {
                const value = ref.current?.value ?? "";
                if (value && value !== data[key]) {
                    nextValues[key] = value;
                }
            });

            if (Object.keys(nextValues).length > 0) {
                update(nextValues);
            }
        };

        syncAutofillValues();
        const timeouts = [150, 500, 1200].map((delay) => window.setTimeout(syncAutofillValues, delay));

        return () => {
            timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
        };
    }, [data, update]);

    const handleFieldUpdate = (field: string, value: string) => {
        update({ [field]: value });
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">{t("basic.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t("basic.firstName")}</label>
                    <input
                        ref={firstNameRef}
                        name="firstName"
                        autoComplete="given-name"
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.firstName}
                        onChange={(e) => handleFieldUpdate("firstName", e.target.value)}
                        onInput={(e) => handleFieldUpdate("firstName", (e.target as HTMLInputElement).value)}
                        onBlur={(e) => handleFieldUpdate("firstName", e.target.value)}
                        placeholder={t("basic.firstName.ph")}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t("basic.lastName")}</label>
                    <input
                        ref={lastNameRef}
                        name="lastName"
                        autoComplete="family-name"
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.lastName}
                        onChange={(e) => handleFieldUpdate("lastName", e.target.value)}
                        onInput={(e) => handleFieldUpdate("lastName", (e.target as HTMLInputElement).value)}
                        onBlur={(e) => handleFieldUpdate("lastName", e.target.value)}
                        placeholder={t("basic.lastName.ph")}
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t("basic.email")}</label>
                    <input
                        ref={emailRef}
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.email}
                        onChange={(e) => handleFieldUpdate("email", e.target.value)}
                        onInput={(e) => handleFieldUpdate("email", (e.target as HTMLInputElement).value)}
                        onBlur={(e) => handleFieldUpdate("email", e.target.value)}
                        placeholder="john.doe@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t("basic.phone")}</label>
                    <input
                        ref={phoneRef}
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.phone}
                        onChange={(e) => handleFieldUpdate("phone", e.target.value)}
                        onInput={(e) => handleFieldUpdate("phone", (e.target as HTMLInputElement).value)}
                        onBlur={(e) => handleFieldUpdate("phone", e.target.value)}
                        placeholder="+1 234 567 890"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t("basic.city")}</label>
                    <input
                        ref={cityRef}
                        name="city"
                        autoComplete="address-level2"
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.city}
                        onChange={(e) => handleFieldUpdate("city", e.target.value)}
                        onInput={(e) => handleFieldUpdate("city", (e.target as HTMLInputElement).value)}
                        onBlur={(e) => handleFieldUpdate("city", e.target.value)}
                        placeholder={t("basic.city.ph")}
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t("basic.position")}</label>
                    <input
                        ref={desiredPositionRef}
                        name="desiredPosition"
                        autoComplete="organization-title"
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.desiredPosition}
                        onChange={(e) => handleFieldUpdate("desiredPosition", e.target.value)}
                        onInput={(e) => handleFieldUpdate("desiredPosition", (e.target as HTMLInputElement).value)}
                        onBlur={(e) => handleFieldUpdate("desiredPosition", e.target.value)}
                        placeholder={t("basic.position.ph")}
                    />
                </div>
            </div>
        </div>
    );
}

function Step2({ data, update }: any) {
    const { t } = useLanguage();
    const addEducation = () => {
        const newEdu = {
            level: "BACHELOR",
            school: "",
            field: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
        };
        update({ education: [...data.education, newEdu] });
    };

    const removeEducation = (index: number) => {
        const newEduList = data.education.filter((_: any, i: number) => i !== index);
        update({ education: newEduList });
    };

    const updateEduField = (index: number, field: string, value: any) => {
        const newEduList = [...data.education];
        newEduList[index] = { ...newEduList[index], [field]: value };
        update({ education: newEduList });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800">{t("edu.title")}</h2>
                <button
                    onClick={addEducation}
                    className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition"
                >
                    {t("edu.add")}
                </button>
            </div>

            {data.education.length === 0 && (
                <div className="text-center py-10 bg-slate-50 rounded-lg border border-dashed text-slate-400">
                    {t("edu.empty")}
                </div>
            )}

            {data.education.map((edu: any, index: number) => (
                <div key={index} className="p-4 border rounded-lg bg-slate-50 relative group">
                    <button
                        onClick={() => removeEducation(index)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-red-500"
                    >
                        ✕
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t("edu.level")}</label>
                            <select
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={edu.level}
                                onChange={(e) => updateEduField(index, "level", e.target.value)}
                            >
                                <option value="PRIMARY">Primary</option>
                                <option value="HIGH_SCHOOL">High School</option>
                                <option value="HIGH_SCHOOL_GRADUATION">High School Graduation</option>
                                <option value="BACHELOR">Bachelor</option>
                                <option value="MASTER">Master</option>
                                <option value="PHD">PhD</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t("edu.school")}</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={edu.school}
                                onChange={(e) => updateEduField(index, "school", e.target.value)}
                                placeholder={t("edu.school.ph")}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t("edu.field")}</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={edu.field}
                                onChange={(e) => updateEduField(index, "field", e.target.value)}
                                placeholder={t("edu.field.ph")}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t("edu.startDate")}</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={edu.startDate}
                                    onChange={(e) => updateEduField(index, "startDate", e.target.value)}
                                />
                            </div>
                            <div className={edu.isCurrent ? "opacity-30 pointer-events-none" : ""}>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t("edu.endDate")}</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={edu.endDate}
                                    onChange={(e) => updateEduField(index, "endDate", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={edu.isCurrent}
                                onChange={(e) => updateEduField(index, "isCurrent", e.target.checked)}
                            />
                            <label className="text-sm text-slate-600">{t("edu.current")}</label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const INDUSTRIES = [
    "Administrativa",
    "Gastro",
    "Drevo výroba",
    "Strojárstvo",
    "Doprava",
    "Zdravotníctvo",
    "Služby",
    "Hotelierstvo",
    "Školstvo",
    "Poľnohospodárstvo",
    "Iné",
];

function Step3({ data, update }: any) {
    const { t } = useLanguage();
    const addExperience = () => {
        const newExp = {
            position: "",
            company: "",
            industry: "",
            industryCustom: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
            description: "",
        };
        update({ workExperience: [...data.workExperience, newExp] });
    };

    const removeExperience = (index: number) => {
        const newExpList = data.workExperience.filter((_: any, i: number) => i !== index);
        update({ workExperience: newExpList });
    };

    const updateExpField = (index: number, field: string, value: any) => {
        const newExpList = [...data.workExperience];
        newExpList[index] = { ...newExpList[index], [field]: value };
        update({ workExperience: newExpList });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800">{t("exp.title")}</h2>
                <button
                    onClick={addExperience}
                    className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition"
                >
                    {t("exp.add")}
                </button>
            </div>

            {data.workExperience.length === 0 && (
                <div className="text-center py-10 bg-slate-50 rounded-lg border border-dashed text-slate-400">
                    {t("exp.empty")}
                </div>
            )}

            {data.workExperience.map((exp: any, index: number) => (
                <div key={index} className="p-4 border rounded-lg bg-slate-50 relative group">
                    <button
                        onClick={() => removeExperience(index)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-red-500 transition"
                    >
                        ✕
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t("exp.position")}</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={exp.position}
                                onChange={(e) => updateExpField(index, "position", e.target.value)}
                                placeholder={t("exp.position.ph")}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t("exp.company")}</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={exp.company}
                                onChange={(e) => updateExpField(index, "company", e.target.value)}
                                placeholder={t("exp.company.ph")}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t("exp.industry")}</label>
                            <select
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={exp.industry}
                                onChange={(e) => updateExpField(index, "industry", e.target.value)}
                            >
                                <option value="">{t("exp.industry.select")}</option>
                                {INDUSTRIES.map((ind) => (
                                    <option key={ind} value={ind}>{ind}</option>
                                ))}
                            </select>
                        </div>
                        {exp.industry === "Iné" && (
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t("exp.industry.custom")}</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={exp.industryCustom}
                                    onChange={(e) => updateExpField(index, "industryCustom", e.target.value)}
                                    placeholder={t("exp.industry.custom.ph")}
                                />
                            </div>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t("exp.startDate")}</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={exp.startDate}
                                    onChange={(e) => updateExpField(index, "startDate", e.target.value)}
                                />
                            </div>
                            <div className={exp.isCurrent ? "opacity-30 pointer-events-none" : ""}>
                                <label className="block text-sm font-medium text-slate-700 mb-1">{t("exp.endDate")}</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={exp.endDate}
                                    onChange={(e) => updateExpField(index, "endDate", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2"
                                checked={exp.isCurrent}
                                onChange={(e) => updateExpField(index, "isCurrent", e.target.checked)}
                            />
                            <label className="text-sm text-slate-600">{t("exp.current")}</label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">{t("exp.description")}</label>
                            <textarea
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none min-h-[100px] text-slate-900"
                                value={exp.description}
                                onChange={(e) => updateExpField(index, "description", e.target.value)}
                                placeholder={t("exp.description.ph")}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Step4({ data, update }: any) {
    const { t } = useLanguage();
    const predefinedSkills = [
        "Teamwork", "Communication", "Responsibility", "Reliability",
        "Physical fitness", "Machine operation", "Manual dexterity",
        "Customer service", "Working under pressure", "Accuracy",
        "Work organisation", "Forklift operation",
    ];
    const [customSkill, setCustomSkill] = useState("");

    const toggleSkill = (skill: string) => {
        const newSkills = data.skills.includes(skill)
            ? data.skills.filter((s: string) => s !== skill)
            : [...data.skills, skill];
        update({ skills: newSkills });
    };

    const addCustomSkill = (e: any) => {
        if (e.key === "Enter" && customSkill.trim()) {
            if (!data.skills.includes(customSkill.trim())) {
                update({ skills: [...data.skills, customSkill.trim()] });
            }
            setCustomSkill("");
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">{t("skills.title")}</h2>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">{t("skills.core")}</label>
                <div className="flex flex-wrap gap-2">
                    {predefinedSkills.map((skill) => (
                        <button
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                            className={cn(
                                "px-4 py-2 rounded-full border text-sm font-medium transition",
                                data.skills.includes(skill)
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                            )}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">{t("skills.other")}</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    onKeyDown={addCustomSkill}
                    placeholder={t("skills.other.ph")}
                />
                <div className="flex flex-wrap gap-2 mt-4">
                    {data.skills.filter((s: string) => !predefinedSkills.includes(s)).map((skill: string) => (
                        <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm flex items-center">
                            {skill}
                            <button
                                onClick={() => toggleSkill(skill)}
                                className="ml-2 text-slate-400 hover:text-red-500"
                            >✕</button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Step5({ data, update }: any) {
    const { t } = useLanguage();
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const commonLanguages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Dutch", "Russian", "Chinese", "Japanese", "Korean", "Polish", "Ukrainian", "Other"];
    const [newLang, setNewLang] = useState({ name: "English", level: "B1" });
    const [customLangName, setCustomLangName] = useState("");

    const addLanguage = () => {
        const name = newLang.name === "Other" ? customLangName : newLang.name;
        if (name.trim()) {
            update({ languages: [...data.languages, { name: name.trim(), level: newLang.level }] });
            setNewLang({ name: "English", level: "B1" });
            setCustomLangName("");
        }
    };

    const removeLanguage = (index: number) => {
        update({ languages: data.languages.filter((_: any, i: number) => i !== index) });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">{t("lang.title")}</h2>

            <div className="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <select
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                            value={newLang.name}
                            onChange={(e) => setNewLang({ ...newLang, name: e.target.value })}
                        >
                            {commonLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                        </select>
                    </div>
                    <div className="w-32">
                        <select
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                            value={newLang.level}
                            onChange={(e) => setNewLang({ ...newLang, level: e.target.value })}
                        >
                            {levels.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                    </div>
                </div>

                {newLang.name === "Other" && (
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={customLangName}
                        onChange={(e) => setCustomLangName(e.target.value)}
                        placeholder="Type language name..."
                    />
                )}

                <button
                    onClick={addLanguage}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    {t("lang.add")}
                </button>
            </div>

            <div className="space-y-2">
                {data.languages.map((lang: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg bg-white">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-slate-800">{lang.name}</span>
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-bold">{lang.level}</span>
                        </div>
                        <button onClick={() => removeLanguage(index)} className="text-slate-400 hover:text-red-500">
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Step6({ data, update }: any) {
    const { t } = useLanguage();
    const [customType, setCustomType] = useState("");
    const licenseTypes = ["A", "B", "C", "D", "BE", "CE", "T"];

    const toggleType = (type: string) => {
        const types = data.driversLicense.types.includes(type)
            ? data.driversLicense.types.filter((t: string) => t !== type)
            : [...data.driversLicense.types, type];
        update({ driversLicense: { ...data.driversLicense, types } });
    };

    const addCustomType = () => {
        const normalizedType = customType.trim().toUpperCase();
        if (!normalizedType || data.driversLicense.types.includes(normalizedType)) {
            setCustomType("");
            return;
        }

        update({
            driversLicense: {
                ...data.driversLicense,
                types: [...data.driversLicense.types, normalizedType],
            },
        });
        setCustomType("");
    };

    const customSelectedTypes = data.driversLicense.types.filter(
        (type: string) => !licenseTypes.includes(type)
    );

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">{t("license.title")}</h2>
            <div className="flex items-center mb-6">
                <input
                    type="checkbox"
                    id="has-license"
                    className="w-5 h-5 mr-3"
                    checked={data.driversLicense.hasLicense}
                    onChange={(e) => update({ driversLicense: { ...data.driversLicense, hasLicense: e.target.checked } })}
                />
                <label htmlFor="has-license" className="text-lg text-slate-700">{t("license.has")}</label>
            </div>

            {data.driversLicense.hasLicense && (
                <div className="space-y-3 p-4 bg-slate-50 rounded-lg border">
                    <label className="block text-sm font-medium text-slate-700">{t("license.types")}</label>
                    <div className="flex flex-wrap gap-3">
                        {licenseTypes.map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => toggleType(type)}
                                className={cn(
                                    "px-6 py-2 rounded-lg border font-bold transition",
                                    data.driversLicense.types.includes(type)
                                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                                )}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            value={customType}
                            onChange={(e) => setCustomType(e.target.value.toUpperCase())}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    addCustomType();
                                }
                            }}
                            placeholder={t("license.custom.ph")}
                            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-white"
                        />
                        <button
                            type="button"
                            onClick={addCustomType}
                            className="px-5 py-2 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium hover:bg-blue-50 transition"
                        >
                            {t("license.custom.add")}
                        </button>
                    </div>

                    {customSelectedTypes.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {customSelectedTypes.map((type: string) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => toggleType(type)}
                                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold border border-blue-200"
                                >
                                    {type} ×
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function Step7({ data, update }: any) {
    const { t } = useLanguage();
    const addCert = () => {
        update({ certificates: [...data.certificates, { name: "", organization: "", year: new Date().getFullYear() }] });
    };

    const removeCert = (index: number) => {
        update({ certificates: data.certificates.filter((_: any, i: number) => i !== index) });
    };

    const updateCert = (index: number, field: string, value: any) => {
        const list = [...data.certificates];
        list[index] = { ...list[index], [field]: value };
        update({ certificates: list });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800">{t("cert.title")}</h2>
                <button onClick={addCert} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md">
                    {t("cert.add")}
                </button>
            </div>

            {data.certificates.length === 0 && (
                <div className="text-center py-10 bg-slate-50 rounded-lg border border-dashed text-slate-400">
                    {t("cert.empty")}
                </div>
            )}

            <div className="space-y-4">
                {data.certificates.map((cert: any, index: number) => (
                    <div key={index} className="p-4 border rounded-lg bg-slate-50 relative group">
                        <button onClick={() => removeCert(index)} className="absolute top-2 right-2 text-slate-400 hover:text-red-500">✕</button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">{t("cert.name")}</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 border rounded-md text-slate-900"
                                    value={cert.name}
                                    onChange={(e) => updateCert(index, "name", e.target.value)}
                                    placeholder="AWS Certified Solutions Architect"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">{t("cert.issuer")}</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 border rounded-md text-slate-900"
                                    value={cert.organization}
                                    onChange={(e) => updateCert(index, "organization", e.target.value)}
                                    placeholder="Amazon Web Services"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">{t("cert.year")}</label>
                                <input
                                    type="number"
                                    min="1900"
                                    max="2100"
                                    className="w-full px-3 py-1.5 border rounded-md text-slate-900"
                                    value={Number.isFinite(cert.year) ? cert.year : ""}
                                    onChange={(e) => {
                                        const parsed = parseInt(e.target.value, 10);
                                        updateCert(index, "year", Number.isFinite(parsed) ? parsed : new Date().getFullYear());
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Step8({ data, update }: any) {
    const { t } = useLanguage();
    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) { // 10MB
            update({ cvFile: file });
        } else if (file) {
            alert("File is too large. Max 10MB allowed.");
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">{t("upload.title")}</h2>
            <p className="text-slate-500 text-sm">{t("upload.desc")}</p>
            <div className="p-8 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 text-center">
                <input
                    type="file"
                    id="cv-upload"
                    className="hidden"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                />
                <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
                    <span className="text-4xl mb-4 text-slate-400">📄</span>
                    <span className="text-lg font-medium text-slate-700">
                        {data.cvFile ? data.cvFile.name : t("upload.btn")}
                    </span>
                    <span className="text-sm text-slate-400 mt-2">Max 10MB</span>
                </label>
            </div>
            <p className="text-slate-400 text-xs">{t("upload.skip")}</p>
        </div>
    );
}

function Step9({ data, update }: any) {
    const { t } = useLanguage();
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">{t("gdpr.title")}</h2>

            {/* Full privacy policy link */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-blue-600 hover:underline"
                >
                    {t("gdpr.policy.link")} →
                </a>
            </div>

            {/* Consent checkbox */}
            <div className={cn(
                "p-6 rounded-xl border-2 transition",
                data.gdprConsent ? "bg-green-50 border-green-300" : "bg-slate-50 border-slate-200"
            )}>
                <div className="flex items-start gap-4">
                    <input
                        type="checkbox"
                        id="gdpr"
                        className="w-5 h-5 mt-1 accent-blue-600 cursor-pointer flex-shrink-0"
                        checked={data.gdprConsent}
                        onChange={(e) => update({ gdprConsent: e.target.checked })}
                    />
                    <label htmlFor="gdpr" className="text-slate-700 leading-relaxed text-sm cursor-pointer">
                        {t("gdpr.consent.label")}
                    </label>
                </div>
            </div>

            {!data.gdprConsent && (
                <p className="text-xs text-red-500 font-medium">{t("gdpr.required")}</p>
            )}
        </div>
    );
}
