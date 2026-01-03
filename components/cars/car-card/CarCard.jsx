
import "./car-card.css"

export default function CarCard({img = {}, flag = "", title = "", price = ""}) {
    return (
        <div className="car-card">
            <div className="car-card--img">
                <img width={350} height={350} src={img?.src} alt={img?.alt} />
            </div>
            <div className="car-card--content">
                <p className="car-card--flag">{flag}</p>
                <div className="car-card--title-and-price">
                    <h3 className="car-card--title">{title}</h3>
                    <p className="car-card--price">{price}</p>
                </div>
            </div>
        </div>
    )
}