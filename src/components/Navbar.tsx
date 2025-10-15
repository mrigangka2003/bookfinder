import { Link, useLocation } from "react-router-dom";
import { Book } from "lucide-react";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                            <Book className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                            BookFinder
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 bg-slate-50/80 backdrop-blur-sm rounded-xl p-1.5 border border-slate-200/50">
                        <Link
                            to="/"
                            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                isActive("/")
                                    ? "bg-white text-indigo-600 shadow-sm"
                                    : "text-slate-600 hover:text-indigo-600 hover:bg-white/50"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                                isActive("/about")
                                    ? "bg-white text-indigo-600 shadow-sm"
                                    : "text-slate-600 hover:text-indigo-600 hover:bg-white/50"
                            }`}
                        >
                            About
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden items-center gap-2 bg-slate-50/80 backdrop-blur-sm rounded-xl p-1.5 border border-slate-200/50">
                        <Link
                            to="/"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                isActive("/")
                                    ? "bg-white text-indigo-600 shadow-sm"
                                    : "text-slate-600 hover:text-indigo-600 hover:bg-white/50"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                isActive("/about")
                                    ? "bg-white text-indigo-600 shadow-sm"
                                    : "text-slate-600 hover:text-indigo-600 hover:bg-white/50"
                            }`}
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
