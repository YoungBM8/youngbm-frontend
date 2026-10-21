import { usePage } from "../api/client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageSections from "../components/PageSections";
import { ErrorState, LoadingState } from "../components/PageState";
import RichText from "../components/RichText";

import "../styles/home.css";

export default function Home() {
    const { data: page, loading, error } = usePage("home");

    return (
        <>

            <Header />

            <Navbar />

            <main className="home-main">
                {loading && <LoadingState compact />}

                {error && <ErrorState error={error} compact />}

                {page && (
                    <>
                        <PageSections sections={page.sections} />

                        <RichText html={page.body} className="custom-page-body" />
                    </>
                )}
            </main>

            <Footer />

        </>
    );
}
