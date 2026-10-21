import { useEffect, useMemo } from "react";

import { API, useApi } from "../api/client";
import { EMPTY_CURRENT, EMPTY_MENUS, SiteContext } from "./useSite";

/**
 * Loads /api/site/ once: site settings, menus and the current editions.
 */
export function SiteProvider({ children }) {
    const { data, error, loading } = useApi(API.site);

    const value = useMemo(
        () => ({
            site: data,
            settings: data?.settings ?? null,
            menus: data?.menus ?? EMPTY_MENUS,
            current: data?.current ?? EMPTY_CURRENT,
            loading,
            error
        }),
        [data, error, loading]
    );

    useEffect(() => {
        const settings = data?.settings;

        if (!settings) {
            return;
        }

        if (settings.site_name) {
            document.title = settings.site_name;
        }

        if (settings.meta_description) {
            const meta = document.querySelector('meta[name="description"]');

            if (meta) {
                meta.setAttribute("content", settings.meta_description);
            }
        }
    }, [data]);

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
