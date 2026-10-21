import BoardBlock from "./blocks/BoardBlock";
import FaqBlock from "./blocks/FaqBlock";
import PartnersBlock from "./blocks/PartnersBlock";
import SpeakersBlock from "./blocks/SpeakersBlock";
import SponsorsBlock from "./blocks/SponsorsBlock";
import StudentOrganizationsBlock from "./blocks/StudentOrganizationsBlock";
import TimelineBlock from "./blocks/TimelineBlock";
import Slideshow from "./Slideshow";

/** Renders one component section with the matching reusable block. */
export default function ComponentSection({ section }) {
    switch (section.kind) {
        case "slideshow":
            return section.slideshow ? (
                <Slideshow slideshow={section.slideshow} title={section.title} />
            ) : null;
        case "faq":
            return <FaqBlock section={section} />;
        case "board":
            return <BoardBlock section={section} />;
        case "partners":
            return <PartnersBlock section={section} />;
        case "student_organizations":
            return <StudentOrganizationsBlock section={section} />;
        case "sponsors":
            return <SponsorsBlock section={section} />;
        case "speakers":
            return <SpeakersBlock section={section} />;
        case "timeline":
            return <TimelineBlock section={section} />;
        default:
            return null;
    }
}
