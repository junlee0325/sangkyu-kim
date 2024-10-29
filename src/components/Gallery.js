import React from 'react'
import { Album } from "./Album"
import useTranslation from '../useTranslation';

export const Gallery = () => {
  const { t } = useTranslation();

    
    const albumA = [
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img5.jpg",
      "/images/img4.jpg"
    ]

    const albumB = [
      "/images/img6.jpg",
      "/images/img7.jpg",
      "/images/img8.jpg",
      "/images/img9.jpg",
      "/images/img10.jpg",
      "/images/img11.jpg"
    ]

    const albumC = [
      "/images/img12.jpg",
      "/images/img13.jpg",
      "/images/img14.jpg",
      "/images/img15.jpg"
    ]

    const albumD = [
      "/images/img16.jpg",
      "/images/img17.jpg"
    ]

    const albumE = [
      "/images/img18.jpg",
      "/images/img19.jpg",
      "/images/img20.jpg"
    ]

    const albumF = [
      "/images/img21.jpg",
      "/images/img22.jpg"
    ]

    const albumG = [
      "/images/img23.jpg",
      "/images/img24.jpg"
    ]

    const albumH = [
      "/images/img25.jpg",
      "/images/img26.jpg"
    ]

    const albumI = [
      "/images/img27.jpg",
      "/images/img28.jpg",
      "/images/img29.jpg"
    ]

  return (
    <div id="Gallery">
        <h2>{t("gallery")}</h2>

        <div className="albums">
          <Album albumID={albumA} />
          <Album albumID={albumB} />
          <Album albumID={albumC} />
          <Album albumID={albumD} />
          <Album albumID={albumE} />
          <Album albumID={albumF} />
          <Album albumID={albumG} />
          <Album albumID={albumH} />
          <Album albumID={albumI} />
        </div>
    </div>
  )
}
