import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const MediaGallery = ({
  images,
  hasLabelCount,
  infinityScroll,
  arrowColor,
  position,
  onPositionChange,
  enableVerticalKeys
}) => {
  const [currentImagePosition, setCurrentImagePosition] = useState(
    position || 0
  )

  const handleClickBack = () => {
    if (currentImagePosition === 0 && infinityScroll) {
      setCurrentImagePosition(images.length - 1)
    } else if (currentImagePosition > 0)
      setCurrentImagePosition(currentImagePosition - 1)
  }

  const handleClickNext = () => {
    if (currentImagePosition === images.length - 1 && infinityScroll) {
      setCurrentImagePosition(0)
    } else if (currentImagePosition < images.length - 1)
      setCurrentImagePosition(currentImagePosition + 1)
  }

  const handleKeyDown = (e) => {
    if (enableVerticalKeys) {
      if (e.keyCode === 37 || e.keyCode === 40) handleClickBack()
      if (e.keyCode === 39 || e.keyCode === 38) handleClickNext()
    } else {
      if (e.keyCode === 37) handleClickBack()
      if (e.keyCode === 39) handleClickNext()
    }
  }

  useEffect(() => {
    onPositionChange(currentImagePosition)
  }, [currentImagePosition])

  return (
    <div className={styles.mediaGallery} tabIndex='0' onKeyDown={handleKeyDown}>
      <div className={styles.carrousel}>
        <div className={styles.arrowLeft} onClick={handleClickBack}>
          <IoIosArrowBack
            color={arrowColor}
            className={styles.arrow}
            size={48}
          />
        </div>
        <img
          className={styles.carrouselImage}
          src={images[currentImagePosition]}
          alt=''
        />
        <div className={styles.arrowRight} onClick={handleClickNext}>
          <IoIosArrowForward
            color={arrowColor}
            className={styles.arrow}
            size={48}
          />
        </div>
        {hasLabelCount && (
          <div className={styles.countContainer}>
            <span className={styles.count}>{`${currentImagePosition + 1}/${
              images.length
            }`}</span>
          </div>
        )}
      </div>
    </div>
  )
}

MediaGallery.prototype = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasLabelCount: PropTypes.bool,
  infinityScroll: PropTypes.bool,
  arrowColor: PropTypes.string,
  position: PropTypes.number,
  onPositionChange: PropTypes.func
}

export { MediaGallery }
