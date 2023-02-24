import React from "react";

function HeroImage() {
    return (
        <div className="row hero-container justify-content-center align-items-start">
            <div className="col hero-header pt-3">
                <h1 className="display-5 mt-2 mx-auto px-5 py-4 fw-bold rounded text-white">
                {/* bg-white bg-opacity-75 */}
                    Comercial Real Estate Property
                    <h4 className="pt-3 text-muted">Near Downtown Reno</h4>
                </h1>
            </div>
        </div>
    );
}

export default HeroImage;
