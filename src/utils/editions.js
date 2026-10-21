const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function ordinal(day) {
    const mod100 = day % 100;

    if (mod100 >= 11 && mod100 <= 13) {
        return `${day}th`;
    }

    switch (day % 10) {
        case 1: return `${day}st`;
        case 2: return `${day}nd`;
        case 3: return `${day}rd`;
        default: return `${day}th`;
    }
}

/** "2027-03-03" -> local Date at midnight (what the countdown targets). */
export function localDate(isoDate, endOfDay = false) {
    if (!isoDate) {
        return null;
    }

    const [year, month, day] = isoDate.split("-").map(Number);

    return endOfDay
        ? new Date(year, month - 1, day, 23, 59, 59)
        : new Date(year, month - 1, day);
}

/** "3rd – 7th March 2027", "30th September – 4th October 2025", "24th October 2026". */
export function formatEditionDates(edition) {
    const start = localDate(edition.start_date);
    const end = localDate(edition.end_date);

    if (start && end) {
        if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
            return `${ordinal(start.getDate())} – ${ordinal(end.getDate())} ${MONTHS[end.getMonth()]} ${end.getFullYear()}`;
        }

        return `${ordinal(start.getDate())} ${MONTHS[start.getMonth()]} – ${ordinal(end.getDate())} ${MONTHS[end.getMonth()]} ${end.getFullYear()}`;
    }

    if (start) {
        return `${ordinal(start.getDate())} ${MONTHS[start.getMonth()]} ${start.getFullYear()}`;
    }

    return edition.display_dates || String(edition.year ?? "");
}

/**
 * Status chip of an edition:
 *   past    -> it has finished
 *   current -> applications are open ("Upcoming")
 *   closed  -> applications are closed but it has not finished yet
 */
export function editionStatus(edition, now = new Date()) {
    const end = localDate(edition.end_date || edition.start_date, true);

    if (end && now > end) {
        return { variant: "past", label: "Past event" };
    }

    if (edition.applications_open) {
        return { variant: "current", label: "Upcoming" };
    }

    return { variant: "closed", label: "Applications closed" };
}

export function editionLocation(edition) {
    return [edition.city, edition.country].filter(Boolean).join(", ");
}

export function editionFullName(edition) {
    return edition.name_subtitle ? `${edition.name}: ${edition.name_subtitle}` : edition.name;
}
