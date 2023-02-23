import phoneIcon from "../assets/Icons/phone-icon.svg";
import emailIcon from "../assets/Icons/email-icon.svg";
import downloadWhiteIcon from "../assets/Icons/download-icon-white.svg";

function ForLease() {
    const pdfFlyerLink =
        "https://images1.loopnet.com/d2/jx7RyrfQIloED0qpF6nH3hHgAf1hA2gMHXuA9N_Ss7M/300%20S%20Wells%20ave%20Flyer.pdf?_gl=1*63o2qt*_ga*NDc2Mjk1NDc4LjE2Njc1MDI3MjA.*_ga_2DVXTE8M0Q*MTY2OTc2NzQzNi4xMS4xLjE2Njk3Njc0OTcuNTkuMC4w";
    const logicLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/logic-logo_u7tz6o.png";
    const logicURL = "https://logiccre.com/";

    const contactClassPtag = " m-1 mx-2";

    return (
        <div
            className="row bg-light p-2 w-auto justify-content-evenly "
            id="for-lease"
        >
            <div className="col my-5 p-1 details-section-col-width">
                <h3 className="fw-bold text-capitalize">Available Spaces</h3>
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

                <div className="col">
                    <p className="my-3">
                        Checkout the flyer for more information about the
                        available spaces
                    </p>
                </div>

                <div className="row my-5 justify-content-center">
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
                <div className="row my-5 p-1 justify-content-center details-section-col-width">
                    <div className="col">
                        <h3 className="fw-bold py-1 m-1 text-capitalize">
                            Contact
                        </h3>
                        <a target="_blank" href={logicURL} rel="noreferrer">
                            <img
                                className="py-2"
                                src={logicLogo}
                                alt="logic-logo"
                                width="60px"
                            />
                        </a>
                        <p className={contactClassPtag}>Michael Keating</p>
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
