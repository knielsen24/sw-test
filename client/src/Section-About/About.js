import PropertyCards from "./PropertyCards";

function About() {
    return (
        <div
            className="row p-5 w-auto justify-content-center mint-bg about-container"
            id="about"
        >
            <div className="col section mx-auto my-2 justify-content-center p-4">
                <div className="row">
                    {" "}
                    <h3 className="mb-4 fw-bold text-uppercase ">
                        Property highlights
                    </h3>
                </div>

                <div className="row">
                    <PropertyCards />
                </div>
            </div>
        </div>
    );
}

export default About;
