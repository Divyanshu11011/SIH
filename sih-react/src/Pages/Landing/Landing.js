import "./Landing.css";
import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/heading/Head';
import Feature from '../../Components/Features/Feature';
import Team from '../../Components/Team/Team';
import Container from '../../Components/BtnContainer/Container';
import Animation from '../../Components/Carousel/Animation';
import Footer from '../../Components/Footer/Footer';
import {BrowserRouter, Routes,Route,redirect,Navigate} from "react-router-dom";
import Button from "../../Components/Button/Button";
import Generate from "../Generate/Generate";
export default function Landing() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                        <Head />
                        <Feature />
                        <Container />
                        <Team />
                        <Animation />
                        <Footer />
                        </>
                    }/>
                    <Route path="/generate" element={<Generate/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}