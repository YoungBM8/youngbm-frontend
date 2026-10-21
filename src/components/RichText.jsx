import "../styles/richtext.css";

/**
 * Renders HTML written in the back office.
 *
 * The backend sanitises every rich text field on save (allow-list of tags,
 * safe link schemes), so the markup can be injected as-is here.
 */
export default function RichText({ html, className = "", as: Tag = "div" }) {
    if (!html) {
        return null;
    }

    return (
        <Tag
            className={`rich-text ${className}`.trim()}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
