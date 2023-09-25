import "./Landing.css";
import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/heading/Head';
import Feature from '../../Components/Features/Feature';
import Team from '../../Components/Team/Team';
import Container from '../../Components/BtnContainer/Container';
import Animation from '../../Components/Carousel/Animation';
import Footer from '../../Components/Footer/Footer';
export default function Landing() {
    return (
        <div>
            <Navbar />
            <Head />
            <Feature />
            <Container />
            <Team />
            <Animation />
            <Footer />
        </div>
    )
}