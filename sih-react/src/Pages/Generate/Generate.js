import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Generate.css"; // Import your CSS file

function YourComponent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("Click to select file");
  const [template,setTemplate]=useState(null);
  const [xAxis,setXaxis]=useState(null);
  const [yAxis,setYaxis]=useState(null);

  const handleCreateCertificates = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/generate_certificate",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          Template: template,
          X:xAxis,
          Y:yAxis,
        }
      ); // Replace with your Flask server URL

      if (response.status === 200) {
        setStatus(response.data.message);
      } else {
        setStatus("Error generating certificates.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadStatus(null);
    if (file) {
      setSelectedFileName(file.name + " Selected");
    } else {
      setSelectedFileName("Click to select file");
    }
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post("http://localhost:5000/data", formData)
        .then((response) => {
          if (response.data === "File uploaded and data written to Data.xlsx") {
            setUploadStatus("Data uploaded successfully");
          }
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setUploadStatus("Error uploading file");
        });
    }
  };
  const images = [
    {
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJ29x_Mz2NA7mWntOCF5kEjFARjkc8ot6Ag",
      overlayImage: "Templates/template1.png",
      template: "template1.png",
      x:1009,
      y:644,
    },
    {
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJ29x_Mz2NA7mWntOCF5kEjFARjkc8ot6Ag",
      overlayImage: "Templates/template2.png",
      template: "template2.png",
      x:976,
      y:727,
    },
    {
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJ29x_Mz2NA7mWntOCF5kEjFARjkc8ot6Ag",
      overlayImage: "Templates/template3.png",
      template: "template3.png",
      x:976,
      y:716,
    },
    {
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJ29x_Mz2NA7mWntOCF5kEjFARjkc8ot6Ag",
      overlayImage: "Templates/template4.png",
      template: "template4.png",
      x:857,
      y:716,
    },
    ,
    {
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJ29x_Mz2NA7mWntOCF5kEjFARjkc8ot6Ag",
      overlayImage: "Templates/template5.png",
      template: "template5.png",
      x:973,
      y:698,
    },

    {
      bgImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJ29x_Mz2NA7mWntOCF5kEjFARjkc8ot6Ag",
      overlayImage: "Templates/template6.png",
      template: "template6.png",
      x:868,
      y:773,
    },
  ];

  useEffect(() => {
    function atvImg() {
      var d = document,
        bd = d.getElementsByTagName("body")[0],
        htm = d.getElementsByTagName("html")[0],
        win = window,
        imgs = d.querySelectorAll(".atvImg"),
        totalImgs = imgs.length,
        supportsTouch = "ontouchstart" in win || navigator.msMaxTouchPoints;

      if (totalImgs <= 0) {
        return;
      }

      // ... (The rest of your JavaScript code goes here)
      for (var l = 0; l < totalImgs; l++) {
        var thisImg = imgs[l],
          layerElems = thisImg.querySelectorAll(".atvImg-layer"),
          totalLayerElems = layerElems.length;

        if (totalLayerElems <= 0) {
          continue;
        }

        while (thisImg.firstChild) {
          thisImg.removeChild(thisImg.firstChild);
        }

        var containerHTML = d.createElement("div"),
          shineHTML = d.createElement("div"),
          shadowHTML = d.createElement("div"),
          layersHTML = d.createElement("div"),
          layers = [];

        thisImg.id = "atvImg__" + l;
        containerHTML.className = "atvImg-container";
        shineHTML.className = "atvImg-shine";
        shadowHTML.className = "atvImg-shadow";
        layersHTML.className = "atvImg-layers";

        for (var i = 0; i < totalLayerElems; i++) {
          var layer = d.createElement("div"),
            imgSrc = layerElems[i].getAttribute("data-img");

          layer.className = "atvImg-rendered-layer";
          layer.setAttribute("data-layer", i);
          layer.style.backgroundImage = "url(" + imgSrc + ")";
          layersHTML.appendChild(layer);

          layers.push(layer);
        }

        containerHTML.appendChild(shadowHTML);
        containerHTML.appendChild(layersHTML);
        containerHTML.appendChild(shineHTML);
        thisImg.appendChild(containerHTML);

        var w =
          thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
        thisImg.style.transform = "perspective(" + w * 3 + "px)";

        if (supportsTouch) {
          win.preventScroll = false;

          (function (_thisImg, _layers, _totalLayers, _shine) {
            thisImg.addEventListener("touchmove", function (e) {
              if (win.preventScroll) {
                e.preventDefault();
              }
              processMovement(e, true, _thisImg, _layers, _totalLayers, _shine);
            });
            thisImg.addEventListener("touchstart", function (e) {
              win.preventScroll = true;
              processEnter(e, _thisImg);
            });
            thisImg.addEventListener("touchend", function (e) {
              win.preventScroll = false;
              processExit(e, _thisImg, _layers, _totalLayers, _shine);
            });
          })(thisImg, layers, totalLayerElems, shineHTML);
        } else {
          (function (_thisImg, _layers, _totalLayers, _shine) {
            thisImg.addEventListener("mousemove", function (e) {
              processMovement(
                e,
                false,
                _thisImg,
                _layers,
                _totalLayers,
                _shine
              );
            });
            thisImg.addEventListener("mouseenter", function (e) {
              processEnter(e, _thisImg);
            });
            thisImg.addEventListener("mouseleave", function (e) {
              processExit(e, _thisImg, _layers, _totalLayers, _shine);
            });
          })(thisImg, layers, totalLayerElems, shineHTML);
        }
      }

      function processMovement(
        e,
        touchEnabled,
        elem,
        layers,
        totalLayers,
        shine
      ) {
        var bdst = bd.scrollTop || htm.scrollTop,
          bdsl = bd.scrollLeft,
          pageX = touchEnabled ? e.touches[0].pageX : e.pageX,
          pageY = touchEnabled ? e.touches[0].pageY : e.pageY,
          offsets = elem.getBoundingClientRect(),
          w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
          h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
          wMultiple = 320 / w,
          offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
          offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
          dy = pageY - offsets.top - bdst - h / 2,
          dx = pageX - offsets.left - bdsl - w / 2,
          yRotate = (offsetX - dx) * (0.07 * wMultiple),
          xRotate = (dy - offsetY) * (0.1 * wMultiple),
          imgCSS = "rotateX(" + xRotate + "deg) rotateY(" + yRotate + "deg)",
          arad = Math.atan2(dy, dx),
          angle = (arad * 180) / Math.PI - 90;

        if (angle < 0) {
          angle = angle + 360;
        }

        if (elem.firstChild.className.indexOf(" over") !== -1) {
          imgCSS += " scale3d(1.07,1.07,1.07)";
        }
        elem.firstChild.style.transform = imgCSS;

        shine.style.background =
          "linear-gradient(" +
          angle +
          "deg, rgba(255,255,255," +
          ((pageY - offsets.top - bdst) / h) * 0.4 +
          ") 0%,rgba(255,255,255,0) 80%)";
        shine.style.transform =
          "translateX(" +
          offsetX * totalLayers -
          0.1 +
          "px) translateY(" +
          offsetY * totalLayers -
          0.1 +
          "px)";

        var revNum = totalLayers;
        for (var ly = 0; ly < totalLayers; ly++) {
          layers[ly].style.transform =
            "translateX(" +
            offsetX * revNum * ((ly * 2.5) / wMultiple) +
            "px) translateY(" +
            offsetY * totalLayers * ((ly * 2.5) / wMultiple) +
            "px)";
          revNum--;
        }
      }

      function processEnter(e, elem) {
        elem.firstChild.className += " over";
      }

      function processExit(e, elem, layers, totalLayers, shine) {
        var container = elem.firstChild;

        container.className = container.className.replace(" over", "");
        container.style.transform = "";
        shine.style.cssText = "";

        for (var ly = 0; ly < totalLayers; ly++) {
          layers[ly].style.transform = "";
        }
      }
    }

    atvImg(); // Call the function when the component mounts
  }, []);

  const openFullScreen = (image) => {
    setSelectedImage(image);
    setIsFullScreen(true);
    setTemplate(image.template);
    setXaxis(image.x);
    setYaxis(image.y);
    // Scroll to the bottom of the page
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
    setIsFullScreen(false);
    setTemplate(null);
    setXaxis(null);
    setYaxis(null);
  };

  const uploadHandler = () => {
    // Handle the "Upload" button click event
    // You can add your logic here
  };

  return (
    <>
      <h1>SELECT TEMPLATE</h1>
      <div className="container">
        {images.map((image, index) => (
          <div
            className="cover atvImg"
            key={index}
            onClick={() => openFullScreen(image)}
          >
            <div className="atvImg-layer" data-img={image.bgImage}></div>
            <div className="atvImg-layer" data-img={image.overlayImage}></div>
          </div>
        ))}
      </div>

      {isFullScreen && selectedImage && (

        <div className="fullscreen-overlay"
          style={{ display: "flex", flexDirection: "row" }}>
          <br />
          <img src="assets/images/close.png" onClick={closeFullScreen} style={{ width: "20px", height: "fit-content", marginLeft: "5%" }} />

          <div className="fullscreen-content">
            <img
              src={selectedImage.overlayImage}
              alt="Full Screen"
              style={{ width: "50%" }}
            />

            <div
              className="buttons"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label htmlFor="file" style={{
              }}
              >
                {selectedFileName}
              </label>

              <input
                type="file"
                id="file"
                onChange={handleFileChange}

              />
              <button onClick={handleFileUpload} style={{ margin: "1%" }}>
                Upload
              </button>
              <button
                onClick={handleCreateCertificates}
                style={{ margin: "1%", width: "100px" }}
              >
                Generate
              </button>

              <p style={{ margin: "1%" }}>Status: {uploadStatus}<br />
                {status}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default YourComponent;
