import { Github, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 border-t border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-700">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        <span>by</span>
                        <span className="font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                            Mrigangka Datta
                        </span>
                    </div>

                    <a
                        href="https://www.github.com/mrigangka/bookfinder"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 hover:bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        <Github className="w-5 h-5 text-slate-700" />
                        <span className="text-sm font-medium text-slate-700">
                            View on GitHub
                        </span>
                    </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} BookFinder. A quick
                        frontend project built with React & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
