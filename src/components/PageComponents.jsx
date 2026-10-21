import { usePage } from "../api/client";
import PageSections from "./PageSections";

/**
 * Sections of a built-in page that its fixed design does not consume itself.
 * Pass the kinds the design already renders in `exclude`; everything else is
 * shown here, in order, below the fixed content.
 */
export default function PageComponents({ slug, exclude = [] }) {
    const { data: page } = usePage(slug);

    const sections = (page?.sections ?? []).filter((section) => !exclude.includes(section.kind));

    if (sections.length === 0) {
        return null;
    }

    return <PageSections sections={sections} />;
}
