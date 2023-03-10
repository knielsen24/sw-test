import { floorPlanURL } from "../data/ImageURLS";

function PropertyDetails() {
    const liClassName = "bg-transparent list-group-item border border-0 ";
    
    return (
        <div className="row mx-auto my-5 align-items-center justify-content-evenly">
            <div className="col py-5 mx-2 details-section-col-width">
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
            <div className="col py-5 mx-2 map-section-col-width">
                <img
                    className="rounded-4 d-block w-100 ps-3 img-map-logos"
                    src={floorPlanURL}
                    alt="map location"
                    width="400"
                />
            </div>
        </div>
    );
}

export default PropertyDetails;
