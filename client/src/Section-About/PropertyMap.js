import React from "react";

function PropertyMap() {
    const googleMaps = "https://goo.gl/maps/UgPqfKpSQzDPGErZA";
    const mapURL =
        "https://res.cloudinary.com/dooa4lvvv/image/upload/v1676001732/Southwells/assets/300_S_Wells_ave_MAP-med_fhhwu5.png";

    const liClassName =
        "bg-transparent list-group-item border border-0 text-capitalize";

    return (
        <div className="row  align-items-center p-5 ">
            <div className="col list-width">
                <div className="row my-3">
                    <div className="col">
                        <img
                            className="rounded-4 highlight-image-width"
                            src={mapURL}
                            alt="map location"
                        />
                    </div>
                </div>
            </div>
            <div className="col me-5">
                <div className="row">
                    <h4 className="p-2 my-4 fw-bold">
                        Strategically located in a dense
                        and mature residential and commercial area.
                    </h4>
                </div>
                <div className="row">
                    <ul className="list-group rounded">
                        <li className={liClassName}>
                            ~ 249,817 residents serviced
                        </li>
                        <li className={liClassName}>
                            $109,381 average household income within 5-mile
                            radius
                        </li>
                    </ul>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col">
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
            </div>
        </div>
    );
}

export default PropertyMap;
