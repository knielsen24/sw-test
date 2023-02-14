import squareFtIcon from "../assets/Icons/square-feet-icon.svg";

function PropertyDetails() {
    const liClassName = "bg-transparent list-group-item border border-0 ";
    const floorPlanURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001731/Southwells/assets/300_S_Wells_ave_Building_Layout-med_iysjzq.png";

    return (
        <div className="row mx-auto my-4 align-items-center justify-content-evenly">
            <div className="col my-3 map-section-col-width">
                <div className="mb-4">
                    <h4 className="p-2 fw-bold text-uppercase">
                        Property Details
                    </h4>
                </div>

                <ul className="list-group rounded">
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <div className="col-5 fw-bold text-end">
                                <img
                                    className="me-2 mb-1"
                                    src={squareFtIcon}
                                    width="20px"
                                    alt="square feet icon"
                                />
                                40,852
                            </div>
                            <div className="col-7 p-0 text-start">
                                Square Feet on 2.30 Acres
                            </div>
                        </div>
                    </li>
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <div className="col fw-bold text-end">144</div>
                            <div className="col ps-0 me-5 text-start">
                                Parking Spaces
                            </div>
                        </div>
                    </li>
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <div className="col fw-bold text-end">
                                ~ 249,817
                            </div>
                            <div className="col ps-0 me-5 text-start">
                                Residents Serviced
                            </div>
                        </div>
                    </li>
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <div className="col fw-bold text-end">$109,381</div>
                            <div className="col ps-0 me-5 text-start">
                                Average Household Income within 5-Mile Radius
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col my-5 map-section-col-width">
                <img
                    className="rounded-4 d-block w-100"
                    src={floorPlanURL}
                    alt="map location"
                    width="400"
                />
            </div>
        </div>
    );
}

export default PropertyDetails;
