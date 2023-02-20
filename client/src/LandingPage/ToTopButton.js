import chevronUp from "../assets/Icons/chevron-up.svg";

function ToTopButton() {
    return (
        <a
            className="bg-secondary bg-opacity-50 rounded-start p-1"
            id="toTopBtn"
            href="#banners-carousel"
        >
            <img
                className="p-0 m-0"
                src={chevronUp}
                alt="chevronup"
                width="30px"
            />
        </a>
    );
}

export default ToTopButton;
