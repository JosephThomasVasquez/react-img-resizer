import React, { useState } from "react";
import CanvasComponent from "./CanvasComponent";

const FileComponent = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const filesArray = Array.from(e.target.files);

    // Create blob URL to use as image source and add files to state
    filesArray.forEach((file) => {
      const fileUrl = URL.createObjectURL(file);
      file.url = fileUrl;
      setFiles([...filesArray]);
    });
    // console.log("filesArray", filesArray);
    // console.log("files >", files);
  };

  return (
    <div className="image-form-container">
      <h3>Choose a file to edit.</h3>
      <form className="image-form">
        <label className="file-selector-label">
          Browse
          <input
            type="file"
            id="file-selector-default"
            onChange={handleChange}
            multiple
          />
        </label>
        <div id={files.length > 0 ? "file-selector-name" : "none"}>
          <ul>
            {files &&
              files.map((file) => (
                <li key={file.name}>
                  <div className="file-preview">
                    <img className="img-preview" src={file.url} alt={file.name} />
                    <span>{file.name}</span>
                    <span>{file.type}</span>
                    <span>{file.size}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </form>
      <h3>{files && `${files.length} files`}</h3>
      {files && <CanvasComponent file={files[0]} />}
    </div>
  );
};

export default FileComponent;
