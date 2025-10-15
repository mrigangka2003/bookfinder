# bookfinder
# 📚 Book Finder App

A modern, minimal, and responsive **Book Finder** web application built with **React (Vite + TypeScript)**, **Tailwind CSS**, and the **Google Books API**.  
It allows users to search books by title, author, or ISBN and explore millions of books with smooth animations and elegant UI.

---

## ✨ Features

- 🔍 Search books using **Google Books API**
- 📖 View book covers, titles, and authors
- 🌗 Eye-comforting light theme
- ⚡ Built with **Vite** for blazing-fast performance
- 🎨 Styled using **Tailwind CSS** (minimal + modern)
- 🧩 Modular components structure
- 📱 Fully responsive (mobile-first design)
- 🚀 Easy to extend with new features (pagination, favorites, etc.)

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React](https://react.dev/) (Vite + TypeScript) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| API | [Google Books API](https://developers.google.com/books/docs/v1/using) |
| Icons & Assets | Custom SVGs (book.svg), [Lucide Icons](https://lucide.dev/) |
| State Management | React Hooks (`useState`, `useRef`) |

---

## 📁 Folder Structure

src
┣ assets
┃ ┣ book.svg # Book icon or logo asset
┃ ┗ react.svg # Default React/Vite logo
┣ components
┃ ┣ BookCard.tsx # Individual book display component
┃ ┣ Footer.tsx # Footer component
┃ ┣ Navbar.tsx # Navbar / Header with logo
┃ ┗ index.ts # Component exports
┣ lib
┃ ┗ api.ts # API base URL and key configuration
┣ pages
┃ ┣ About.tsx # About page
┃ ┣ Home.tsx # Main home page (book search UI)
┃ ┗ index.ts # Page exports
┣ App.tsx # Root app component with routing
┣ index.css # Global Tailwind styles
┗ main.tsx # React entry point (Vite)


---

## ⚙️ Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bookfinder.git
   cd bookfinder

    Install dependencies

npm install

Add your Google Books API Key

    Open src/lib/api.ts

    Add your key:

    export const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
    export const API_KEY = "YOUR_API_KEY_HERE";

**Run the app**

    npm run dev

**Open in browser**

    http://localhost:5173/

