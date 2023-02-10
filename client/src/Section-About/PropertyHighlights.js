import React from "react";

function PropertyHighlights() {
    const liClassName =
        "bg-transparent list-group-item border border-0 text-capitalize";
    const floorPlanURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001731/Southwells/assets/300_S_Wells_ave_Building_Layout-med_iysjzq.png";
    return (
        <div className="row align-items-center">
            <div className="col ">
                <ul className="list-group rounded">
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <div className="col fw-bold text-end">40,852</div>
                            <div className="col ps-0 me-5 text-start">
                                sq ft on 2.30 Acres
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
                                +/- 249,817
                            </div>
                            <div className="col ps-0 me-5 text-start">
                                residents serviced
                            </div>
                        </div>
                    </li>
                    <li className={liClassName}>
                        <div className="row justify-content-start">
                            <div className="col fw-bold text-end">$109,381</div>
                            <div className="col ps-0 me-5 text-start">
                                average household income within 5-mile radius
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col mx-auto list-width">
                <img
                    className="rounded-4 highlight-image-width"
                    src={floorPlanURL}
                    alt="map location"
                />
            </div>
        </div>
    );
}

export default PropertyHighlights;
