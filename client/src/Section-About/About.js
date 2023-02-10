import PropertyHighlightsCards from "./PropertyHighlightsCards";

function About() {
    // const creListingLink =
    //     "https://looplink.logiccre.com/Listing/300-328-S-Wells-Ave-Reno-NV/20673499/";
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";

    return (
        <div className="col section mx-auto my-2 justify-content-center p-4">
            <h4 className="my-3 p-1 rounded text-uppercase ">About</h4>
            <div className="row">
                <p className="mt-2">
                    300 South Wells Ave. consists of two buildings totaling
                    40,852 SF on 2.30 AC of land with 144 Parking Spaces. The
                    property is strategically located in a dense and mature
                    residential and commercial area servicing +/- 249,817
                    residents with an average household income of $109,381
                    within a 5-mile radius.
                </p>
            </div>
            <PropertyHighlightsCards />

            <div className="row mt-5 justify-content-center">
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
