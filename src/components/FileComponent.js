import React, { useState } from "react";

const FileComponent = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    console.log("files event >", e.target.files);

    const filesArray = Array.from(e.target.files);

    // console.log(typeof filesArray);
    // console.log("filesArray >", filesArray);

    // Create blob URL to use as image source and add files to state
    filesArray.forEach((file) => {
      const fileUrl = URL.createObjectURL(file);
      file.url = fileUrl;
      setFiles([...filesArray]);
    });
    console.log("filesArray", filesArray);
    console.log("files >", files);
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
      <ul>
        {files &&
          files.map((file) => (
            <li key={file.name}>
              <div className="file-preview">
                <img className="img-preview" src={file.url} />
                <span>{file.name}</span>
                <span>{file.type}</span>
                <span>{file.size}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FileComponent;
