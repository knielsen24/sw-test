function Courtyard() {
    const courtyardOne =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1668067047/Southwells/courtyard/sw-courtyard-1_lburt2.jpg";

    // const pTagClass = "mb-3";

    return (
        <div className="col section mx-auto mt-2 justify-content-center p-1">
            <div className="my-4">
                <h4 className="p-2 fw-bold">The Courtyard</h4>
                <p>An intimate event venue perfect for your party</p>
            </div>

            <div className="row">
                <div className="col hero-container mx-auto">
                    <div className="rounded-4">
                        <img
                            src={courtyardOne}
                            className="rounded d-block w-100 carousel-cover"
                            alt="courtyard"
                        />
                    </div>
                    <div className=" mint-bg ">
                        <a
                            href="#contact"
                            className="btn btn-sm btn-primary shadow-sm text-uppercase"
                        >
                            Contact Info
                        </a>
                        <p className="">More info coming soon</p>
                    </div>
                </div>
            </div>
            {/* <div className="row mt-3">
                <div className="col">
                    <a type="button" className="btn-primary" href="#contact">
                        Go to Contact information
                    </a>
                </div>
            </div> */}
        </div>
    );
}

export default Courtyard;
