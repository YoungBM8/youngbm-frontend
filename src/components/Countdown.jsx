import { useEffect, useState } from "react";

function getTimeLeft(target) {
    const diff = Math.max(0, target.getTime() - Date.now());

    return {
        finished: diff === 0,
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

const pad = (value) => String(value).padStart(2, "0");

export default function Countdown({ target, finishedText = "The event has started!" }) {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(target));
        }, 1000);

        return () => clearInterval(timer);
    }, [target]);

    if (timeLeft.finished) {
        return <p className="countdown-finished">{finishedText}</p>;
    }

    const units = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: pad(timeLeft.hours) },
        { label: "Minutes", value: pad(timeLeft.minutes) },
        { label: "Seconds", value: pad(timeLeft.seconds) },
    ];

    return (
        <div className="countdown" role="timer" aria-label="Time left until the event starts">
            {units.map((unit) => (
                <div className="countdown-unit" key={unit.label}>
                    <span className="countdown-value">{unit.value}</span>
                    <span className="countdown-label">{unit.label}</span>
                </div>
            ))}
        </div>
    );
}
