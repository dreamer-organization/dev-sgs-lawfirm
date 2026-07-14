import MainLayout from "@/pages/layouts/MainLayout";

// SECTIONS
import Hero from "./sections/hero";
import PracticeAreas from "./practice-areas/practice-areas";
import AboutUs from "./about-us/about-us";
import Approach from "./approach/approach";

const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <PracticeAreas />
            <AboutUs />
            <Approach />
        </MainLayout>
    );
};

export default Home;