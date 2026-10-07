import "../styles/event-status-chip.css";

/*
    Small label that shows the status of an event.
    variant: "current" | "past" | "closed"
*/
export default function EventStatusChip({ variant = "past", children }) {
    return (
        <span className={`event-status-chip event-status-chip--${variant}`}>
            <span className="event-status-chip-dot" aria-hidden="true" />
            {children}
        </span>
    );
}
