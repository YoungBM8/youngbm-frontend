import { useEffect, useState } from "react";

import { isExternalHref } from "../utils/links";
import RichText from "./RichText";

import "../styles/slider.css";

function SlideCard({ slide }) {
    const imageClass = slide.image_style === "illustration" ? "seminar-image" : "bmol-image";

    return (
        <div className="news-card">

            <h3 className="news-card-title">
                {slide.title}
            </h3>

            {slide.image && (
                <div className={`news-image-wrapper ${imageClass}`}>
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="news-card-image"
                    />
                </div>
            )}

            <div className="news-card-text">
                <RichText html={slide.body} />

                {slide.cta_label && slide.cta_url && (
                    <p>
                        <a
                            href={slide.cta_url}
                            target={isExternalHref(slide.cta_url) ? "_blank" : undefined}
                            rel={isExternalHref(slide.cta_url) ? "noopener noreferrer" : undefined}
                        >
                            {slide.cta_label}
                        </a>
                    </p>
                )}
            </div>

        </div>
    );
}

/**
 * A slideshow configured in the back office. `title` (from the page section)
 * overrides the slideshow's own heading.
 */
export default function Slideshow({ slideshow, title }) {
    const slides = slideshow?.slides ?? [];
    const count = slides.length;

    const heading = title || slideshow?.title;
    const autoplayMs = (slideshow?.autoplay_seconds ?? 0) * 1000;
    const showArrows = slideshow?.show_arrows ?? true;
    const showDots = slideshow?.show_dots ?? true;

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (count < 2 || autoplayMs <= 0) {
            return undefined;
        }

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev >= count - 1 ? 0 : prev + 1));
        }, autoplayMs);

        return () => clearInterval(timer);
    }, [count, autoplayMs]);

    useEffect(() => {
        // Keep the index valid when slides are (un)published.
        if (currentSlide > 0 && currentSlide >= count) {
            setCurrentSlide(0);
        }
    }, [count, currentSlide]);

    if (count === 0) {
        return null;
    }

    const nextSlide = () => setCurrentSlide((prev) => (prev >= count - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? count - 1 : prev - 1));

    return (
        <section className="hero-slider" aria-roledescription="carousel" aria-label={heading || slideshow?.name}>

            {heading && (
                <h2 className="hero-news-title">
                    {heading}
                </h2>
            )}

            <div
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div className="slide" key={slide.id}>
                        <div
                            className="slide-background"
                            style={
                                slide.background_image
                                    ? { backgroundImage: `url(${slide.background_image})` }
                                    : undefined
                            }
                        >
                            <SlideCard slide={slide} />
                        </div>
                    </div>
                ))}
            </div>

            {count > 1 && showArrows && (
                <>
                    <button
                        className="slider-arrow left-arrow"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        &#10094;
                    </button>

                    <button
                        className="slider-arrow right-arrow"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        &#10095;
                    </button>
                </>
            )}

            {count > 1 && showDots && (
                <div className="slider-dots">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            className={`slider-dot ${index === currentSlide ? "active" : ""}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}
