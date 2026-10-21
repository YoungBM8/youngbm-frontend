import RichText from "../RichText";

import "../../styles/component-blocks.css";

/** Title and text an editor typed on a component section, shown above its list. */
export default function BlockHeading({ section, eyebrow }) {
    if (!section?.title && !section?.body && !eyebrow) {
        return null;
    }

    return (
        <header className="component-heading">
            {eyebrow && <span className="component-heading-eyebrow">{eyebrow}</span>}
            {section?.title && <h2>{section.title}</h2>}
            <RichText html={section?.body} />
        </header>
    );
}
