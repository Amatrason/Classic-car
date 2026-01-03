
import "./car-card.css"

export default function CarCard({img = {}, flag = "", title = "", price = ""}) {
    return (
        <div className="car-card">
            <div className="car-card__img">
                <img width={350} height={350} src={img?.src} alt={img?.alt} />
            </div>
            <div className="car-card__content">
                <p className="car-card__flag">{flag}</p>
                <div className="car-card__title-and-price">
                    <h3 className="car-card__title">{title}</h3>
                    <p className="car-card__price">{price}</p>
                </div>
            </div>
        </div>
    )
}