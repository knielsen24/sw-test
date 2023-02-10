import toolsIcon from "../assets/Icons/tools-icon.svg";
import hospitalIcon from "../assets/Icons/hospital-icon.svg";
import carIcon from "../assets/Icons/car-icon.svg";
import bricksIcon from "../assets/Icons/bricks-icon.svg";
import sunIcon from "../assets/Icons/sun-icon.svg";

function PropertyHighlightsCards() {
    const pTagClass = "mt-3 mb-0";

    const highlightsData = [
        {
            image: bricksIcon,
            alt: "brick icon",
            text: "Recently redeveloped multi-tenant mixed-use building",
        },
        {
            image: hospitalIcon,
            alt: "hospital icon",
            text: "Close proximity to Renown Regional Medical Center & Downtown Reno",
        },
        {
            image: toolsIcon,
            alt: "tools icon",
            text: "Zoned for retail, office, and medical use",
        },
        {
            image: sunIcon,
            alt: "sun icon",
            text: "Common area outdoor courtyard with attractive amenities",
        },
        {
            image: carIcon,
            alt: "car icon",
            text: "Easy access to I-80 via S. Wells Ave. or I-580 via Mill St",
        },
    ];

    const renderCards = highlightsData.map((card) => {
        return (
            <div className="col p-3 prop-highlights bg-white rounded-4 shadow">
                <img
                    classname="m-5"
                    src={card.image}
                    width="30px"
                    alt={card.alt}
                />
                <p className={pTagClass}>{card.text}</p>
            </div>
        );
    });

    return (
        <div className="col mt-2">
            <div className="row my-3">
                <h5 className="text-decoration-underline">
                    Property Highlights
                </h5>
            </div>
            <div className="row my-3 justify-content-center">{renderCards}</div>
        </div>
    );
}

export default PropertyHighlightsCards;
