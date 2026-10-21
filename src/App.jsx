import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import { SiteProvider } from "./context/SiteContext";

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
import Board from "./pages/Board";
import CollaboratorsPartners from "./pages/CollaboratorsPartners";
import StudentOrganizations from "./pages/StudentOrganizations";
import Contact from "./pages/Contact";
import CustomPage from "./pages/CustomPage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <SiteProvider>
                <ScrollToTop />

                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* Current congress edition */}
                    <Route path="/young-bmol/apply-here" element={<ApplyHereYoungBMol2026 />} />
                    <Route path="/young-bmol/application-process" element={<ApplicationProcessYoungBMol2026 />} />
                    <Route path="/young-bmol/volunteer-zone" element={<VolunteerZoneYoungBMol2026 />} />
                    <Route path="/young-bmol/sponsors" element={<SponsorsYoungBMol2026 />} />

                    {/* Previous congress: Young BMol 2026 (Lisbon) */}
                    <Route path="/young-bmol-2026/info" element={<CustomPage slug="info-young-bmol-2026" />} />
                    <Route path="/young-bmol-2026/sponsors" element={<SponsorsYoungBMol2026 slug="sponsors-young-bmol-2026" />} />

                    {/* Older addresses of the same pages */}
                    <Route path="/bmol/apply-here" element={<ApplyHereYoungBMol2026 />} />
                    <Route path="/bmol/application-process" element={<ApplicationProcessYoungBMol2026 />} />
                    <Route path="/bmol/volunteer-zone" element={<VolunteerZoneYoungBMol2026 />} />
                    <Route path="/bmol/sponsors" element={<SponsorsYoungBMol2026 />} />

                    {/* Seminar */}
                    <Route path="/seminar/apply-here" element={<SeminarApplyHere />} />
                    <Route path="/seminar/speakers" element={<SeminarSpeakers />} />

                    {/* About */}
                    <Route path="/about/our-congress" element={<AboutOurCongress />} />
                    <Route path="/about/about-our-congress" element={<AboutOurCongress />} />
                    <Route path="/about/academic-part" element={<AcademicPart />} />
                    <Route path="/about/social-part" element={<SocialPart />} />
                    <Route path="/about/participant-profile" element={<ParticipantProfile />} />
                    <Route path="/about/history-of-young-bm" element={<HistoryOfYoungBM />} />

                    <Route path="/faq" element={<FAQ />} />

                    {/* Our network */}
                    <Route path="/our-network/board" element={<Board />} />
                    <Route path="/our-network/board-2026" element={<Navigate to="/our-network/board" replace />} />
                    <Route path="/our-network/collaborators-partners" element={<CollaboratorsPartners />} />
                    <Route path="/our-network/student-organizations" element={<StudentOrganizations />} />

                    <Route path="/contact" element={<Contact />} />

                    {/* Pages created in the back office */}
                    <Route path="/pages/:slug" element={<CustomPage />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </SiteProvider>
        </BrowserRouter>
    );
}

export default App;
