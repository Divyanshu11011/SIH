import "./Button.css";
export default function Button(){
    return(
        <div className="Button-Container">
            <div className="Button-Image"></div>
            <div className="Button-Info">
                <p className="Button-Information">
                Hello
                </p>
                <button className="Button-button">Generate Now</button>
            </div>
        </div>
    )
}