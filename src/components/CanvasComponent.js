import React, { useState, useEffect, useRef } from "react";

const CanvasComponent = ({ file }) => {
  const [imageFile, setImageFile] = useState({});
  const [imageScale, setImageScale] = useState(100);

  //   console.log(file)
  const canvasRef = useRef(null);

  const updateCanvas = (ctx, img, width, height) => {
    ctx.clearRect(0, 0, width, height);

    // Get image aspectRatio from img.width / img.height
    const aspectRatio = img.width / img.height;
    // console.log('aspectRatio >', aspectRatio);

    // Set a scale factor and resize the iamge
    let scale = imageScale * 0.001;
    console.log(scale)
    const newWidth = img.height * aspectRatio * scale;
    const newHeight = (img.width / aspectRatio) * scale;

    // Set the center of the canvas based on image dimensions after scaling
    const centerWidth = width / 2 - newWidth / 2;
    const centerHeight = height / 2 - newHeight / 2;

    ctx.drawImage(img, centerWidth, centerHeight, newWidth, newHeight);
  };

  const scaleImageHandler = (e) => {
    setImageScale(e.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { width } = context.canvas;
    const { height } = context.canvas;

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
      console.log(imageFile);
      //   updateCanvas(context);
    }
  }, [file, imageScale]);

  return (
    <div>
      <img
        className="img-file"
        src={file && file.url}
        alt={file && file.name}
      />
      <br></br>
      <input
        type="range"
        name="scaleImage"
        id="scale-img"
        className="slider-scale"
        min="0"
        max="100"
        onChange={scaleImageHandler}
      />
      <canvas ref={canvasRef} className="canvas-preview"></canvas>
    </div>
  );
};

export default CanvasComponent;
