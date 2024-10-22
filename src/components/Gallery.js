import React from 'react'
import { Image } from "./Image"

export const Gallery = () => {

  const imagePaths = [];

  for(let i = 1; i <= 29; i++) {
  imagePaths.push(`/images/img${i}.jpg`)
  }

  return (
    <div id="Gallery">
        <h2>Gallery</h2>
        <div className="imgSet">
          {imagePaths.slice(0,5).map((imagePath , i) => (
            <Image imageUrl={imagePath} altText={`Image ${i + 1}`} />
          ))}
        </div>
        <div className="imgSet">
          {imagePaths.slice(5,11).map((imagePath , i) => (
            <Image imageUrl={imagePath} altText={`Image ${i + 1}`} />
          ))}
        </div>
        <div className="imgSet">
          {imagePaths.slice(11,15).map((imagePath , i) => (
            <Image imageUrl={imagePath} altText={`Image ${i + 1}`} />
          ))}
        </div>
        <div className="imgSet">
          {imagePaths.slice(15,20).map((imagePath , i) => (
            <Image imageUrl={imagePath} altText={`Image ${i + 1}`} />
          ))}
        </div>
        <div className="imgSet">
          {imagePaths.slice(20,24).map((imagePath , i) => (
            <Image imageUrl={imagePath} altText={`Image ${i + 1}`} />
          ))}
        </div>
        <div className="imgSet">
          {imagePaths.slice(24,29).map((imagePath , i) => (
            <Image imageUrl={imagePath} altText={`Image ${i + 1}`} />
          ))}
        </div>
    </div>
  )
}
