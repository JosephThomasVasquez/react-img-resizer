import React, { useState } from "react";

const FileComponent = () => {
    
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    console.log("files event >", e.target.files);
    console.log("files >", files.length);

    setFiles([...e.target.files]);

    console.log("files >", files);
    console.log(files[0])
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
        <input type="text" id="file-selector-name" placeholder="Filename" />
      </form>
      <h3>{files && `${files.length} files`}</h3>
      <ul>{files && files.map((file) => (
          <li key={file.name}>{file.name}</li>
      ))}</ul>
    </div>
  );
};

export default FileComponent;
