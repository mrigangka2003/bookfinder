import { Github, Linkedin, Mail, Code, Book, Sparkles } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 py-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-indigo-100/80 text-indigo-700 text-sm font-medium mb-6">
                        About the Developer
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                            Mrigangka Datta
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Frontend Developer crafting beautiful and functional web
                        experiences
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        {/* Profile Image */}
                        <div className="md:col-span-1">
                            <div className="sticky top-8">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                                    <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                                        <img
                                            src="https://gogreenplus.in/assets/mrigangkadatta-B3WfkZ_q.jpeg"
                                            alt="Mrigangka Datta"
                                            className="w-full aspect-square object-cover rounded-xl"
                                        />
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-6 space-y-3">
                                    <a
                                        href="https://www.github.com/mrigangka2003"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
                                    >
                                        <Github className="w-5 h-5 text-slate-700" />
                                        <span className="text-sm font-medium text-slate-700">
                                            GitHub
                                        </span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/mrigangka"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
                                    >
                                        <Linkedin className="w-5 h-5 text-slate-700" />
                                        <span className="text-sm font-medium text-slate-700">
                                            LinkedIn
                                        </span>
                                    </a>
                                    <a
                                        href="mailto:mrigangkadatta15@gmail.com"
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
                                    >
                                        <Mail className="w-5 h-5 text-slate-700" />
                                        <span className="text-sm font-medium text-slate-700">
                                            Email
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2 space-y-8">
                            {/* About Me */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-6 h-6 text-indigo-600" />
                                    About Me
                                </h2>
                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        I'm a passionate Full stack developer with
                                        a keen eye for design and user
                                        experience. I love creating intuitive,
                                        visually appealing web applications that
                                        solve real-world problems.
                                    </p>
                                    <p>
                                        My expertise lies in modern web
                                        technologies including React,
                                        TypeScript, and Tailwind CSS,Node.Js, Express.Js and Mongodb and postgresql. I believe
                                        in writing clean, maintainable code and
                                        staying up-to-date with the latest
                                        industry trends and best practices.
                                    </p>
                                    <p>
                                        When I'm not coding, you can find me
                                        exploring new technologies, contributing
                                        to open-source projects, or reading
                                        about web development and design
                                        patterns.
                                    </p>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Book className="w-6 h-6 text-indigo-600" />
                                    About This Project
                                </h2>
                                <div className="space-y-4 text-slate-700 leading-relaxed">
                                    <p>
                                        <strong className="text-indigo-700">
                                            BookFinder
                                        </strong>{" "}
                                        is a quick frontend project developed as
                                        part of an assignment for a oragnization. The
                                        goal was to create a clean, professional
                                        book search application that
                                        demonstrates modern web development
                                        practices.
                                    </p>
                                    <p>
                                        This project showcases my ability to
                                        rapidly prototype and deliver
                                        production-ready interfaces using React
                                        and Tailwind CSS, with a focus on user
                                        experience and visual polish.
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-indigo-200">
                                        <h3 className="font-semibold text-slate-800 mb-3">
                                            Key Features:
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-600 mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Real-time book search using
                                                    Google Books API
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-600 mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Responsive design that works
                                                    seamlessly on all devices
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-600 mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Smooth animations and
                                                    intuitive user interactions
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-600 mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Auto-scroll functionality
                                                    for better UX
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-indigo-600 mt-1">
                                                    •
                                                </span>
                                                <span>
                                                    Professional UI with modern
                                                    design principles
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Code className="w-6 h-6 text-indigo-600" />
                                    Tech Stack
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "React",
                                        "TypeScript",
                                        "Tailwind CSS",
                                        "Google Books API",
                                        "Lucide Icons",
                                        "Vite",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                                <h3 className="text-2xl font-bold mb-3">
                                    Let's Connect!
                                </h3>
                                <p className="mb-6 text-indigo-100">
                                    Interested in working together or have a
                                    project in mind?
                                </p>
                                <a
                                    href="mailto:mrigangka@example.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-medium hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                                >
                                    <Mail className="w-5 h-5" />
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
