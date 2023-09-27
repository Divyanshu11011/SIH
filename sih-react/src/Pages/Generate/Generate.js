import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function Generate() {
  const [status, setStatus] = useState('');

  const handleCreateCertificates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/generate_certificate'); // Replace with your Flask server URL

      if (response.status === 200) {
        setStatus(response.data.message);
      } else {
        setStatus('Error generating certificates.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleCreateCertificates}>Generate Certificates</button>
        <p>Status: {status}</p>
      </header>
    </div>
  );
}

export default Generate;