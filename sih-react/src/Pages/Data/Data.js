import React, { useState } from 'react';
import axios from 'axios';
import './Data.css';

function Data() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('No file selected'); // Add selectedFileName state

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadStatus(null);
    if (file) {
      setSelectedFileName(file.name); // Update selectedFileName with the selected file name
    } else {
      setSelectedFileName('No file selected');
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios.post('http://localhost:5000/data', formData).then((response) => {
        if (response.data === 'File uploaded and data written to Data.xlsx') {
          setUploadStatus('Data uploaded successfully');
        }
      });
    }
  };

  return (
    <div className="container">
      <label htmlFor="file" className="custom-file-upload">
        {selectedFileName} {/* Display the selected file name */}
      </label>
      <input
        type="file"
        id="file"
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the input element
      />
      <button onClick={handleFileUpload}>Upload File</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
}

export default Data;
