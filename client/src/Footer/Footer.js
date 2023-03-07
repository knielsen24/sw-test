import southWellsLogo from "../assets/Logos/3SW-logo-rectangle.png";
import knLogo from "../assets/Logos/Logo KN purple.png";
import { kevinNielsenURL } from "../data/OtherURLs";

function Footer() {
    return (
        <div className="footer d-flex py-3 mt-auto align-items-center border-top border-1 text-dark ">
            <div className="container text-center py-2">
                <div className="row gap-4 align-items-center justify-content-between">
                    <div className="col pb-1 mx-3 my-auto">
                        <img
                            src={southWellsLogo}
                            alt="3sw-logo"
                            width="150"
                            id="logo-name"
                        />
                    </div>
                    <div className="col mx-3 my-auto ">
                        <div className="row ">
                            <div className="col kn-footer-width">

                                <a
                                    className="text-decoration-none text-muted"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={kevinNielsenURL}
                                >
                                    Designed & built by Kevin Nielsen
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
