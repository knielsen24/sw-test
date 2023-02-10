import { useState } from "react";
import About from "../Section-About/About";
import BrandsContainer from "../Section-Brands/BrandsContainer";
import Carousel from "./Carousel";
import Contact from "../Section-Contact/Contact";
import Courtyard from "../Section-Courtyard/Courtyard";
import ForLease from "./ForLease";
import chevronUp from "../assets/Icons/chevron-up.svg";
import PropertyHighlights from "../Section-About/PropertyHighlights";
import PropertyMap from "../Section-About/PropertyMap";

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
                className="bg-white border border-secondary bg-opacity-75 rounded-4 p-2"
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
        <div className="container-fluid text-center main-content">
            <div className="row p-0 w-auto justify-content-center">
                <Carousel />
            </div>
            <div className="row p-1 my-5 w-auto justify-content-center mint-bg " id="about">
                <About />
            </div>
            {/* <div className="row p-1 my-5 w-auto justify-content-center  " id="highlights">
                <PropertyHighlights />
                <PropertyMap />
            </div> */}
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
