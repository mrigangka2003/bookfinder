import { useState, useRef } from "react";
import { BASE_URL, API_KEY } from "../lib/api";
import book from "../assets/book.svg";

interface Book {
    id: string;
    title: string;
    authors?: string[];
    thumbnail?: string;
    infoLink: string;
}

export default function Home() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const resultsRef = useRef<HTMLDivElement>(null);

    const searchBooks = async () => {
        const q = query.trim();
        if (!q) return;
        setLoading(true);
        setError("");

        setTimeout(() => {
            resultsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);

        try {
            const res = await fetch(
                `${BASE_URL}?q=${encodeURIComponent(q)}&key=${API_KEY}`
            );
            const data = await res.json();
            if (!res.ok) throw new Error(data.error?.message || "API error");
            setBooks(
                (data.items || []).map((i: any) => ({
                    id: i.id,
                    title: i.volumeInfo.title,
                    authors: i.volumeInfo.authors,
                    thumbnail: i.volumeInfo.imageLinks?.thumbnail?.replace(
                        "http:",
                        "https:"
                    ),
                    infoLink: i.volumeInfo.infoLink,
                }))
            );
        } catch (err: any) {
            setError(err.message || "Failed");
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") searchBooks();
    };

    const showBooks = !loading && !error && books.length > 0;
    const showSorry = !loading && !error && books.length === 0 && query;

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    />
                </div>

                {/* BOOK ON TOP OF TITLE */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center">
                    {/* book icon first */}
                    <div className="mb-6">
                        <img
                            src={book}
                            alt=""
                            className="w-100 h-100 md:w-32 md:h-32 object-contain drop-shadow-lg"
                        />
                    </div>

                    <div className="mb-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-indigo-100/80 text-indigo-700 text-sm font-medium mb-4">
                            Discover Your Next Read
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-slate-800 mb-4">
                        Where every page turns
                        <br />
                        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                            into an adventure
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl my-6 ">
                        Search millions of books and find your perfect match
                    </p>
                </div>

                {/* refined search area */}
                <div className="relative z-10 w-full max-w-2xl px-6 pb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-2">
                        <div className="flex gap-2">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={onKeyDown}
                                placeholder="Search by title, author, or ISBN..."
                                className="flex-1 px-6 py-4 rounded-xl bg-transparent focus:outline-none text-slate-800 placeholder-slate-400"
                            />
                            <button
                                onClick={searchBooks}
                                disabled={loading}
                                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Searching..." : "Search"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={resultsRef} className="flex-1 bg-white px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
                            <p className="text-slate-600 text-lg">
                                Searching for books...
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-6 h-6 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-red-900 mb-2">
                                Something went wrong
                            </h3>
                            <p className="text-red-700">{error}</p>
                        </div>
                    )}

                    {showSorry && (
                        <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-slate-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                No books found
                            </h2>
                            <p className="text-slate-600">
                                Try adjusting your search or explore something
                                new
                            </p>
                        </div>
                    )}

                    {showBooks && (
                        <>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                                    Search Results
                                </h2>
                                <p className="text-slate-600">
                                    Found {books.length} book
                                    {books.length !== 1 ? "s" : ""}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                                {books.map((book) => (
                                    <a
                                        key={book.id}
                                        href={book.infoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group block rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                    >
                                        <div className="relative overflow-hidden bg-slate-100">
                                            <img
                                                src={
                                                    book.thumbnail ||
                                                    "https://via.placeholder.com/128x192?text=No+Cover"
                                                }
                                                alt={book.title}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-sm text-slate-800 line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">
                                                {book.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 line-clamp-1">
                                                {book.authors?.join(", ") ||
                                                    "Unknown Author"}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
