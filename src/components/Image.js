import { useState } from 'react'

export const Image = ({imageUrl, altText }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleImageClick = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

  return (
    <div className="Image">
        <img className="img" onClick={handleImageClick} src={imageUrl} alt={altText} />
        {isOpen && (
            <div className="overlay" onClick={handleClose} >
                 <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={handleClose}>Close</button>
                    <img src={imageUrl} alt={altText} className="enlarged-image" />
                 </div>
            </div>
        )}
    </div>
  )
}
