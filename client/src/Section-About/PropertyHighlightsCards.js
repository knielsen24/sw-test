import shopIcon from "../assets/Icons/shop-icon.svg";
import hospitalIcon from "../assets/Icons/hospital-icon.svg";
import carIcon from "../assets/Icons/car-icon.svg";
import bricksIcon from "../assets/Icons/bricks-icon.svg";
import sunIcon from "../assets/Icons/sun-icon.svg";

function PropertyHighlightsCards() {
    const lineBreak = "";

    const highlightsData = [
        {
            image: bricksIcon,
            alt: "brick icon",
            header: "redeveloped",
            text: `multi-tenant mixed-use commercial property`,
        },
        {
            image: hospitalIcon,
            alt: "hospital icon",
            header: "Close proximity",
            text: "to Renown Regional Medical Center & Downtown Reno",
        },
        {
            image: shopIcon,
            alt: "tools icon",
            header: "Zoned for use",
            text: "retail, office, and medical",
        },
        {
            image: sunIcon,
            alt: "sun icon",
            header: "outdoor courtyard ",
            text: "Common area outdoor courtyard with attractive amenities",
        },
        {
            image: carIcon,
            alt: "car icon",
            header: "Easy access ",
            text: "to I-80 via S. Wells Ave. or I-580 via Mill St",
        },
    ];


    const renderCards = highlightsData.map((card) => {
        return (
            <div className="col m-3 p-3 prop-highlights bg-white rounded-4 shadow">
                <div className="m-3">
                    <img
                        classname="p-2"
                        src={card.image}
                        width="30px"
                        alt={card.alt}
                    />
                </div>
                <p className="text-capitalize fw-bold my-2">{card.header}</p>
                <p className="text-capitalize mb-0">{card.text}</p>
            </div>
        );
    });

    return (
        <div className="col my-2">
            {/* <div className="row my-3">
                <h5 className="text-capitalize">
                    Property Highlights
                </h5>
            </div> */}
            <div className="row my-3 justify-content-center">{renderCards}</div>
        </div>
    );
}

export default PropertyHighlightsCards;
