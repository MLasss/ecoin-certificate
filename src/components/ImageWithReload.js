import React, { useState, useEffect } from "react";
import LoadingImage from "../images/loading.gif";

const ImageWithReload = ({ src }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${imageSrc}.`);
      setIsLoading(false);
      setTimeout(() => {
        setImageSrc(src);
        console.log(`Retrying to load image: ${imageSrc}.`);
      }, 1000);
    };
  }, [src, imageSrc]);

  return (
    <>
      {isLoading ? (
        <img className="certImage"
          src={LoadingImage}
          alt="Loading"
          style={{ width: '100%' }}
        />
      ) : (
        <img className="certImage"
          src={imageSrc}
          alt="Image with reload"
          style={{ width: '100%' }}
        />
      )}
    </>
  );
};

export default ImageWithReload;
