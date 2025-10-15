import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Home } from "./pages";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
