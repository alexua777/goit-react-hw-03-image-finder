import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import '../styles.css';


const ImageGallery = ({gallery, imageEnlarge}) => {
  return (
    <>
      <ul className="ImageGallery">
         <ImageGalleryItem gallery={gallery} imageEnlarge={imageEnlarge} />
      </ul>
    </>
  );
};

export default ImageGallery;
