import MainLayout from "@/pages/layouts/MainLayout";

// SECTIONS
import Hero from "./sections/hero";
import PracticeAreas from "./practice-areas/practice-areas";
import AboutUs from "./about-us/about-us";
import Approach from "./approach/approach";
import OurTeam from "./teams/team-our";
import News from "./news/news";
import ContactUs from "./contact-us/contact-us";
import TrustedBy from "./trusted-by/trusted";
import ConsultSection from "./contact-us/consult";

const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <PracticeAreas />
            <AboutUs />
            <Approach />
            <OurTeam />
            <News />
            <TrustedBy />
            <ConsultSection />
            <ContactUs />
        </MainLayout>
    );
};

export default Home;