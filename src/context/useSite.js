import { createContext, useContext } from "react";

export const EMPTY_MENUS = { main: [], apply_grid: [] };
export const EMPTY_CURRENT = { congress: null, seminar: null };

export const SiteContext = createContext({
    site: null,
    settings: null,
    menus: EMPTY_MENUS,
    current: EMPTY_CURRENT,
    loading: true,
    error: null
});

/** Site settings, menus and current editions loaded by <SiteProvider>. */
export function useSite() {
    return useContext(SiteContext);
}
