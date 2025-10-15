import { Link } from "react-router-dom";

type BookCardProps = {
    id: string;
    title: string;
    authors: string[];
    thumbnail?: string | null;
};

const BookCard = ({ id, title, authors, thumbnail }: BookCardProps) => {
    return (
        <Link
            to={`/books/${id}`}
            className="border rounded-md p-4 hover:shadow-lg transition flex gap-4"
        >
            {thumbnail && (
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-24 h-32 object-cover"
                />
            )}
            <div>
                <h2 className="font-bold text-lg">{title}</h2>
                <p className="text-gray-600">{authors.join(", ")}</p>
            </div>
        </Link>
    );
};

export default BookCard;
