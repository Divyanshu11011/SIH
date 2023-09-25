import "./Feature.css";
import { Element } from "react-scroll";
export default function Feature() {
    return (
        <div className="Feature-Container">
            <div className="Feature-Card-Container">
            <Element name="feature"><h2 id="Feature-Card-Heading">FeatCrux's</h2></Element>
                <div className="Feature-Menu-Card-Container">
                    <div className="Feature-Menu Feature-Menu-First"></div>
                    <div className="Feature-Menu Feature-Menu-Second"></div>
                    <div className="Feature-Menu Feature-Menu-Third"></div>
                </div>
            </div>
        </div>
    )
}