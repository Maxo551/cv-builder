import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-50 to-slate-100">
            <h1 className="text-4xl font-bold text-slate-900 mb-10 text-center">
                CV Click Builder
            </h1>

            {/* Candidates — main card */}
            <div className="p-10 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center max-w-md w-full transition-all hover:scale-105 mb-6">
                <h2 className="text-2xl font-bold mb-3 text-blue-600">For Candidates</h2>
                <p className="text-slate-600 mb-6 text-center">
                    Build your professional CV in minutes using our click-based wizard.
                </p>
                <Link
                    href="/candidate/new"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
                >
                    Create Your CV
                </Link>
            </div>

            {/* Admins — small secondary card */}
            <div className="p-4 bg-white rounded-xl shadow border border-slate-200 flex items-center gap-4 max-w-xs w-full">
                <div className="flex-1">
                    <h2 className="text-sm font-semibold text-slate-500">For Admins</h2>
                </div>
                <Link
                    href="/admin/login"
                    className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition whitespace-nowrap"
                >
                    Sign In
                </Link>
            </div>
        </main>
    );
}
