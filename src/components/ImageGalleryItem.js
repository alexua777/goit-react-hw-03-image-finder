import React from "react";
import '../styles.css';

 const ImageGalleryItem = ({ gallery,imageEnlarge }) => {
  return (
    <>
      {gallery.map(({ id, webformatURL,largeImageURL }) => (
        <li key={id} className="ImageGalleryItem" onClick={()=>imageEnlarge(largeImageURL)}>
          <img src={webformatURL} alt="" className="ImageGalleryItem-image" ></img>
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
