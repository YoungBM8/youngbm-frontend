import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

import "../styles/slider.css";

import heroLisbon from "../assets/hero-lisbon.png";

import bmolLogo from "../assets/bmol-logo.png";
import seminarIllustration from "../assets/seminar-illustration.png";

const slides = [
    {
        title: "YOUNG BMol 2026 LISBON",
        background: heroLisbon,
        image: bmolLogo,
        imageClass: "bmol-image",
        lines: [
            "Deadline For Nationals:",
            "September 30th",
            "DON'T MISS YOUR CHANCE TO APPLY!"
        ]
    },

    {
        title: "Young BM Seminar",
        background: heroLisbon,
        image: seminarIllustration,
        imageClass: "seminar-image",
        lines: [
            "Apply now!",
            "On the 6th June 2026",
            "The 1st Young Biologists Matter Online Seminar!"
        ]
    }
];

export default function HeroSlider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setCurrentSlide(prev =>
                prev === slides.length - 1 ? 0 : prev + 1
            );

        }, 6000);

        return () => clearInterval(timer);

    }, []);

    const nextSlide = () => {

        setCurrentSlide(prev =>
            prev === slides.length - 1 ? 0 : prev + 1
        );

    };

    const prevSlide = () => {

        setCurrentSlide(prev =>
            prev === 0 ? slides.length - 1 : prev - 1
        );

    };

    return (

        <section className="hero-slider">

            <h1 className="hero-news-title">
                NEWS
            </h1>

            <div
                className="slider-track"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`
                }}
            >

                {slides.map((slide, index) => (

                    <div
                        className="slide"
                        key={index}
                    >

                        <div
                            className="slide-background"
                            style={{
                                backgroundImage: `url(${slide.background})`
                            }}
                        >

                            <NewsCard slide={slide} />

                        </div>

                    </div>

                ))}

            </div>

            <button
                className="slider-arrow left-arrow"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            <button
                className="slider-arrow right-arrow"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            <div className="slider-dots">

                {slides.map((_, index) => (

                    <button
                        key={index}
                        className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    />

                ))}

            </div>

        </section>

    );

}