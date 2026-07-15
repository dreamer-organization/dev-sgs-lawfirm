import MainLayout from "@/pages/layouts/MainLayout";

// SECTIONS
import Hero from "./sections/hero";
import PracticeAreas from "./practice-areas/practice-areas";
import AboutUs from "./about-us/about-us";
import Approach from "./approach/approach";
import OurTeam from "./teams/team-our";
import News from "./news/news";
import ContactUs from "./contact-us/contact-us";

const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <PracticeAreas />
            <AboutUs />
            <Approach />
            <OurTeam />
            <News />
            <ContactUs />
        </MainLayout>
    );
};

export default Home;