import PropertyCards from "./PropertyCards";

function About() {
    return (
        <div className="col section mx-auto my-2 justify-content-center p-4">
            <div className="row">
                {" "}
                <h4 className="fw-bold text-uppercase mb-4">
                    Property highlights
                </h4>
            </div>

            <div className="row ">
                <PropertyCards />
            </div>
        </div>
    );
}

export default About;
