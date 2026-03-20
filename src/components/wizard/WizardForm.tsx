"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const STEPS = [
    "Basic Info",
    "Education",
    "Experience",
    "Skills",
    "Languages",
    "License",
    "Certificates",
    "Upload",
    "GDPR",
];

export default function WizardForm() {
    const router = useRouter();
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

    const isLastStep = currentStep === STEPS.length;

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const data = new FormData();

            // Append basic fields
            data.append("firstName", formData.firstName);
            data.append("lastName", formData.lastName);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("city", formData.city);
            data.append("desiredPosition", formData.desiredPosition);
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
                        Step {currentStep} of {STEPS.length}
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
                    Previous
                </button>
                <button
                    onClick={isLastStep ? handleSubmit : nextStep}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md disabled:bg-blue-400"
                >
                    {loading ? "Submitting..." : isLastStep ? "Submit CV" : "Next Step"}
                </button>
            </div>
        </div>
    );
}

function Step1({ data, update }: any) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.firstName}
                        onChange={(e) => update({ firstName: e.target.value })}
                        placeholder="John"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.lastName}
                        onChange={(e) => update({ lastName: e.target.value })}
                        placeholder="Doe"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.email}
                        onChange={(e) => update({ email: e.target.value })}
                        placeholder="john.doe@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.phone}
                        onChange={(e) => update({ phone: e.target.value })}
                        placeholder="+1 234 567 890"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">City / Region *</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.city}
                        onChange={(e) => update({ city: e.target.value })}
                        placeholder="New York, NY"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Desired Position *</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                        value={data.desiredPosition}
                        onChange={(e) => update({ desiredPosition: e.target.value })}
                        placeholder="Software Engineer"
                    />
                </div>
            </div>
        </div>
    );
}

function Step2({ data, update }: any) {
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
                <h2 className="text-xl font-bold text-slate-800">Education</h2>
                <button
                    onClick={addEducation}
                    className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition"
                >
                    + Add Education
                </button>
            </div>

            {data.education.length === 0 && (
                <div className="text-center py-10 bg-slate-50 rounded-lg border border-dashed text-slate-400">
                    No education added yet. Click "+ Add Education" to start.
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
                            <label className="block text-sm font-medium text-slate-700 mb-1">Level</label>
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
                            <label className="block text-sm font-medium text-slate-700 mb-1">School / University</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={edu.school}
                                onChange={(e) => updateEduField(index, "school", e.target.value)}
                                placeholder="Harvard University"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Field of Study</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={edu.field}
                                onChange={(e) => updateEduField(index, "field", e.target.value)}
                                placeholder="Computer Science"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={edu.startDate}
                                    onChange={(e) => updateEduField(index, "startDate", e.target.value)}
                                />
                            </div>
                            <div className={edu.isCurrent ? "opacity-30 pointer-events-none" : ""}>
                                <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
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
                            <label className="text-sm text-slate-600">I am currently studying here</label>
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
                <h2 className="text-xl font-bold text-slate-800">Work Experience</h2>
                <button
                    onClick={addExperience}
                    className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100 transition"
                >
                    + Add Experience
                </button>
            </div>

            {data.workExperience.length === 0 && (
                <div className="text-center py-10 bg-slate-50 rounded-lg border border-dashed text-slate-400">
                    No experience added yet. Click "+ Add Experience" to start.
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
                            <label className="block text-sm font-medium text-slate-700 mb-1">Position</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={exp.position}
                                onChange={(e) => updateExpField(index, "position", e.target.value)}
                                placeholder="Senior Developer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                            <input
                                type="text"
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={exp.company}
                                onChange={(e) => updateExpField(index, "company", e.target.value)}
                                placeholder="Tech Corp Inc."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                            <select
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                value={exp.industry}
                                onChange={(e) => updateExpField(index, "industry", e.target.value)}
                            >
                                <option value="">— Select industry —</option>
                                {INDUSTRIES.map((ind) => (
                                    <option key={ind} value={ind}>{ind}</option>
                                ))}
                            </select>
                        </div>
                        {exp.industry === "Iné" && (
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Enter industry</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={exp.industryCustom}
                                    onChange={(e) => updateExpField(index, "industryCustom", e.target.value)}
                                    placeholder="e.g. IT, Marketing, Finance..."
                                />
                            </div>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-slate-900"
                                    value={exp.startDate}
                                    onChange={(e) => updateExpField(index, "startDate", e.target.value)}
                                />
                            </div>
                            <div className={exp.isCurrent ? "opacity-30 pointer-events-none" : ""}>
                                <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
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
                            <label className="text-sm text-slate-600">I currently work here</label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                            <textarea
                                className="w-full px-3 py-1.5 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none min-h-[100px] text-slate-900"
                                value={exp.description}
                                onChange={(e) => updateExpField(index, "description", e.target.value)}
                                placeholder="Describe your responsibilities and achievements..."
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Step4({ data, update }: any) {
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
            <h2 className="text-xl font-bold text-slate-800">Skills</h2>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Core Skills</label>
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
                <label className="block text-sm font-medium text-slate-700 mb-3">Other Skills (press Enter to add)</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    onKeyDown={addCustomSkill}
                    placeholder="Type a skill and press Enter..."
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
            <h2 className="text-xl font-bold text-slate-800">Languages</h2>

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
                    + Add Language
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
    const licenseTypes = ["A", "B", "C", "D", "BE", "CE"];

    const toggleType = (type: string) => {
        const types = data.driversLicense.types.includes(type)
            ? data.driversLicense.types.filter((t: string) => t !== type)
            : [...data.driversLicense.types, type];
        update({ driversLicense: { ...data.driversLicense, types } });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">Driver's License</h2>
            <div className="flex items-center mb-6">
                <input
                    type="checkbox"
                    id="has-license"
                    className="w-5 h-5 mr-3"
                    checked={data.driversLicense.hasLicense}
                    onChange={(e) => update({ driversLicense: { ...data.driversLicense, hasLicense: e.target.checked } })}
                />
                <label htmlFor="has-license" className="text-lg text-slate-700">I have a driver's license</label>
            </div>

            {data.driversLicense.hasLicense && (
                <div className="space-y-3 p-4 bg-slate-50 rounded-lg border">
                    <label className="block text-sm font-medium text-slate-700">License Types</label>
                    <div className="flex flex-wrap gap-3">
                        {licenseTypes.map((type) => (
                            <button
                                key={type}
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
                </div>
            )}
        </div>
    );
}

function Step7({ data, update }: any) {
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
                <h2 className="text-xl font-bold text-slate-800">Certificates</h2>
                <button onClick={addCert} className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-md">
                    + Add Certificate
                </button>
            </div>

            <div className="space-y-4">
                {data.certificates.map((cert: any, index: number) => (
                    <div key={index} className="p-4 border rounded-lg bg-slate-50 relative group">
                        <button onClick={() => removeCert(index)} className="absolute top-2 right-2 text-slate-400 hover:text-red-500">✕</button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Certificate Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 border rounded-md text-slate-900"
                                    value={cert.name}
                                    onChange={(e) => updateCert(index, "name", e.target.value)}
                                    placeholder="AWS Certified Solutions Architect"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Organization</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-1.5 border rounded-md text-slate-900"
                                    value={cert.organization}
                                    onChange={(e) => updateCert(index, "organization", e.target.value)}
                                    placeholder="Amazon Web Services"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Year</label>
                                <input
                                    type="number"
                                    className="w-full px-3 py-1.5 border rounded-md text-slate-900"
                                    value={cert.year}
                                    onChange={(e) => updateCert(index, "year", parseInt(e.target.value))}
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
            <h2 className="text-xl font-bold text-slate-800">Upload CV</h2>
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
                        {data.cvFile ? data.cvFile.name : "Click to upload your CV (PDF or DOCX)"}
                    </span>
                    <span className="text-sm text-slate-400 mt-2">Max 10MB</span>
                </label>
            </div>
        </div>
    );
}

function Step9({ data, update }: any) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800">GDPR Consent</h2>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start">
                    <input
                        type="checkbox"
                        id="gdpr"
                        className="w-6 h-6 mr-4 mt-1"
                        checked={data.gdprConsent}
                        onChange={(e) => update({ gdprConsent: e.target.checked })}
                    />
                    <label htmlFor="gdpr" className="text-slate-700 leading-relaxed">
                        I hereby give my consent for the processing of my personal data included in this application for the purpose of the recruitment process under the General Data Protection Regulation (EU) 2016/679. I understand that I can withdraw my consent at any time.
                    </label>
                </div>
            </div>
        </div>
    );
}
