import { useState } from "react";
import southWellsLogo from "../assets/Logos/3SW-logo-rectangle.png";

function Navbar() {
    const [changeBackground, setChangeBackground] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 10) {
            setChangeBackground(true);
        } else {
            setChangeBackground(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    const navLinksClass = "nav-item m-1";
    const navATagClass = "nav-link pb-0 text-uppercase";

    return (
        <div
            className={
                changeBackground
                    ? "nav-header m-0 p-0 border-bottom shadow-sm nav-bg fixed-top "
                    : "nav-header m-0 p-0 fixed-top "
            }
        >
            <nav
                className="container navbar navbar-expand-lg rounded "
                id="navID"
            >
                <div className="container-fluid my-auto">
                    <a href="/">
                        <img
                            src={southWellsLogo}
                            alt="300 South Wells Logo"
                            width="150"
                            id="logo-name"
                        />
                    </a>
                    <button
                        className="navbar-toggler border-0 p-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div
                        className="collapse navbar-collapse "
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav ms-auto align-items-center ">
                            <li className="nav-item m-0">
                                <a
                                    className={navATagClass}
                                    aria-current="page"
                                    href="#about"
                                >
                                    About
                                </a>
                            </li>
                            <li className={navLinksClass}>
                                <a className={navATagClass} href="#courtyard">
                                    The Courtyard
                                </a>
                            </li>
                            <li className={navLinksClass}>
                                <a className={navATagClass} href="#for-lease">
                                    For Lease
                                </a>
                            </li>

                            <li className={navLinksClass}>
                                <a className={navATagClass} href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li className={navLinksClass}>
                                <a className={navATagClass} href="#partners">
                                    Patrons
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
