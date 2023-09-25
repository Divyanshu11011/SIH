import "./Team.css";
import Member from "../member/Member";
import { Element } from "react-scroll";
export default function Team(){
    return(
        <div className="Team-Container">
            <div className="Team-Info-Container">
                <Element name="team"><h2 className="Team-heading">Crux Mates</h2></Element>
                <div className="Team-Members">
                    <Member Name="Mohit Singh"/>
                    <Member Name="Sachin Parmar"/>
                    <Member Name="Arshiya"/>
                    <Member Name="Divanshu"/>
                    <Member Name="Gurjot Singh"/>
                    <Member Name="Dhruvi"/>
                </div>
            </div>
        </div>
    )
}