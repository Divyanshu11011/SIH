import React, { useState } from "react";
import axios from "axios";
import "./Generate.css";
import Data from "../Data/Data";
import { Link } from 'react-router-dom';


function Generate() {
  const [status, setStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  

  const handleCreateCertificates = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/generate_certificate"
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

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
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
                onClick={() => handleImageClick("assets/images/cert1.png")}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="assets/images/cert1.png"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("assets/images/test.jpg")}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="assets/images/test.jpg"
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
                onClick={() => handleImageClick("assets/images/cert2.png")}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="assets/images/cert2.png"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("assets/images/test.jpg")}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="assets/images/test.jpg"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("assets/images/test.jpg")}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="assets/images/test.jpg"
                  style={{ width: "500px" }}
                  alt="Image 1"
                />
                <div className="image-text">USE THIS TEMPLATE</div>
              </div>
              <div
                className="image-container"
                onClick={() => handleImageClick("assets/images/cert1.png")}
                style={{ marginRight: "90px" }} // Add margin between images
              >
                <img
                  src="assets/images/cert1.png"
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