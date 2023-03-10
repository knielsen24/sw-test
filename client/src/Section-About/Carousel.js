function Carousel() {
    const landingOneURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028243/Southwells/Landing%20%28Carousel%29/sw-main-1-wide_rker0b.jpg";
    const landingTwoURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028244/Southwells/Landing%20%28Carousel%29/sw-main-2-wide_jw5lpk.jpg";
    const landingFourURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028240/Southwells/Landing%20%28Carousel%29/sw-main-3-wide_buumhd.jpg";
    const landingThreeURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028251/Southwells/Landing%20%28Carousel%29/sw-main-4-wide_fgmwke.jpg";
    const landingFiveURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668028245/Southwells/Landing%20%28Carousel%29/sw-main-5-wide_vwufap.jpg";

    const captionClassOne =
        "carousel-caption banner-caption-top p-2 mx-0 d-none d-sm-block rounded text-white ";
    // const captionClassTwo =
    //     "carousel-caption banner-caption-two d-none d-md-block";

    return (
        <div className="row p-0 w-auto justify-content-center carousel-container">
            <div className="col p-0 carousel-col-container">
                <div
                    id="banners-carousel"
                    className="carousel slide "
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div
                            className="carousel-item active"
                            data-bs-interval="20000"
                        >
                            <img
                                src={landingOneURL}
                                className="d-block w-100 carousel-image-container"
                                alt="property-front"
                            />
                            <div className={captionClassOne}>
                                {/* <h2 className="text-capitalize banner-transition text-dark text-center float-end">
                                Commercial Property Near Downtown Reno
                            </h2> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="20000">
                            <img
                                src={landingTwoURL}
                                className="d-block w-100 "
                                alt="property-street"
                            />
                            {/* <div className={captionClassTwo}>
                            <div className="row ">
                                <div className="col align-self-end pe-0">
                                    <h2 className="float-end">
                                        Located in the Wells Avenue District
                                    </h2>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col">
                                    <a
                                        className="btn btn-outline-light text-decoration-none text-uppercase float-end"
                                        href="#for-lease"
                                        role="button"
                                    >
                                        Availability here
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src={landingThreeURL}
                                className="d-block w-100 "
                                alt="property-courtyard"
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src={landingFourURL}
                                className="d-block w-100 "
                                alt="courtyard-1"
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img
                                src={landingFiveURL}
                                className="d-block w-100 "
                                alt="courtyard-2"
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev ms-3"
                        type="button"
                        data-bs-target="#banners-carousel"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next me-3"
                        type="button"
                        data-bs-target="#banners-carousel"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
