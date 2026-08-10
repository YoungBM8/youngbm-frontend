import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";

import ApplyHereYoungBMol2026 from "./pages/ApplyHereYoungBMol2026";
import ApplicationProcessYoungBMol2026 from "./pages/ApplicationProcessYoungBMol2026";
import VolunteerZoneYoungBMol2026 from "./pages/VolunteerZoneYoungBMol2026";
import SponsorsYoungBMol2026 from "./pages/SponsorsYoungBMol2026";

import AboutOurCongress from "./pages/AboutOurCongress";
import AcademicPart from "./pages/AcademicPart";
import SocialPart from "./pages/SocialPart";
import ParticipantProfile from "./pages/ParticipantProfile";
import HistoryOfYoungBM from "./pages/HistoryOfYoungBM";
import SeminarApplyHere from "./pages/SeminarApplyHere";
import SeminarSpeakers from "./pages/SeminarSpeakers";

import FAQ from "./pages/FAQ";
import Board2026 from "./pages/Board2026";
import CollaboratorsPartners from "./pages/CollaboratorsPartners";
import StudentOrganizations from "./pages/StudentOrganizations";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/bmol/apply-here"
                    element={<ApplyHereYoungBMol2026 />}
                />

                <Route
                    path="/bmol/application-process"
                    element={<ApplicationProcessYoungBMol2026 />}
                />

                <Route
                    path="/bmol/volunteer-zone"
                    element={<VolunteerZoneYoungBMol2026 />}
                />

                <Route
                    path="/bmol/sponsors"
                    element={<SponsorsYoungBMol2026 />}
                />

                <Route
                    path="/young-bmol/apply-here"
                    element={<ApplyHereYoungBMol2026 />}
                />

                <Route
                    path="/young-bmol/application-process"
                    element={<ApplicationProcessYoungBMol2026 />}
                />

                <Route
                    path="/young-bmol/volunteer-zone"
                    element={<VolunteerZoneYoungBMol2026 />}
                />

                <Route
                    path="/young-bmol/sponsors"
                    element={<SponsorsYoungBMol2026 />}
                />
                <Route
                    path="/seminar/apply-here"
                    element={<SeminarApplyHere />}
                />
                <Route
                    path="/seminar/speakers"
                    element={<SeminarSpeakers />}
                />
                <Route
                    path="/about/about-our-congress"
                    element={<AboutOurCongress />}
                />

                <Route
                    path="/about/our-congress"
                    element={<AboutOurCongress />}
                />

                <Route
                    path="/about/academic-part"
                    element={<AcademicPart />}
                />

                <Route
                    path="/about/social-part"
                    element={<SocialPart />}
                />

                <Route
                    path="/about/participant-profile"
                    element={<ParticipantProfile />}
                />

                <Route
                    path="/about/history-of-young-bm"
                    element={<HistoryOfYoungBM />}
                />

                <Route
                    path="/faq"
                    element={<FAQ />}
                />

                <Route
                    path="/our-network/board-2026"
                    element={<Board2026 />}
                />

                <Route
                    path="/our-network/collaborators-partners"
                    element={<CollaboratorsPartners />}
                />

                <Route
                    path="/our-network/student-organizations"
                    element={<StudentOrganizations />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;