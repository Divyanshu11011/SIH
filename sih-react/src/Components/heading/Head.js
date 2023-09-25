import "./Head.css";
import { Element } from "react-scroll";
export default function Head(){
    return(
        <div className="Head-Container">
            <div className="Head-Right-Container">
                <Element name="home"><div className="Head-Right-heading">Blockchain Based<br/> Certificate <br/>Generation & Validation</div></Element>
                <button type="button" className="Head-Right-button"><a href="#">Get Started</a></button>
            </div>
            <div className="Head-Left-Container">
                <div className="Head-Left-white">
                    <div className="Head-Left-certificate">
                        <img src="assets/images/test.jpg" className="Head-Left-certificate-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}