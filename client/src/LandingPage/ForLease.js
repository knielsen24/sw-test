// import downloadBlueIcon from "../assets/Icons/download-icon-blue.svg";
// import { useState } from "react";
import downloadWhiteIcon from "../assets/Icons/download-icon-white.svg";

function ForLease() {
    const pdfFlyerLink =
        "https://images1.loopnet.com/d2/jx7RyrfQIloED0qpF6nH3hHgAf1hA2gMHXuA9N_Ss7M/300%20S%20Wells%20ave%20Flyer.pdf?_gl=1*63o2qt*_ga*NDc2Mjk1NDc4LjE2Njc1MDI3MjA.*_ga_2DVXTE8M0Q*MTY2OTc2NzQzNi4xMS4xLjE2Njk3Njc0OTcuNTkuMC4w";
    // const pTagClass = "mb-3";

    return (
        <div className="col mb-5 p-1">
            <div className="row justify-content-center">

                <h4 className="fw-bold text-uppercase">
                    Leasing availability
                </h4>
                <div className="col">
                    <p className="my-3">
                        Checkout the flyer for more information about available
                        space
                    </p>
                </div>
            </div>
            <div className="row my-3 justify-content-center">
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
        </div>
    );
}

export default ForLease;
