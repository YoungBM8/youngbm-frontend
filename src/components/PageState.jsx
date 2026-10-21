import "../styles/states.css";

export function LoadingState({ label = "Loading…", compact = false }) {
    return (
        <div
            className={`page-state page-state--loading ${compact ? "page-state--compact" : ""}`}
            role="status"
            aria-live="polite"
        >
            <span className="page-state-spinner" aria-hidden="true" />
            <span>{label}</span>
        </div>
    );
}

export function ErrorState({ error, compact = false }) {
    const notFound = error?.status === 404;

    return (
        <div
            className={`page-state page-state--error ${compact ? "page-state--compact" : ""}`}
            role="alert"
        >
            <p>
                {notFound
                    ? "This page does not exist or is not published."
                    : "Sorry, this content could not be loaded. Please try again in a moment."}
            </p>
        </div>
    );
}

/**
 * Small helper for list pages: shows loading / error, otherwise renders children.
 */
export function Loadable({ loading, error, children, compact = false }) {
    if (loading) {
        return <LoadingState compact={compact} />;
    }

    if (error) {
        return <ErrorState error={error} compact={compact} />;
    }

    return children;
}
