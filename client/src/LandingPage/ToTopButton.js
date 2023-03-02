import chevronUp from "../assets/Icons/chevron-up.svg";

function ToTopButton() {
    return (
        <a
            className="bg-secondary bg-opacity-50 rounded-start p-1 "
            id="toTopBtn"
            href="#top-page"
        >
            <img
                className="p-0 m-0 img-brands-logos"
                src={chevronUp}
                alt="chevronup"
                width="30px"
            />
        </a>
    );
}

export default ToTopButton;
