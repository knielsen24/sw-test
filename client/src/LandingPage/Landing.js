import { useState } from "react";
import About from "../Section-About/About";
import BrandsContainer from "../Section-Brands/BrandsContainer";
import Carousel from "./Carousel";
// import Contact from "../Section-Contact/Contact";
import Courtyard from "../Section-Courtyard/Courtyard";
import ForLease from "../Section-About/ForLease";
import PropertyDetails from "../Section-About/PropertyDetails";
import PropertyMap from "../Section-About/PropertyMap";
import ToTopButton from "./ToTopButton";

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
            <Carousel />
            <About />
            <div
                className="row p-2 mt-0 w-auto justify-content-center bg-white "
                id="highlights"
            >
                <PropertyMap />
                <hr className="hr-line-width my-2" />
                <div className="mb-1">
                    <PropertyDetails />
                </div>
            </div>
            <ForLease />
            <Courtyard />
            <BrandsContainer />
            {toTopButton ? <ToTopButton /> : null}
        </div>
    );
}

export default Landing;
