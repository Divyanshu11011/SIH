import "./Button.css";
export default function Button(){
    return(
        <div className="Button-Container">
            <div className="Button-Image"></div>
            <div className="Button-Info">
                <p className="Button-Information">
                You can try running this code in any Python environment or online compiler to see the output "Hello,
                 world!" displayed on the console.If you were referring to something else related to "hello" or have 
                 a specific code-related question, please provide more details, and I'll be happy to assist you further.
                </p>
                <button className="Button-button">Generate Now</button>
            </div>
        </div>
    )
}