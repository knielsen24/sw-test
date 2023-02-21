function BrandsContainer() {
    const handCraftURL = "https://www.handcraftcoffeecompany.com/";
    const dorindasURL = "https://dorindaschocolates.com/";
    const theMillBarreURL = "https://themillpilates.com/";
    const atelierURL = "https://www.atelierbeautybar.com/";
    const terraphaseURL = "https://terraphase.com/";
    const entravisionURL = "https://entravision.com/";
    const vanmarLendingURL = "https://www.vanmarlending.com/";
    const walgreensURL = "https://www.walgreens.com/";
    const rideConceptsURL = "https://rideconcepts.com/";
    const craigTeamURL = "https://www.craigteamrealty.com/";
    const liveKayaURL = "https://livekaya.com/";
    const sierraSageURL = "https://www.sierraandsage.com/";

    const terraphaseLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/terraphase_logo_henras.svg";
    const handCraftLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668061088/Southwells/logos/hand-craft-coffee-logo_g5oeld.png";
    const dorindasLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953761/Southwells/logos/dorindas-logo_hwxwzd.png";
    const theMillBarreLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953763/Southwells/logos/the-mill-barre_rg18nw.png";
    const atelierLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668061778/Southwells/logos/atelier-logo_iswelu.png";
    const entravisionLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953761/Southwells/logos/entravision-logo_xjgq5i.webp";
    const vanmarLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953763/Southwells/logos/vanmar-logo_ujr4w3.webp";
    const walgreensLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953763/Southwells/logos/walgreens-logo_zrburw.png";
    const rideConceptsLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1667953762/Southwells/logos/ride-concepts-logo_f0behc.png";
    const craigTeamLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668037134/Southwells/logos/craig-team-realty-logo-color_vdnfrs.png";
    const liveKayaLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668035851/Southwells/logos/LK_logo_Extended_BlueOnWhiteOrangeAccent_myfsbm.png";
    const sierraSageLogo =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668061088/Southwells/logos/sierra-sage-logo_iaec0z.png";

    const brandsColClass = "col mx-1 px-1 my-1 brands-col-width";
    const brandsRowsClass =
        "row gx-1 my-4 align-items-center justify-content-evenly";

    return (
        <div className="row my-5" id="partners">
            <h3 className="fw-bold my-3 p-1 text-uppercase">Patrons</h3>
            <div className="col mx-5 px-5">
                <div className="row gx-1 mb-4 align-items-center justify-content-evenly">
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={atelierURL}>
                            <img
                                src={atelierLogo}
                                alt="atelier logo"
                                width="140"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={craigTeamURL}>
                            <img
                                src={craigTeamLogo}
                                alt="craig team realty exp realty"
                                width="150"
                            />
                        </a>
                    </div>
                </div>
                <div className={brandsRowsClass}>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={dorindasURL}>
                            <img
                                src={dorindasLogo}
                                alt="dorinda's chocolates logo"
                                width="150"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={entravisionURL}
                        >
                            <img
                                src={entravisionLogo}
                                alt="entravision tv"
                                width="150"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={handCraftURL}>
                            <img
                                src={handCraftLogo}
                                alt="hand craft coffee company "
                                width="170"
                            />
                        </a>
                    </div>
                </div>
                <div className={brandsRowsClass}>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={liveKayaURL}>
                            <img
                                src={liveKayaLogo}
                                alt="live kaya"
                                width="175"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={theMillBarreURL}
                        >
                            <img
                                src={theMillBarreLogo}
                                alt="the mill barre + pilates"
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
                            href={rideConceptsURL}
                        >
                            <img
                                src={rideConceptsLogo}
                                alt="ride concepts"
                                width="160"
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
                                src={sierraSageLogo}
                                alt="sierra & sage hair extensions"
                                width="175"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={terraphaseURL}
                        >
                            <img
                                src={terraphaseLogo}
                                alt="terraphase engineering"
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
                            href={vanmarLendingURL}
                        >
                            <img
                                src={vanmarLogo}
                                alt="vanmar lending"
                                width="160"
                            />
                        </a>
                    </div>
                    <div className={brandsColClass}>
                        <a target="_blank" rel="noreferrer" href={walgreensURL}>
                            <img
                                src={walgreensLogo}
                                alt="walgreens pharmancy"
                                width="150"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsContainer;
