import React from "react";

function PropertyMap() {
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";
    const mapURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001732/Southwells/assets/300_S_Wells_ave_MAP-med_fhhwu5.png";

    const landmarksListURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676142310/Southwells/assets/300_S_Wells_ave_landmarks-list_th3wbe.png";

    // const landmarksLegendURL =
    //     "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676142312/Southwells/assets/300_S_Wells_ave_landmarks-legend_nctyrp.png";

    return (
        <div className="row mx-auto my-4 align-items-start justify-content-evenly  ">
            <div className="my-4">
                <h4 className="p-2 fw-bold text-uppercase">
                    Strategically located in a dense and established residential
                    / commercial area.
                </h4>
                <p>Amenities within 3-miles of Radius</p>
            </div>

            <div className="col ">
                <div className="m-4">
                    <img
                        className="rounded-4 border "
                        src={mapURL}
                        alt="map location"
                        width="400"
                    />
                </div>
                <div className="mb-4">
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
            <div className="col me-5">
                <div className="row my-3">
                    <div className="ms-5">
                        <img
                            className="rounded-4 highlight-image-height"
                            src={landmarksListURL}
                            alt="major land marks"
                        />
                    </div>
                    {/* <div>
                        <img
                            className="rounded-4 highlight-image-height"
                            src={landmarksLegendURL}
                            alt="map legend"
                            width="300"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default PropertyMap;
