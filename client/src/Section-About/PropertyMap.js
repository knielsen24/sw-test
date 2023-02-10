import React from "react";

function PropertyMap() {
    const floorPlanURL =
    "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001731/Southwells/assets/300_S_Wells_ave_Building_Layout-med_iysjzq.png";
    return (
        <div className="col-6 mx-auto list-width">
            <img
                className="rounded-4 highlight-image-width"
                src={floorPlanURL}
                alt="map location"
            />
        </div>
    );
}

export default PropertyMap;
