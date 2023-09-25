import "./Member.css";

export default function Member(prop){
    return(
        <div className="Member-Cotainer">
            <img src="assets/images/test.jpg" alt="" id="Member-image"/>
            <div className="Member-Info">
                <h2 className="Member-Name">{prop.Name}</h2>
            </div>
        </div>
    )
}