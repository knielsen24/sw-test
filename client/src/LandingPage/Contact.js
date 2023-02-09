//  need to create seperate sub-sections for leasing / courtyard contact
import phoneIcon from "../assets/Icons/phone-icon.svg";
import emailIcon from "../assets/Icons/email-icon.svg";
import nielsenLogo from "../assets/Logos/nielsen-logo.png";

function Contact() {
    const contactClassPtag = " m-1 mx-5";
    const contactColTag = "col-6 my-2";

    const logicLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/logic-logo_u7tz6o.png";
    const logicURL = "https://logiccre.com/";

    return (
        <div className="col my-3 flex-lg-column p-1">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                Contact
            </h4>
            <div className="row justify-content-center">
                <div className={contactColTag}>
                    <h5 className="py-1 m-1 text-decoration-underline text-uppercase">
                        Courtyard Venue Information
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
                            className="me-2 "
                            src={emailIcon}
                            alt="email-icon"
                        />
                        Info@300SouthWells.com
                    </p>
                </div>

                <div className={contactColTag}>
                    <h5 className="py-1 m-1 text-decoration-underline text-uppercase">
                        leasing information
                    </h5>
                    <div>
                        <a target="_blank" href={logicURL} rel="noreferrer">
                            <img
                                className="py-2"
                                src={logicLogo}
                                alt="logic-logo"
                                width="60px"
                            />
                        </a>
                    </div>
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
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        mkeating@logicCRE.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

{
    /* <div className={contactColTag}>
                    <p className={contactClassPtag}>Greg Ruzzine</p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        775-450-5779
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        gruzzine@logicCRE.com
                    </p>
                </div>
                <div className={contactColTag}>
                    <p className={contactClassPtag}>Mike Dorn</p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        775-453-4436
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        mdorn@logicCRE.com
                    </p>
                </div> */
}
{
    /* <div className={contactColTag}>
                    <p className={contactClassPtag}>Sam Meredith</p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1 mb-1"
                            src={phoneIcon}
                            alt="phone-icon"
                        />
                        775-737-2939
                    </p>
                    <p className={contactClassPtag}>
                        <img
                            className="me-1"
                            src={emailIcon}
                            alt="email-icon"
                        />
                        smeredith@logicCRE.com
                    </p>
                </div> */
}
