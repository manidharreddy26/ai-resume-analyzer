import React from "react";

function JobDescription({ setJobDesc }) {
  return (
    <div>
      <h3>Paste Job Description</h3>
      <textarea
        rows="6"
        cols="60"
        placeholder="Paste job description here..."
        onChange={(e) => setJobDesc(e.target.value)}
      />
    </div>
  );
}

export default JobDescription;
