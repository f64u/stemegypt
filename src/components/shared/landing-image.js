import React from "react"

import styles from "./landing-image.module.scss"

const LandingImage = ({ name, imgSrc }) => {
  return (
    <div className={styles.LandingImage}>
      <img src={imgSrc} alt={name} />
    </div>
  )
}

export default LandingImage
