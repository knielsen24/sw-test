import { highlightsData } from "../data/PropertyCardsData";

function PropertyCards() {
    const renderCards = highlightsData.map((card, _index) => {
        return (
            <div
                className="col m-2 py-4 px-2 prop-highlights bg-white rounded-4 shadow"
                key={_index}
            >
                <div className="pb-2">
                    <img src={card.image} width="30px" alt={card.alt} />
                </div>
                <p className="text-capitalize fw-bold my-2">{card.header}</p>
                <p className="mb-0 text-muted">{card.text}</p>
            </div>
        );
    });

    return (
        <div className="row pb-2">
            <div className="col">
                <div className="row justify-content-center">{renderCards}</div>
            </div>
        </div>
    );
}

export default PropertyCards;
