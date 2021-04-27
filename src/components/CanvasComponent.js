import React, { useState, useEffect, useRef } from "react";

const CanvasComponent = ({ file }) => {
  const [imageFile, setImageFile] = useState({});
  const [imageScale, setImageScale] = useState(100);
  const [canvasSize, setCanvasSize] = useState({
    width: 400,
    height: 300,
    dpi: window.devicePixelRatio,
  });

  //   const dpi = window.devicePixelRatio;
  //   console.log("dpi >", dpi);

  const canvasRef = useRef(null);

//   const setDpi = () => {
//     let canvasStyleWidth = getComputedStyle(canvasRef.current)
//       .getPropertyValue("width")
//       .slice(0, -2);
//     console.log(
//       "computedStyle",
//       getComputedStyle(canvasRef.current).getPropertyValue("width")
//     );
//     let canvasStyleHeight = getComputedStyle(canvasRef.current)
//       .getPropertyValue("height")
//       .slice(0, -2);

//     canvasRef.current.setAttribute("width", canvasStyleWidth * canvasSize.dpi);
//     canvasRef.current.setAttribute(
//       "height",
//       canvasStyleHeight * canvasSize.dpi
//     );
//     // console.log("canvasStyleWidth/Height", canvasStyleWidth, canvasStyleHeight);
//   };

//   if (canvasRef.current) {
//     // setDpi();
//   }

  const updateCanvas = (ctx, img, width, height) => {
    ctx.clearRect(0, 0, width, height);
    // Get image aspectRatio from img.width / img.height
    const aspectRatio = img.width / img.height;

    // Set a scale factor and resize the image
    let scale = imageScale;
    console.log("scale >", scale);
    const newWidth = img.height * aspectRatio * scale;
    const newHeight = (img.width / aspectRatio) * scale;

    // Set the center of the canvas based on image dimensions after scaling
    const centerWidth = width / 2 - newWidth / 2;
    const centerHeight = height / 2 - newHeight / 2;

    ctx.drawImage(img, centerWidth, centerHeight, newWidth, newHeight);
  };

  // Scale the image
  const scaleImageHandler = (e) => {
    setImageScale(e.target.value * 0.01);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { width } = context.canvas;
    const { height } = context.canvas;
    console.log(width, height);

    if (file) {
      let reader = new FileReader();
      //   console.log("reader", reader);

      reader.onload = (e) => {
        let imgFile = new Image();
        imgFile.onload = () => {
          updateCanvas(context, imgFile, width, height);
        };
        imgFile.src = e.target.result;
      };

      reader.readAsDataURL(file);

      setImageFile({ ...file });
      //   console.log(imageFile);
      //   updateCanvas(context);
    }
  }, [file, imageScale]);

  return (
    <div>
      <label htmlFor="scaleImage">Scale</label>
      <input
        type="range"
        name="scaleImage"
        id="scale-img"
        className="slider-scale"
        min="1"
        max="100"
        onChange={scaleImageHandler}
      />
      <canvas
        ref={canvasRef}
        width={canvasSize.width * canvasSize.dpi}
        height={canvasSize.height * canvasSize.dpi}
        className="canvas-preview"
      ></canvas>
      <br></br>
      {file && (
        <div>
          <img
            className="img-file"
            src={file && file.url}
            alt={file && file.name}
          />
          <p>{file.size}</p>
        </div>
      )}
    </div>
  );
};

export default CanvasComponent;
