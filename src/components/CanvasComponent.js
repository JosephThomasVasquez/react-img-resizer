import React, { useState, useEffect, useRef } from "react";

const CanvasComponent = ({ file }) => {
  const [imageFile, setImageFile] = useState({});

  //   console.log(file)
  const canvasRef = useRef(null);

  const updateCanvas = (ctx, img, width, height) => {
    ctx.clearRect(0, 0, width, height);

    console.log('imgW, imgH > ', img.width, img.height);

    const centerWidth = (width / 2) - (img.width / 2);
    const centerHeight = (height / 2) - (img.height / 2);

    ctx.drawImage(img, centerHeight, centerHeight, img.width, img.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;

    if (file) {
      let reader = new FileReader();
      console.log("reader", reader);

      reader.onload = (e) => {
        let imgFile = new Image();
        imgFile.onload = () => {
          updateCanvas(context, imgFile, canvasWidth, canvasHeight);
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
      <img className="img-file" src={file && file.url} alt={file && file.name} />
      <br></br>
      <canvas ref={canvasRef} className="canvas-preview"></canvas>
    </div>
  );
};

export default CanvasComponent;
