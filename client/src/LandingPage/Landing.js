import { useState } from "react";
import About from "../Section-About/About";
import BrandsContainer from "../Section-Brands/BrandsContainer";
import Carousel from "./Carousel";
import Contact from "../Section-Contact/Contact";
import Courtyard from "../Section-Courtyard/Courtyard";
import ForLease from "./ForLease";
import chevronUp from "../assets/Icons/chevron-up.svg";
import PropertyDetails from "../Section-About/PropertyDetails";
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
            <div
                className="row p-4 mt-5 mb-0 w-auto justify-content-center mint-bg "
                id="about"
            >
                <About />
            </div>
            <div
                className="row p-2 mt-0 w-auto justify-content-center bg-white "
                id="highlights"
            >
                <PropertyMap />
                <hr className="hr-line-width"/>
                <PropertyDetails />
            </div>
            <div
                className=" row p-0 w-auto justify-content-center mint-bg"
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
