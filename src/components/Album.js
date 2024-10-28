import React from "react";
import { useState } from "react";
import { useEffect } from "react"


export const Album = ({ albumID }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThumbnailClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const [srcShown, setSrcShown] = useState(albumID[albumID.length - 1])

  const handleImageClick = (imagePath) => {
    setSrcShown(imagePath)
  }


  return (
    <div className="Album">
      <img
        className="thumbnail"
        onClick={handleThumbnailClick}
        src={albumID[albumID.length - 1]}
        alt="gallery thumbnail"
      />
      {isOpen && (
        <div className="overlay" onClick={handleClose}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
            <img src={srcShown} alt="gallery photo" className="enlarged-image" />
            <div className="imgSet">
              {albumID.map((imagePath, i) => (
                <img onClick={() => handleImageClick(imagePath)} src={imagePath} altText={`Image ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
