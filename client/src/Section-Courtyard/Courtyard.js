import phoneIcon from "../assets/Icons/phone-icon.svg";
import emailIcon from "../assets/Icons/email-icon.svg";
import nielsenLogo from "../assets/Logos/nielsen-logo.png";

function Courtyard() {
    const courtyardOne =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668067047/Southwells/courtyard/sw-courtyard-1_lburt2.jpg";
    const contactClassPtag = " m-1 mx-2";
    // const contactColTag = "col-6 my-2 contact-col";
    // const pTagClass = "mb-3";

    return (
        <div
            className="row mb-3 py-5 w-auto justify-content-center"
            id="courtyard"
        >
            <div className="col section mx-auto my-3 justify-content-center p-2">
                <div className="my-4">
                    <h3 className="p-2 fw-bold text-capitalize">
                        The Courtyard
                    </h3>
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
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <h4 className="py-3 m-1  fw-bold text-capitalize">
                            Reserve the space today
                        </h4>

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
                        <div className="p-3 mt-3">
                            <img
                                className="py-2"
                                src={nielsenLogo}
                                alt="nielsen-logo"
                                width="250px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courtyard;
