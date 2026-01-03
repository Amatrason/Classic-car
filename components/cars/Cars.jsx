"use client"

import CarCard from "./car-card/CarCard";
import { MOCK_CARD_LIST } from "./contants";
import "./cars.css"
import { useRef } from "react";


export default function Cars() {
    const sliderRef = useRef(null);
    const cardWidth = 350;
    const cardGapWidth = 48;
    const scrollAmount = cardGapWidth + cardWidth;

    const scrollLeft = () => {
        if(sliderRef.current) {
            const calcScrollLeft = 
          sliderRef.current.scrollLeft - scrollAmount;

          sliderRef.current.scrollTo({
            left: calcScrollLeft,
            behavior: "smooth"
          })
        }
    }

    const scrollRight = () => {
    if(sliderRef.current) {
            const calcScrollRight = 
          sliderRef.current.scrollLeft + scrollAmount;

          sliderRef.current.scrollTo({
            left: calcScrollRight,
            behavior: "smooth"
          })
        }
    }

    return (
        <section className="cars-section bg-secondary">
            <div className="cars-section__inner container">
                <div className="cars-section__slider-position">
                    <div className="cars-section__slider-controls">
                        <button className="cars-section__prev-btn" onClick={scrollLeft}>
                            {`< previous`}
                        </button>
                        <button className="cars-section__next-btn" onClick={scrollRight}>
                            {`next >`}
                        </button>
                    </div>
                    <div className="cars-section__slider" ref={sliderRef}>
                        {MOCK_CARD_LIST.map((card, i) => (
                            <CarCard {...card} key={`cars-section-${card.title}-${i}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}