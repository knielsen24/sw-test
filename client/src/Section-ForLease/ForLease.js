import phoneIcon from "../assets/Icons/phone-icon.svg";
import emailIcon from "../assets/Icons/email-icon.svg";
import downloadWhiteIcon from "../assets/Icons/download-icon-white.svg";
import { pdfFlyerLink, logicLogo, logicURL } from "../data/ForLeaseURLs";

function ForLease() {
    const contactClassPtag = "py-1 m-1 mx-2";

    return (
        <div
            className="row py-5 w-auto bg-light justify-content-evenly "
            id="for-lease"
        >
            <div className="col mb-5 pt-4 details-section-col-width">
                <h3 className="fw-bold pb-1 text-capitalize">
                    Available Spaces
                </h3>
                <div className="row my-4 justify-content-center">
                    <h5 className="mb-3">
                        Suite 7
                        <small className="text-muted ms-2">- 2,222 SF</small>
                    </h5>
                    <h5>
                        Suite 9
                        <small className="text-muted ms-2">- 3,950 SF</small>
                    </h5>
                </div>
                <p className="my-1">
                    Checkout the flyer for more information about the available
                    spaces
                </p>
                <div className="row py-3 mb-5 justify-content-center">
                    <div className="col">
                        <a
                            className="btn btn-primary btn-sm text-decoration-none text-uppercase shadow-sm"
                            target="_blank"
                            href={pdfFlyerLink}
                            rel="noreferrer"
                        >
                            <img
                                className="me-2 mb-1 text-primary"
                                src={downloadWhiteIcon}
                                width="15"
                                alt="download icon"
                            />
                            Download Flyer
                        </a>
                    </div>
                </div>
                <hr></hr>
                <div className="row mt-5 p-1 justify-content-center details-section-col-width">
                    <div className="col">
                        <h3 className="fw-bold py-1 m-1 text-capitalize">
                            Contact
                        </h3>
                        <p className="py-3">
                            For leasing availibility contact LogicCRE
                        </p>
                        <a target="_blank" href={logicURL} rel="noreferrer">
                            <img
                                className="img-brands-logos border rounded-2"
                                src={logicLogo}
                                alt="logic-logo"
                                width="100px"
                            />
                        </a>
                        <p className="pt-4 pb-1 m-1 mx-2">Michael Keating</p>
                        <p className={contactClassPtag}>
                            <img
                                className="me-1 mb-1"
                                src={phoneIcon}
                                alt="phone-icon"
                            />
                            775-386-9727
                        </p>
                        <p className={contactClassPtag}>
                            <img
                                className="me-2 mb-1"
                                src={emailIcon}
                                alt="email-icon"
                            />
                            mkeating@logicCRE.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForLease;
