import React from "react";

function PropertyMap() {
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";
    const mapURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001732/Southwells/assets/300_S_Wells_ave_MAP-med_fhhwu5.png";

    const landmarksListURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676142310/Southwells/assets/300_S_Wells_ave_landmarks-list_th3wbe.png";

    return (
        <div className="row mx-auto p-4 my-5 align-items-center justify-content-evenly">
            <div className="my-4">
                <h4 className="p-2 fw-bold text-capitalize">
                    Strategically located in a dense and established residential
                    / commercial area
                </h4>
                <p className="text-secondary text-capitalize">
                    Major landmarks & amenities within 3-mile radius
                </p>
            </div>

            <div className="col my-4 map-section-col-width ">
                <div>
                    <img
                        className="mb-2 w-100 img-map-logos"
                        src={mapURL}
                        alt="map location"
                    />
                    <a
                        className="mt-5 btn btn-primary btn-sm text-decoration-none shadow-sm text-uppercase"
                        target="_blank"
                        href={googleMaps}
                        rel="noreferrer"
                    >
                        view on Google Maps
                    </a>
                </div>
            </div>
            <div className="col my-4 map-section-col-width">
                <div className="px-4 ">
                    <img
                        className="w-100"
                        src={landmarksListURL}
                        alt="major land marks"
                    />
                </div>
            </div>
        </div>
    );
}

export default PropertyMap;
