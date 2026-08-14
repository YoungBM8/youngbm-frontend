import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    return (
        <>
            <div className="desktop-navbar-wrapper">
                <DesktopNavbar />
            </div>

            <div className="mobile-navbar-wrapper">
                <MobileNavbar />
            </div>
        </>
    );
}