import { Link } from "react-router-dom";

import {
    GraduationCap,
    CalendarDays,
    Users,
    Handshake,
    ClipboardCheck,
    Trees,
    CircleHelp,
    Mail
} from "lucide-react";

import "../styles/applyhere-youngbmol2026.css";

export default function ApplyHereBlueMenu() {
    const items = [
        {
            icon: GraduationCap,
            label: "Academic Part",
            path: "/about/academic-part"
        },
        {
            icon: Handshake,
            label: "Social Part",
            path: "/about/social-part"
        },
        {
            icon: ClipboardCheck,
            label: "Application process",
            path: "/bmol/application-process"
        },
        {
            icon: CircleHelp,
            label: "FAQ",
            path: "/faq"
        },
        {
            icon: CalendarDays,
            label: "Preliminary schedule",
            path: null
        },
        {
            icon: Users,
            label: "Volunteer zone",
            path: "/bmol/volunteer-zone"
        },
        {
            icon: Trees,
            label: "Nature Workshop",
            path: null
        },
        {
            icon: Mail,
            label: "Contact",
            path: "/contact"
        }
    ];

    return (
        <section className="applyhere-blue-section">
            <h2>About YOUNG BMol 2026</h2>

            <div className="applyhere-icons-grid">
                {items.map((item) => {
                    const Icon = item.icon;

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

                    if (item.path) {
                        return (
                            <Link
                                to={item.path}
                                className="applyhere-icon-item"
                                key={item.label}
                            >
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <div
                            className="applyhere-icon-item applyhere-icon-disabled"
                            key={item.label}
                        >
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}