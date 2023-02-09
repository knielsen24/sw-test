import toolsIcon from "../assets/Icons/tools-icon.svg";
import hospitalIcon from "../assets/Icons/hospital-icon.svg";
import carIcon from "../assets/Icons/car-icon.svg";
import bricksIcon from "../assets/Icons/bricks-icon.svg";
import sunIcon from "../assets/Icons/sun-icon.svg";

function About() {
    // const creListingLink =
    //     "https://looplink.logiccre.com/Listing/300-328-S-Wells-Ave-Reno-NV/20673499/";
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";

    const pTagClass = "mt-3";

    return (
        <div className="col mt-2 justify-content-center p-1">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase ">
                About
            </h4>

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

            <div className="col mt-2">
                <div className="row">
                    <h5 className="text-decoration-underline">
                        Property Highlights
                    </h5>
                </div>
                <div className="row mt-3 justify-content-center">
                    <div className="col prop-highlights">
                        <img classname="m-5" src={bricksIcon} width="30px" alt="brick icon" />
                        <p className={pTagClass}>
                            Recently redeveloped multi-tenant mixed-use building
                        </p>
                    </div>
                    <div className="col prop-highlights">
                        <img classname="m-5" src={hospitalIcon} width="30px" alt="hospital icon" />
                        <p className={pTagClass}>
                            Close proximity to Renown Regional Medical Center
                            and Downtown Reno
                        </p>
                    </div>
                    <div className="col prop-highlights">
                        <img classname="m-5" src={toolsIcon} width="30px" alt="tools icon" />
                        <p className={pTagClass}>
                            Zoned for retail, office, and medical use
                        </p>
                    </div>
                    <div className="col prop-highlights">
                        <img classname="m-5" src={sunIcon} width="30px" alt="sun icon" />
                        <p className={pTagClass}>
                            Common area outdoor courtyard with attractive
                            amenities
                        </p>
                    </div>
                    <div className="col prop-highlights">
                        <img classname="m-5" src={carIcon} width="30px" alt="car icon" />
                        <p className={pTagClass}>
                            Easy access to I-80 via S. Wells Ave. or I-580 via
                            Mill St
                        </p>
                    </div>
                </div>
                <div className="row mb-4 justify-content-center">
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
        </div>
    );
}

export default About;
