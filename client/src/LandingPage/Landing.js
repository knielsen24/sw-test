import { useState } from "react";
import About from "../Section-About/About";
import BrandsContainer from "../Section-Brands/BrandsContainer";
import Courtyard from "../Section-Courtyard/Courtyard";
import ForLease from "../Section-ForLease/ForLease";
import PropertyDetails from "../Section-About/PropertyDetails";
import PropertyMap from "../Section-About/PropertyMap";
import ToTopButton from "./ToTopButton";
import HeroImage from "./HeroImage";

function Landing() {
    const [toTopButton, setToTopButton] = useState(false);

    const showButton = () => {
        if (window.scrollY >= 220) {
            setToTopButton(true);
        } else {
            setToTopButton(false);
        }
    };

    window.addEventListener("scroll", showButton);

    return (
        <div
            className="container-fluid m-auto text-center main-content"
            id="top-page"
        >
            <HeroImage />
            <About />
            <PropertyMap />
            <div className="row mx-auto px-3 hr-line justify-content-center">
                <hr className="my-3" />
            </div>
            <PropertyDetails />
            <ForLease />
            <Courtyard />
            <hr className="hr-line-width mx-auto p-4" />
            <BrandsContainer />
            {toTopButton ? <ToTopButton /> : null}
        </div>
    );
}

export default Landing;
