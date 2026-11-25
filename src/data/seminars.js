/*
    Online seminars that have already taken place, grouped by series.
    Used by the "First series of seminars" page and the homepage.
    In the order the seminars were held (oldest first).

    Speaker photos come from src/assets/seminar-speakers-shrunk: shrunk
    copies (max 400px) of the originals in src/assets, so the page does
    not download the full-size files.
*/

import miguel from "../assets/seminar-speakers-shrunk/miguel-shrunk.jpg";
import andreas from "../assets/seminar-speakers-shrunk/andreas-shrunk.jpg";
import rocio from "../assets/seminar-speakers-shrunk/rocio-shrunk.jpg";
import igem from "../assets/igem.png";
import neuroholics from "../assets/neuroholics.png";
import maria from "../assets/seminar-speakers-shrunk/maria-shrunk.jpg";
import simran from "../assets/seminar-speakers-shrunk/simran-ramchandani-shrunk.png";

export const SEMINAR_SERIES_PATH = "/seminar/first-series";

export const FIRST_SEMINAR_SERIES = {
    title: "First series of seminars",
    intro:
        "Three free online seminars held between June and October 2026, " +
        "in the run-up to the Young BMol 2026 Congress in Lisbon.",
    seminars: [
        {
            id: "seminar-1",
            edition: "1st edition",
            number: "01",
            title: "Industry vs Academia",
            subtitle: null,
            date: "6th June 2026",
            description:
                "The seminar that opened the series: panel discussions, " +
                "career insights and a live audience Q&A with young " +
                "scientists and science communicators on building a career " +
                "in science.",
            speakers: [
                {
                    name: "Miguel López Molina",
                    role: "Biochemistry graduate and science communicator, Autonomous University of Madrid",
                    image: miguel,
                    type: "person",
                },
                {
                    name: "Andreas Andreou",
                    role: "Synthetic biologist and biotech entrepreneur, co-founder of Prozymi Biolabs",
                    image: andreas,
                    type: "person",
                },
                {
                    name: "Rocío Vázquez Martínez",
                    role: "PhD researcher, University of Zaragoza",
                    image: rocio,
                    type: "person",
                },
                {
                    name: "iGEM Thessaloniki",
                    role: "Interdisciplinary student team, Aristotle University of Thessaloniki",
                    image: igem,
                    type: "logo",
                },
                {
                    name: "Neuroholics",
                    role: "Non-profit organization raising public awareness of neuroscience",
                    image: neuroholics,
                    type: "logo",
                },
            ],
        },
        {
            id: "seminar-2",
            edition: "2nd edition",
            number: "02",
            title: "AI in Science",
            subtitle: "Tools, Methods and Ethics",
            date: "5th September 2026",
            description:
                "A hands-on, workshop-style seminar introducing AI systems " +
                "used in research, examples of correct prompting, how AI " +
                "detector programs work, and the ethical considerations of " +
                "using AI in research.",
            speakers: [
                {
                    name: "Maria Arsenia Adeline Maniori",
                    role: "Bioinformatics Department, Cyprus Institute of Neurobiology and Genetics",
                    image: maria,
                    type: "person",
                },
            ],
        },
        {
            id: "seminar-3",
            edition: "3rd edition",
            number: "03",
            title: "Communicating Science in the Digital Era",
            subtitle: "Turning Expertise into Impact",
            date: "24th October 2026",
            description:
                "A seminar on the key principles of effective science " +
                "communication: adapting the message to different audiences, " +
                "choosing the right channels, storytelling, clear visual " +
                "communication, and balancing simplicity with scientific accuracy.",
            speakers: [
                {
                    name: "Simran Ramchandani",
                    role: "Biologist and science communicator (@Sim_biotica)",
                    image: simran,
                    type: "person",
                },
            ],
        },
    ],
};
