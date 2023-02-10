import PropertyCards from "./PropertyCards";
import PropertyHighlights from "./PropertyHighlights";
import PropertyMap from "./PropertyMap";

function About() {
    // const creListingLink =
    //     "https://looplink.logiccre.com/Listing/300-328-S-Wells-Ave-Reno-NV/20673499/";
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";

    const liClassName =
        "bg-transparent list-group-item border border-0 text-capitalize";

    return (
        <div className="col section mx-auto my-2 justify-content-center p-4">
            <div className="row ">
                <PropertyCards />
            </div>
            <div className="row">
                <p className="p-2 my-4">
                    300 South Wells Ave. consists of two buildings strategically
                    located in a dense and mature residential and commercial
                    area.
                </p>
            </div>
            <div className="row my-5">
                <PropertyHighlights />
                <PropertyMap />
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col">
                    <a
                        className="btn btn-primary btn-sm text-decoration-none shadow-sm text-uppercase"
                        target="_blank"
                        href={googleMaps}
                        rel="noreferrer"
                    >
                        view map location
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
