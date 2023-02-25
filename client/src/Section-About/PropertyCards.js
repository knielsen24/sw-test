import shopIcon from "../assets/Icons/shop-icon.svg";
import hospitalIcon from "../assets/Icons/hospital-icon.svg";
import carIcon from "../assets/Icons/car-icon.svg";
import bricksIcon from "../assets/Icons/bricks-icon.svg";
import sunIcon from "../assets/Icons/sun-icon.svg";

function PropertyCards() {
    const highlightsData = [
        {
            image: bricksIcon,
            alt: "brick icon",
            header: "redeveloped",
            text: "Multi-tenant mixed-use commercial property",
        },
        {
            image: hospitalIcon,
            alt: "hospital icon",
            header: "Close proximity",
            text: "To Renown Regional Medical Center & Downtown Reno",
        },
        {
            image: shopIcon,
            alt: "tools icon",
            header: "Zoned for use",
            text: "Retail, office, or medical based on business needs",
        },
        {
            image: sunIcon,
            alt: "sun icon",
            header: "outdoor courtyard ",
            text: "Common area courtyard with attractive amenities",
        },
        {
            image: carIcon,
            alt: "car icon",
            header: "Easy access ",
            text: "To I-80 via S. Wells Ave. or I-580 via Mill St",
        },
    ];

    const renderCards = highlightsData.map((card) => {
        return (
            <div className="col m-2 py-4 px-2 prop-highlights bg-white rounded-4 shadow">
                <div className="pb-2">
                    <img src={card.image} width="30px" alt={card.alt} />
                </div>
                <p className="text-capitalize fw-bold my-2">{card.header}</p>
                <p className="mb-0 text-muted">{card.text}</p>
            </div>
        );
    });

    return (
        <div className="col">
            <div className="row justify-content-center">{renderCards}</div>
        </div>
    );
}

export default PropertyCards;
