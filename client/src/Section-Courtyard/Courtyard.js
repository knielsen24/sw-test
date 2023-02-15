import phoneIcon from "../assets/Icons/phone-icon.svg";
import emailIcon from "../assets/Icons/email-icon.svg";
import nielsenLogo from "../assets/Logos/nielsen-logo.png";

function Courtyard() {
    const courtyardOne =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668067047/Southwells/courtyard/sw-courtyard-1_lburt2.jpg";
    const contactClassPtag = " m-1 mx-2";
    const contactColTag = "col-6 my-2 contact-col";
    // const pTagClass = "mb-3";

    return (
        <div className="col section mx-auto my-3 justify-content-center p-2">
            <div className="my-4">
                <h4 className="p-2 fw-bold text-uppercase">The Courtyard</h4>
                <p>An intimate event venue perfect for your party</p>
            </div>

            <div className="row">
                <div className="col courtyard-container mx-auto">
                    <div className="rounded-4">
                        <img
                            src={courtyardOne}
                            className="rounded d-block w-100 carousel-cover"
                            alt="courtyard"
                        />
                    </div>
                    {/* <div className=" mint-bg ">
                        <a
                            href="#contact"
                            className="btn btn-sm btn-primary shadow-sm text-uppercase"
                        >
                            Contact Info
                        </a>
                        <p className="">More info coming soon</p>
                    </div> */}
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <h5 className="py-1 m-1 text-decoration-underline text-uppercase">
                        Contact Information
                    </h5>
                    <div>
                        <img
                            className="py-2"
                            src={nielsenLogo}
                            alt="nielsen-logo"
                            width="250px"
                        />
                    </div>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        805-320-3638
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-2 mb-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        Info@300SouthWells.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Courtyard;
