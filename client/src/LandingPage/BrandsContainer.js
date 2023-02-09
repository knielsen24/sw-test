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

    const brandsColClass = "col mx-5 my-3";
    const brandsColClassAtleier = "col mx-5 my-2";
    const brandsColClassDorindas = "col mx-5 my-0";

    return (
        <div className="col p-1">
            <h4 className="my-3 p-1 bg-light rounded border text-uppercase">
                Patrons
            </h4>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="row mb-2 align-items-center">
                        <div className={brandsColClassAtleier}>
                            <a target="_blank" rel="noreferrer" href={atelierURL}>
                                <img
                                    className=""
                                    src={atelierLogo}
                                    alt="atelier logo"
                                    width="170"
                                />
                            </a>
                        </div>
                        <div className={brandsColClassDorindas}>
                            <a target="_blank" rel="noreferrer" href={craigTeamURL}>
                                <img
                                    className=""
                                    src={craigTeamLogo}
                                    alt="craig team realty exp realty"
                                    width="175"
                                />
                            </a>
                        </div>
                        <div className={brandsColClassAtleier}>
                            <a target="_blank" rel="noreferrer" href={dorindasURL}>
                                <img
                                    className=""
                                    src={dorindasLogo}
                                    alt="dorinda's chocolates logo"
                                    width="155"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" rel="noreferrer" href={entravisionURL}>
                                <img
                                    className=""
                                    src={entravisionLogo}
                                    alt="entravision tv"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" rel="noreferrer" href={handCraftURL}>
                                <img
                                    className=""
                                    src={handCraftLogo}
                                    alt="hand craft coffee company "
                                    width="190px"
                                />
                            </a>
                        </div>
                        <div className={brandsColClassAtleier}>
                            <a target="_blank" rel="noreferrer" href={liveKayaURL}>
                                <img
                                    className=""
                                    src={liveKayaLogo}
                                    alt="live kaya"
                                    width="195"
                                />
                            </a>
                        </div>

                        <div className={brandsColClass}>
                            <a target="_blank" rel="noreferrer" href={theMillBarreURL}>
                                <img
                                    className=""
                                    src={theMillBarreLogo}
                                    alt="the mill barre + pilates"
                                    width="190"
                                />
                            </a>
                        </div>

                        <div className={brandsColClass}>
                            <a target="_blank" rel="noreferrer" href={rideConceptsURL}>
                                <img
                                    className=""
                                    src={rideConceptsLogo}
                                    alt="ride concepts"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" rel="noreferrer" href={sierraSageURL}>
                                <img
                                    className=""
                                    src={sierraSageLogo}
                                    alt="sierra & sage hair extensions"
                                    width="190px"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" rel="noreferrer" href={terraphaseURL}>
                                <img
                                    className=""
                                    src={terraphaseLogo}
                                    alt="terraphase engineering"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClassDorindas}>
                            <a target="_blank" rel="noreferrer" href={vanmarLendingURL}>
                                <img
                                    className=""
                                    src={vanmarLogo}
                                    alt="vanmar lending"
                                    width="190"
                                />
                            </a>
                        </div>
                        <div className={brandsColClass}>
                            <a target="_blank" rel="noreferrer" href={walgreensURL}>
                                <img
                                    className=""
                                    src={walgreensLogo}
                                    alt="walgreens pharmancy"
                                    width="190"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsContainer;
