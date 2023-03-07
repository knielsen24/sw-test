import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <body
            className="container-fluid mx-auto p-0"
            data-bs-spy="scroll"
            data-bs-target="#navID"
            data-offset="100"
            id="app-container"
        >
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Landing />} />


            </Routes>

            <Footer />
        </body>
    );
}

export default App;
