import "./Animation.css";
export default function Animation() {
    return (
        <div className="Animation-Container">
            <div className="slider">
                <span style={{'--i':1}}><img src="assets/images/slide.jpg" alt="" /></span>
                <span style={{'--i':2}}><img src="assets/images/slide.jpg" alt="" /></span>
                <span style={{'--i':3}}><img src="assets/images/slide.jpg" alt="" /></span>
                <span style={{'--i':4}}><img src="assets/images/slide.jpg" alt="" /></span>
                <span style={{'--i':5}}><img src="assets/images/slide.jpg" alt="" /></span>
                <span style={{'--i':6}}><img src="assets/images/slide.jpg" alt="" /></span>
                <span style={{'--i':7}}><img src="assets/images/slide.jpg" alt="" /></span>
                <span style={{'--i':8}}><img src="assets/images/slide.jpg" alt="" /></span>
            </div>
        </div>
    )
}