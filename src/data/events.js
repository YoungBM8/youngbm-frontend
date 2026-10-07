/*
    Dates used for event status labels and the homepage countdowns.
    Times are local to the host city.
*/

// ---------------- CONGRESSES (in person) ----------------

// Young BMEco 2027 – Tirana, Albania (3–7 March 2027, CET = UTC+1)
export const YOUNG_BMECO_2027_START = new Date("2027-03-03T00:00:00+01:00");

// Young BMol 2026 – Lisbon, Portugal (16–21 November 2026, WET = UTC+0)
export const YOUNG_BMOL_2026_END = new Date("2026-11-21T23:59:59+00:00");

// ---------------- ONLINE SEMINARS ----------------

// 3rd Young BM Online Seminar (24 October 2026, CEST = UTC+2)
export const YOUNG_BM_SEMINAR_3_START = new Date("2026-10-24T00:00:00+02:00");

// 2nd Young BM Online Seminar (5 September 2026)
export const YOUNG_BM_SEMINAR_2026_END = new Date("2026-09-05T23:59:59+02:00");

// Application forms
export const APPLY_URL_BMECO_2027 =
    "https://docs.google.com/forms/d/e/1FAIpQLSefi9psrloGLxER9lP_KJWOxAvUokhZLwvlRfZL6zzOR_dExA/viewform";

export const APPLY_URL_SEMINAR_3 =
    "https://docs.google.com/forms/d/1FgyN4s52z7sv92knaI_YYRBXrj8tq5dQdeVWm-WsRsc/viewform";

/*
    Status of an event that is no longer open for applications:
    - "past"   → the event has finished
    - "closed" → applications are closed, but the event has not finished yet
*/
export function getClosedEventStatus(endDate, now = new Date()) {
    return now > endDate
        ? { variant: "past", label: "Past event" }
        : { variant: "closed", label: "Applications closed" };
}
