import React from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ResumeUpload({ setResumeText }) {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;
      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        content.items.forEach((item) => {
          text += item.str + " ";
        });
      }

      setResumeText(text);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h3>Upload Resume (PDF)</h3>
      <input type="file" accept="application/pdf" onChange={handleFile} />
    </div>
  );
}

export default ResumeUpload;
