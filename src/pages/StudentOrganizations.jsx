import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentOrganizationsContent from "../components/StudentOrganizationsContent";

import "../styles/studentorganizations.css";

export default function StudentOrganizations() {
    return (
        <div className="student-org-page">
            <Header />
            <Navbar />
            <StudentOrganizationsContent />
            <Footer />
        </div>
    );
}