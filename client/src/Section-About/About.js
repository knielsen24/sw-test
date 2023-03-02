import PropertyCards from "./PropertyCards";

function About() {
    return (
        <div
            className="row py-5 px-1 w-auto justify-content-center mint-bg about-container"
            id="about"
        >
            <div className="col section mx-auto my-2 justify-content-center py-4">
                <h3 className="pb-5 fw-bold text-capitalize ">
                    Property highlights
                </h3>
                <PropertyCards />
            </div>
        </div>
    );
}

export default About;
