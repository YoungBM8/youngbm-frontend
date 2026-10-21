import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { usePage } from "../api/client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PageSections from "../components/PageSections";
import { ErrorState, LoadingState } from "../components/PageState";
import RichText from "../components/RichText";
import { useSite } from "../context/useSite";

import "../styles/custompage.css";

/**
 * Pages built from sections: owner-created pages at /pages/<slug>, or a page
 * with a fixed address when `slug` is passed from the router.
 */
export default function CustomPage({ slug: fixedSlug }) {
    const params = useParams();
    const slug = fixedSlug ?? params.slug;
    const { settings } = useSite();
    const { data: page, loading, error } = usePage(slug);

    useEffect(() => {
        if (page?.title) {
            document.title = `${page.title} · ${settings?.site_name ?? "Young BM Network"}`;
        }
    }, [page, settings]);

    return (
        <div className="custom-page">
            <Header />
            <Navbar />

            <main className="custom-page-main">
                {loading && <LoadingState />}

                {error && <ErrorState error={error} />}

                {page && (
                    <>
                        {page.show_header !== false && (
                            <section
                                className={`custom-page-hero ${page.hero_image ? "custom-page-hero--image" : ""}`}
                                style={page.hero_image ? { backgroundImage: `url(${page.hero_image})` } : undefined}
                            >
                                <div className="custom-page-hero-card">
                                    <h1>{page.title}</h1>
                                    {page.subtitle && <p className="custom-page-subtitle">{page.subtitle}</p>}
                                    <RichText html={page.intro} />
                                </div>
                            </section>
                        )}

                        <RichText html={page.body} className="custom-page-body" />

                        <PageSections sections={page.sections} />
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}
