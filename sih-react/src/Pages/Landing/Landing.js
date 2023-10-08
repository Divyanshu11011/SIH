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
import Verify from "../Verify/Verify";
import Admin from "../Admin/Admin";
import Upload from "../Upload/Upload";
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
                    
                    <Route path="/verify" element={<Verify/>}/>
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/deploy" element={<Upload/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}