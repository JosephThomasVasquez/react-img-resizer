import React, { useState, useEffect, useRef } from "react";

const CanvasComponent = ({ file }) => {
  const [imageFile, setImageFile] = useState();

  //   console.log(file)
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (file) {
      console.log(file);
    }
  }, [file]);

  return (
    <div>
      <img className="img-file" src={file && file.url} alt="" />
      <canvas ref={canvasRef} className="canvas-preview"></canvas>
    </div>
  );
};

export default CanvasComponent;
