import { useEffect, useState } from "react";

const BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export const API = {
    site: "/api/site/",
    faq: "/api/faq/",
    board: "/api/board/",
    partners: "/api/partners/",
    studentOrganizations: "/api/student-organizations/",
    events: "/api/events/",
    sponsors: "/api/sponsors/",
    page: (slug) => `/api/pages/${encodeURIComponent(slug)}/`,
    event: (slug) => `/api/events/${encodeURIComponent(slug)}/`,
    sponsorsOf: (slug) => (slug ? `/api/sponsors/?event=${encodeURIComponent(slug)}` : "/api/sponsors/")
};

export function apiUrl(path) {
    return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// One in-flight / resolved promise per path, so several components asking
// for the same resource during a page view share a single request.
const cache = new Map();

export function fetchJson(path, { force = false } = {}) {
    if (!force && cache.has(path)) {
        return cache.get(path);
    }

    const promise = fetch(apiUrl(path), {
        headers: { Accept: "application/json" }
    })
        .then(async (response) => {
            if (!response.ok) {
                const error = new Error(`Request failed with status ${response.status}`);
                error.status = response.status;
                throw error;
            }

            return response.json();
        })
        .catch((error) => {
            cache.delete(path);
            throw error;
        });

    cache.set(path, promise);

    return promise;
}

export function clearApiCache() {
    cache.clear();
}

/**
 * Load JSON from the backend.
 *
 * Returns { data, error, loading }. Pass a falsy path to skip the request.
 */
export function useApi(path) {
    const [state, setState] = useState({
        data: null,
        error: null,
        loading: Boolean(path)
    });

    useEffect(() => {
        if (!path) {
            setState({ data: null, error: null, loading: false });
            return undefined;
        }

        let cancelled = false;

        setState((previous) => ({ ...previous, loading: true, error: null }));

        fetchJson(path)
            .then((data) => {
                if (!cancelled) {
                    setState({ data, error: null, loading: false });
                }
            })
            .catch((error) => {
                if (!cancelled) {
                    setState({ data: null, error, loading: false });
                }
            });

        return () => {
            cancelled = true;
        };
    }, [path]);

    return state;
}

export function usePage(slug) {
    return useApi(slug ? API.page(slug) : null);
}
