import React, { useState, useEffect } from "react";
import LoadingImage from "../images/loading.gif";

const ImageWithReload = ({ src }) => {
  return (
    <>
      <img 
        className="certImage" 
        onError={({ currentTarget }) => {
          currentTarget.src=LoadingImage;
          setTimeout(function() { currentTarget.src = src; }, 500);
        }}
        src={src} 
        alt="..."
      />      
    </>
  );
};

export default ImageWithReload;
