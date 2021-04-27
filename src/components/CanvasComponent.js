import React, { useState, useEffect, useRef } from "react";

const CanvasComponent = ({ file }) => {
  const [imageFile, setImageFile] = useState({});

  //   console.log(file)
  const canvasRef = useRef(null);

  const updateCanvas = (ctx, img) => {
    ctx.drawImage(img, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (file) {
      let reader = new FileReader();
      console.log("reader", reader);

      reader.onload = (e) => {
        let imgFile = new Image();
        imgFile.onload = () => {
          updateCanvas(context, imgFile);
        };
        imgFile.src = e.target.result;
      };

      reader.readAsDataURL(file);

      setImageFile({ ...file });
      console.log(imageFile);
      //   updateCanvas(context);
    }
  }, [file]);

  return (
    <div>
      <img className="img-file" src={file && file.url} alt="file.name" />
      <canvas ref={canvasRef} className="canvas-preview"></canvas>
    </div>
  );
};

export default CanvasComponent;
