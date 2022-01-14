import React, { useState } from 'react'
import styles from './index.module.css'
export default function VlueCarrousel({ images, finalImage, label, hasCount }) {
  const [currentImage, setCurrentImage] = useState(0)

  const handleKeyDown = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 37 || e.keyCode === 40) {
      if (currentImage > 0) setCurrentImage(currentImage - 1)
    } else if (e.keyCode === 39 || e.keyCode === 38) {
      if (currentImage < images.length - 1) setCurrentImage(currentImage + 1)
    }
  }

  const nextImage = () => {
    if (currentImage < images.length - 1) setCurrentImage(currentImage + 1)
  }

  const prevImage = () => {
    if (currentImage > 0) setCurrentImage(currentImage - 1)
  }

  return (
    <div className={styles.carrousel} onKeyDown={handleKeyDown} tabIndex='0'>
      <div className={styles.label}>{label}</div>
      <div className={styles.images}>
        <img src={images[currentImage]} className={styles.image} />
      </div>
      {hasCount && (
        <div className={styles.count}>
          {images.length !== 0 ? currentImage + 1 : currentImage}/
          {images.length}
        </div>
      )}
      <div className={styles.buttons}>
        <button onClick={prevImage}>PREVIOUS</button>
        <button onClick={nextImage}>NEXT</button>
      </div>
    </div>
  )
}
