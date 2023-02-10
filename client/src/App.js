import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <body
            className="container-fluid mx-auto p-0"
            data-bs-spy="scroll"
            data-bs-target="#navID"
            data-offset="100"
        >
            <Navbar />
            <Landing />
            <Footer />
        </body>
    );
}

export default App;
