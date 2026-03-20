import WizardForm from "@/components/wizard/WizardForm";

export default function NewCandidatePage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Build Your Professional CV
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        Tell us about yourself, your experience, and your skills.
                    </p>
                </div>

                <WizardForm />

                <div className="mt-12 text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} CV Click Builder. All rights reserved.
                </div>
            </div>
        </div>
    );
}
