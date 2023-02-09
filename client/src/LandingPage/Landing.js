import { useState } from "react";
import About from "./About";
import BrandsContainer from "./BrandsContainer";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Courtyard from "./Courtyard";
import ForLease from "./ForLease";
import chevronUp from "../assets/Icons/chevron-up.svg";

function Landing() {
    const [toTopButton, setToTopButton] = useState(false);

    const showButton = () => {
        if (window.scrollY >= 220) {
            setToTopButton(true);
        } else {
            setToTopButton(false);
        }
    };

    let renderButton;
    if (toTopButton) {
        renderButton = (
            <a
                className="bg-light border border-secondary border-opacity-50 rounded-4 p-1"
                id="toTopBtn"
                href="#banners-carousel"
            >
                <img
                    className="p-0 m-0"
                    src={chevronUp}
                    alt="chevronup"
                    width="30px"
                />
            </a>
        );
    }

    window.addEventListener("scroll", showButton);

    return (
        <div className="col text-center main-content">
            <div className=" row p-0 w-auto justify-content-center">
                <Carousel />
            </div>
            <div className=" row p-0 w-auto justify-content-center" id="about">
                <About />
            </div>

            <div
                className=" row p-0 w-auto justify-content-center"
                id="courtyard"
            >
                <Courtyard />
            </div>
            <div
                className=" row p-0 w-auto justify-content-center"
                id="for-lease"
            >
                <ForLease />
            </div>
            <div
                className=" row p-0 w-auto justify-content-center"
                id="contact"
            >
                <Contact />
            </div>

            <div
                className=" row p-0 w-auto justify-content-center"
                id="partners"
            >
                <BrandsContainer />
            </div>
            <div></div>
            {renderButton}
        </div>
    );
}

export default Landing;
