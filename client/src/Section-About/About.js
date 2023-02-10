import PropertyCards from "./PropertyCards";
import PropertyHighlights from "./PropertyMap";
import PropertyMap from "./PropertyDetails";

function About() {
    // const creListingLink =
    //     "https://looplink.logiccre.com/Listing/300-328-S-Wells-Ave-Reno-NV/20673499/";
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";

    return (
        <div className="col section mx-auto my-2 justify-content-center p-4">
            <div className="row">
                {" "}
                <h4 className="fw-bold text-capitalize mb-4">
                    Property highlights
                </h4>
            </div>

            <div className="row ">
                <PropertyCards />
            </div>
        </div>
    );
}

export default About;
