import './close-button.css';
export default function CloseButton({ onClick }) {
    return (
        <button className="close-button" onClick={onClick}>
            X
        </button>
    );
}