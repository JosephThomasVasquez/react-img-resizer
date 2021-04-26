import React, { useState } from "react";

const FileComponent = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    console.log("files event >", e.target.files);

    setFiles(files.push(e.target.files));

    console.log("files >", files);
  };

  return (
    <div className="image-form-container">
      <h3>Choose a file to edit.</h3>
      <form className="image-form-">
        <label className="file-selector-label">
          Browse
          <input
            type="file"
            id="file-selector-default"
            onChange={handleChange}
            multiple
          />
        </label>
        <input type="text" id="file-selector-name" placeholder="Filename" />
      </form>
      {files && <div>{files.length}</div>}
    </div>
  );
};

export default FileComponent;
