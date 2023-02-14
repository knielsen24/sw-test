import React from "react";

function PropertyMap() {
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";
    const mapURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001732/Southwells/assets/300_S_Wells_ave_MAP-med_fhhwu5.png";

    const landmarksListURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676142310/Southwells/assets/300_S_Wells_ave_landmarks-list_th3wbe.png";

    return (
        <div className="row mx-auto my-4 align-items-start justify-content-evenly">
            <div className="my-4">
                <h4 className="p-2 fw-bold text-uppercase">
                    Strategically located in a dense and established residential
                    / commercial area.
                </h4>
                <p>Amenities within 3-miles of Radius</p>
            </div>

            <div className="col my-4 map-section-col-width">
                <div className="p-1">
                    <img
                        className="d-block w-100"
                        src={mapURL}
                        alt="map location"
                        width="400"
                    />
                </div>
                <div className="my-5">
                    <a
                        className="btn btn-primary btn-sm text-decoration-none shadow-sm text-uppercase"
                        target="_blank"
                        href={googleMaps}
                        rel="noreferrer"
                    >
                        view on Google Maps
                    </a>
                </div>
            </div>
            <div className="col mb-4 map-section-col-width ">
                <div className="ps-4 p-3">
                    <img
                        className="d-block rounded-4 highlight-image-height "
                        src={landmarksListURL}
                        alt="major land marks"
                        height="500"
                    />
                </div>
            </div>
        </div>
    );
}

export default PropertyMap;
