import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageComponents from "../components/PageComponents";

import ApplyHereHero from "../components/ApplyHereHero";
import ApplyHereBlueMenu from "../components/ApplyHereBlueMenu";
import ApplyHereCard from "../components/ApplyHereCard";

import "../styles/applyhere-youngbmol2026.css";

export default function ApplyHereYoungBMol2026() {

    return (

        <>

            <Header />

            <Navbar />

            <ApplyHereHero />

            <ApplyHereBlueMenu />

            <ApplyHereCard />

            <PageComponents slug="apply-here" />


            <Footer />

        </>

    );

}