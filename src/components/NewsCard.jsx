import "../styles/slider.css";

export default function NewsCard({ slide }) {
    return (
        <div className="news-card">

            <h2 className="news-card-title">
                {slide.title}
            </h2>

            <div className={`news-image-wrapper ${slide.imageClass}`}>
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="news-card-image"
                />
            </div>

            <div className="news-card-text">
                {slide.lines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>

        </div>
    );
}