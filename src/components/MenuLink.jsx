import { Link } from "react-router-dom";

import { isExternalHref } from "../utils/links";

/**
 * Renders one menu item as a router link, an external anchor, or plain text
 * when the item has no destination (dropdown heading or placeholder).
 */
export default function MenuLink({ item, className, onClick, children }) {
    const label = children ?? item.label;

    if (!item.href) {
        return <span className={className}>{label}</span>;
    }

    if (isExternalHref(item.href) || item.open_in_new_tab) {
        return (
            <a
                href={item.href}
                className={className}
                onClick={onClick}
                target={item.open_in_new_tab ? "_blank" : undefined}
                rel={item.open_in_new_tab ? "noopener noreferrer" : undefined}
            >
                {label}
            </a>
        );
    }

    return (
        <Link to={item.href} className={className} onClick={onClick}>
            {label}
        </Link>
    );
}
