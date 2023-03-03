import {
    handCraftURL,
    dorindasURL,
    theMillBarreURL,
    atelierURL,
    terraphaseURL,
    entravisionURL,
    vanmarLendingURL,
    walgreensURL,
    rideConceptsURL,
    craigTeamURL,
    liveKayaURL,
    sierraSageURL,
} from "../data/BrandURLs";

import {
    terraphaseLogo,
    handCraftLogo,
    dorindasLogo,
    theMillBarreLogo,
    atelierLogo,
    entravisionLogo,
    vanmarLogo,
    walgreensLogo,
    rideConceptsLogo,
    craigTeamLogo,
    liveKayaLogo,
    sierraSageLogo,
} from "../data/LogoURLs";

function BrandsContainer() {
    const brandsColClassRow1 = "col mx-3 px-2 my-3 brands-col-width";
    const brandsColClass = "col mx-3 px-1 my-4 brands-col-width";
    const brandsRowsClass =
        "row my-3 gx-1 align-items-center justify-content-evenly";

    return (
        <div className="row my-5" id="partners">
            {/* <h3 className="fw-bold my-3 p-2 text-uppercase">
                Home of the finest businesses in Reno
            </h3> */}
            <h3 className="fw-bold p-3 mb-5">
                Businesses we’ve partnered with
            </h3>
            <div className="col mx-auto px-5 brands-container-width">
                <div className="row gx-1 align-items-center justify-content-evenly">
                    <div className={brandsColClassRow1}>
                        <a target="_blank" rel="noreferrer" href={atelierURL}>
                            <img
                                className="img-brands-logos"
                                src={atelierLogo}
                                alt="atelier logo"
                                width="160"
                            />
                        </a>
                    </div>
                    <div className={brandsColClassRow1}>
                        <a target="_blank" rel="noreferrer" href={craigTeamURL}>
                            <img
                                className="img-brands-logos"
                                src={craigTeamLogo}
                                alt="craig team realty exp realty"
                                width="180"
                            />
                        </a>
                    </div>
                    <div className={brandsColClassRow1}>
                        <a target="_blank" rel="noreferrer" href={dorindasURL}>
                            <img
                                className="img-brands-logos"
                                src={dorindasLogo}
                                alt="dorinda's chocolates logo"
                                width="160"
                            />
                        </a>
                    </div>
                </div>
                <div className={brandsRowsClass}>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={entravisionURL}
                        >
                            <img
                                className="img-brands-logos"
                                src={entravisionLogo}
                                alt="entravision tv"
                                width="175"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={handCraftURL}>
                            <img
                                className="img-brands-logos"
                                src={handCraftLogo}
                                alt="hand craft coffee company "
                                width="190"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={liveKayaURL}>
                            <img
                                className="img-brands-logos"
                                src={liveKayaLogo}
                                alt="live kaya"
                                width="175"
                            />
                        </a>
                    </div>
                </div>
                <div className={brandsRowsClass}>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={theMillBarreURL}
                        >
                            <img
                                className="img-brands-logos"
                                src={theMillBarreLogo}
                                alt="the mill barre + pilates"
                                width="190"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={rideConceptsURL}
                        >
                            <img
                                className="img-brands-logos"
                                src={rideConceptsLogo}
                                alt="ride concepts"
                                width="180"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={sierraSageURL}
                        >
                            <img
                                className="img-brands-logos"
                                src={sierraSageLogo}
                                alt="sierra & sage hair extensions"
                                width="175"
                            />
                        </a>
                    </div>
                </div>
                <div className={brandsRowsClass}>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={terraphaseURL}
                        >
                            <img
                                className="img-brands-logos"
                                src={terraphaseLogo}
                                alt="terraphase engineering"
                                width="180"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={vanmarLendingURL}
                        >
                            <img
                                className="img-brands-logos"
                                src={vanmarLogo}
                                alt="vanmar lending"
                                width="180"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={walgreensURL}>
                            <img
                                className="img-brands-logos"
                                src={walgreensLogo}
                                alt="walgreens pharmancy"
                                width="170"
                            />
                        </a>
                    </div>
                </div>
                <div className="p-3"></div>
            </div>
        </div>
    );
}

export default BrandsContainer;
