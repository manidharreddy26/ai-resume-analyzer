import React from "react";

function Result({ result }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>ATS Score: {result.score}%</h2>

      <div style={{
        height: "20px",
        background: "#ddd",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "20px"
      }}>
        <div style={{
          width: `${result.score}%`,
          height: "100%",
          background: "#667eea"
        }} />
      </div>

      <h3>Matched Skills:</h3>
      <ul>
        {result.matched.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Missing Skills:</h3>
      <ul>
        {result.missing.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;