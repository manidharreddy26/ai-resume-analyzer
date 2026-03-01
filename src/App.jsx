import React, { useState } from "react";
import ResumeUpload from "./components/ResumeUpload";
import JobDescription from "./components/JobDescription";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = () => {
    const skills = [
      "react",
      "javascript",
      "html",
      "css",
      "node",
      "sql",
      "mongodb",
      "python",
      "java",
    ];

    const resumeLower = resumeText.toLowerCase();
    const jobLower = jobDesc.toLowerCase();

    const requiredSkills = skills.filter((skill) => jobLower.includes(skill));

    const matched = requiredSkills.filter((skill) =>
      resumeLower.includes(skill),
    );

    const missing = requiredSkills.filter(
      (skill) => !resumeLower.includes(skill),
    );

    const score = requiredSkills.length
      ? Math.round((matched.length / requiredSkills.length) * 100)
      : 0;

    setResult({ matched, missing, score });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>AI Resume Analyzer</h1>

        <ResumeUpload setResumeText={setResumeText} />
        <JobDescription setJobDesc={setJobDesc} />

        <button className="analyze-btn" onClick={analyzeResume}>
          Analyze Resume
        </button>

        {result && <Result result={result} />}
      </div>
    </div>
  );
}

export default App;
