import { useState } from "react";
import About from "../Section-About/About";
import BrandsContainer from "../Section-Brands/BrandsContainer";
import Carousel from "./Carousel";
// import Contact from "../Section-Contact/Contact";
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
        <div className="container-fluid m-auto text-center main-content">
            <HeroImage />
            {/* <Carousel /> */}
            <About />
            <div className="row p-2 mt-0 w-auto justify-content-center">
                <PropertyMap />
                <hr className="hr-line-width my-2" />
                <div className="mb-1">
                    <PropertyDetails />
                </div>
            </div>
            <ForLease />
            <Courtyard />
            <hr className="hr-line-width mx-auto p-4" />
            <BrandsContainer />
            {toTopButton ? <ToTopButton /> : null}
        </div>
    );
}

export default Landing;
