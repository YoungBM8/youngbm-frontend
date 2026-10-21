import { usePage } from "../api/client";
import PageSections from "./PageSections";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/board2026.css";

export default function BoardContent() {
    const { data: page, loading, error } = usePage("board");

    return (
        <main className="board2026-main">

            <section className="board2026-title-section">
                <h1>{page?.title ?? "Meet The Team"}</h1>
                <div className="board2026-title-line"></div>
                <RichText html={page?.intro} />
            </section>

            <Loadable loading={loading} error={error} compact>
                <PageSections sections={page?.sections} />
            </Loadable>

        </main>
    );
}
