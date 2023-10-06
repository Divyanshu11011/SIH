import React, { useState } from "react";
import axios from "axios";
import "./Generate.css";
import Data from "../Data/Data";
import { Link } from 'react-router-dom';


function Generate() {
  const [status, setStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [Image,SetImage] = useState(null);
  
  /* Test Purpose */
  const [x,setX]=useState('');
  const [y,setY]=useState('');

  const handleCreateCertificates = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/generate_certificate",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // template:JSON.stringify( selectedTemplate ),
          template: Image,
          X:x,
          Y:y,
        }
      );

      if (response.status === 200) {
        setStatus(response.data.message);
      } else {
        setStatus("Error generating certificates.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  const handleImageClick = (imageUrl,xAxis,yAxis) => {
    setSelectedImage(`Templates/${imageUrl}`);
    /* Test Purpose */
    setX(xAxis);
    setY(yAxis);
    SetImage(imageUrl);
  };
  


  return (
    <div className="App">
      <div
        className="leftside"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        {selectedImage ? (
          <div className="full" style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", marginRight: "5%" }}>
              <img
                src={selectedImage}
                style={{ width: "800px" }}
                alt="Selected Image"
              />
            </div>
            <div
              className="rightside"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <button
                onClick={handleCreateCertificates}
                style={{
                  padding: "10px",
                  fontSize: "x-large",
                  backgroundColor: "#A1C7FF",
                  color: "#212121",
                  border: "0px",
                  fontWeight: "normal",
                  borderRadius: "35px",
                  width: "300px",
                }}
              >
                GENERATE
              </button>
             <br/>
             <button
                
                style={{
                  padding: "10px",
                  fontSize: "x-large",
                  backgroundColor: "#A1C7FF",
                  color: "#212121",
                  border: "0px",
                  fontWeight: "normal",
                  borderRadius: "35px",
                  width: "300px",
                }}
              >
               <Link style={{ textDecoration: "none",color:"black"}}to="/data"> UPLOAD</Link>
              </button>
              <br />
              <p>Status: {status}</p>
            </div>
          </div>
        ) : (
          <div>
            <h2
              style={{
                backgroundColor: "#A1C7FF",
                width: "fit-content",
                padding: "1%",
                textAlign: "center",
                borderRadius: "30px",
                fontSize: "large",
                margin: "auto",
              }}
            >
              Select an Image
            </h2>
            <div
              className="image-list"
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                scrollbarWidth: "inherit",
                width: "1500px",
              }}
            >
              <div
                className="image-container"
                onClick={() => handleImageClick("template1.png",'1009','644')}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="Templates/template1.png"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("template2.png",'976','727')}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="Templates/template2.png"
                  style={{
                    width: "500px",
                    marginRight: "50%",
                  }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("template3.png",'976','716')}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="Templates/template3.png"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("template4.png",'981','738')}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="Templates/template4.png"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("template5.png",'973','698')}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="Templates/template5.png"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("template6.png",'868','773')}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="Templates/template6.png"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
            </div>
          </div>
        )}
       
      </div>
    </div>
  );
}

export default Generate;