import { useState } from "react";
import About from "../Section-About/About";
import BrandsContainer from "../Section-Brands/BrandsContainer";
import Courtyard from "../Section-Courtyard/Courtyard";
import ForLease from "../Section-ForLease/ForLease";
import PropertyDetails from "../Section-About/PropertyDetails";
import PropertyMap from "../Section-About/PropertyMap";
import ToTopButton from "./ToTopButton";
import HeroImage from "./HeroImage";
import HrDivider from "./HrDivider";

function Landing() {
    const [toTopButton, setToTopButton] = useState(false);

    const showButton = () => {
        (window.scrollY >= 700) ? setToTopButton(true) : setToTopButton(false);
        
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
            <>
                <HrDivider />
            </>
            <PropertyDetails />
            <ForLease />
            <Courtyard />
            <>
                <HrDivider />
            </>
            <BrandsContainer />
            {toTopButton ? <ToTopButton /> : null}
        </div>
    );
}

export default Landing;
