import "./Landing.css";
import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/heading/Head';
import Feature from '../../Components/Features/Feature';
import Team from '../../Components/Team/Team';
import Container from '../../Components/BtnContainer/Container';
import Animation from '../../Components/Carousel/Animation';
import Footer from '../../Components/Footer/Footer';
import {BrowserRouter, Routes,Route,redirect,Navigate} from "react-router-dom";
import Generate from "../Generate/Generate";
import Data from "../Data/Data";
import Verify from "../Verify/Verify";
import Admin from "../Admin/Admin";
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
                    <Route path="/data" element={<Data/>}/>
                    <Route path="/verify" element={<Verify/>}/>
                    <Route path="/admin" element={<Admin/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}