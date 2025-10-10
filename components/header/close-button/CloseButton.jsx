import './close-button.css';

export default function CloseButton({ toggle }) {
    return (
        <button className="close-button" onClick={toggle}>
            X
        </button>
    );
}