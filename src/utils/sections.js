/** Section kinds whose content is managed elsewhere in the back office. */
export const COMPONENT_KINDS = new Set([
    "slideshow",
    "faq",
    "board",
    "partners",
    "student_organizations",
    "sponsors",
    "speakers",
    "timeline"
]);

export function isComponentSection(section) {
    return COMPONENT_KINDS.has(section.kind);
}
