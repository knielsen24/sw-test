import phoneIcon from "../assets/Icons/phone-icon.svg";
import emailIcon from "../assets/Icons/email-icon.svg";
import nielsenLogo from "../assets/Logos/nielsen-logo.png";
import { courtyardOne } from "../data/ImageURLS";

function Courtyard() {
    const contactClassPtag = " m-1 mx-2";
    // const contactColTag = "col-6 my-2 contact-col";
    // const pTagClass = "mb-3";

    return (
        <div className="row py-5 w-auto justify-content-center" id="courtyard">
            <div className="col section mx-auto mb-3 justify-content-center p-2">
                <div className="py-4">
                    <h2 className="py-3 fw-bold text-capitalize">
                        The Courtyard
                    </h2>
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
                        <h4 className="py-4 m-1  fw-bold text-capitalize">
                            Reserve the space today
                        </h4>

                        <p className={contactClassPtag}>
                            <img
                                className="me-2 pb-1"
                                src={phoneIcon}
                                alt="phone-icon"
                            />
                            805-320-3638
                        </p>
                        <p className={contactClassPtag}>
                            <img
                                className="me-2 pb-1"
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
