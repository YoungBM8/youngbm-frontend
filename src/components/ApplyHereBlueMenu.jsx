import {
    Award,
    BookOpen,
    Bus,
    CalendarDays,
    Camera,
    CircleHelp,
    ClipboardCheck,
    Download,
    FileText,
    FlaskConical,
    Globe,
    GraduationCap,
    Handshake,
    Heart,
    Home,
    Info,
    Leaf,
    Mail,
    MapPin,
    Megaphone,
    Mic,
    Microscope,
    Music,
    Newspaper,
    Sparkles,
    Star,
    Trees,
    Users,
    Utensils
} from "lucide-react";

import { useSite } from "../context/useSite";
import MenuLink from "./MenuLink";

import "../styles/applyhere-youngbmol2026.css";

// Must match ICON_CHOICES in the backend (content/models.py).
const ICONS = {
    Award,
    BookOpen,
    Bus,
    CalendarDays,
    Camera,
    CircleHelp,
    ClipboardCheck,
    Download,
    FileText,
    FlaskConical,
    Globe,
    GraduationCap,
    Handshake,
    Heart,
    Home,
    Info,
    Leaf,
    Mail,
    MapPin,
    Megaphone,
    Mic,
    Microscope,
    Music,
    Newspaper,
    Sparkles,
    Star,
    Trees,
    Users,
    Utensils
};

export default function ApplyHereBlueMenu() {
    const { menus, current } = useSite();

    const items = menus.apply_grid;
    const congress = current.congress;

    if (items.length === 0) {
        return null;
    }

    return (
        <section className="applyhere-blue-section">
            <h2>About {congress?.name ?? "the congress"}</h2>

            <div className="applyhere-icons-grid">
                {items.map((item) => {
                    const Icon = ICONS[item.icon] ?? Info;

                    const content = (
                        <>
                            <Icon
                                className="applyhere-menu-icon"
                                size={54}
                                strokeWidth={1.7}
                            />

                            <span>{item.label}</span>
                        </>
                    );

                    if (item.href) {
                        return (
                            <MenuLink
                                item={item}
                                className="applyhere-icon-item"
                                key={item.id}
                            >
                                {content}
                            </MenuLink>
                        );
                    }

                    return (
                        <div
                            className="applyhere-icon-item applyhere-icon-disabled"
                            key={item.id}
                        >
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
