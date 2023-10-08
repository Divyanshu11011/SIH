import React from "react";

export default function Verify() {
  return (
    <div>
      {/* Your existing content for the Verify page */}
      {/* Add an iframe to display verify.html */}
      <iframe
        src="/verify.html"
        title="Verification Page"
        style={{ width: "100%", height: "100vh", border: "none" }}
      ></iframe>
    </div>
  );
}
