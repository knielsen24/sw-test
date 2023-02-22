// import squareFtIcon from "../assets/Icons/square-feet-icon.svg";

function PropertyDetails() {
    const liClassName = "bg-transparent list-group-item border border-0 ";
    const floorPlanURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001731/Southwells/assets/300_S_Wells_ave_Building_Layout-med_iysjzq.png";

    return (
        <div className="row mx-auto my-4 align-items-center justify-content-evenly">
            <div className="col my-3 details-section-col-width">
                <div className="mb-4">
                    <h3 className="p-2 fw-bold text-capitalize">
                        Property Details
                    </h3>
                </div>

                <ul className="list-group rounded">
                    <li className={liClassName}>
                        <div className="row">
                            <h5 className="float-start">
                                ~249,817
                                <small className="text-muted ms-2">
                                    Residents Serviced
                                </small>
                            </h5>
                        </div>
                    </li>
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <h5>
                                $109,381
                                <small className="text-muted ms-2">
                                    Average Household Income within 5-Mile
                                    Radius
                                </small>
                            </h5>
                        </div>
                    </li>
                    <li className={liClassName}>
                        <div className="row justify-content-start ">
                            <h5>
                                40,852
                                <small className="text-muted ms-2">
                                    Square Feet on 2.30 Acres
                                </small>
                            </h5>
                            <div className="col-5 fw-bold text-end">
                                {/* <img
                                    className="me-2 mb-1"
                                    src={squareFtIcon}
                                    width="20px"
                                    alt="square feet icon"
                                /> */}
                            </div>
                        </div>
                    </li>
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <h5>
                                144
                                <small className="text-muted ms-2">
                                    Parking Spaces
                                </small>
                            </h5>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col my-5 map-section-col-width">
                <img
                    className="rounded-4 d-block w-100 ps-3"
                    src={floorPlanURL}
                    alt="map location"
                    width="400"
                />
            </div>
        </div>
    );
}

export default PropertyDetails;
