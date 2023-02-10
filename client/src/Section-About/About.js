import PropertyHighlightsCards from "./PropertyHighlightsCards";

function About() {
    // const creListingLink =
    //     "https://looplink.logiccre.com/Listing/300-328-S-Wells-Ave-Reno-NV/20673499/";
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";

    const liClassName =
        "bg-transparent list-group-item border border-0 text-capitalize";

    return (
        <div className="col section mx-auto my-2 justify-content-center p-4">
            <h4 className="my-2 pb-4 text-capitalize border-bottom border-secondary ">
                Property Highlights
            </h4>
            <div className="row">
                <p className="my-3">
                    300 South Wells Ave. consists of two buildings strategically
                    located in a dense and mature residential and commercial
                    area.
                </p>
            </div>
            <div className="row">
                <PropertyHighlightsCards />
            </div>
            <div className="row">
                <div className="col mx-auto list-width">
                    <ul className="list-group rounded">
                        <li className={liClassName}>
                            <div className="row justify-content-start">
                                <div className="col fw-bold text-end">
                                    40,852
                                </div>
                                <div className="col ps-0 me-5 text-start">
                                    sq ft on 2.30 Acres
                                </div>
                            </div>
                        </li>
                        <li className={liClassName}>
                            <div className="row justify-content-start">
                                <div className="col fw-bold text-end">144</div>
                                <div className="col ps-0 me-5 text-start">
                                    Parking Spaces
                                </div>
                            </div>
                        </li>
                        <li className={liClassName}>
                            <div className="row justify-content-start">
                                <div className="col fw-bold text-end">
                                    +/- 249,817
                                </div>
                                <div className="col ps-0 me-5 text-start">
                                    residents serviced
                                </div>
                            </div>
                        </li>
                        <li className={liClassName}>
                            <div className="row justify-content-start">
                                <div className="col fw-bold text-end">
                                    $109,381
                                </div>
                                <div className="col ps-0 me-5 text-start">
                                    average household income within 5-mile
                                    radius
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

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
