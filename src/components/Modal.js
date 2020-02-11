import React from "react";

const Modal = ({url}) => {
  

   return (
    <div className="Overlay">
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Modal;