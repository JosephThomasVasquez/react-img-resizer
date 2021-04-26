import React from "react";

const FileComponent = () => {
  return (
    <div className="image-form-container">
      <h3>Choose a file to edit.</h3>
      <form className="image-form-">
        <label className="file-selector-label">
          Browse
          <input type="file" id="file-selector-default" multiple />
        </label>
        <input type="text" id="file-selector-name" placeholder="Filename" />
      </form>
    </div>
  );
};

export default FileComponent;
