import React from "react"

import styles from "./landingimage.module.scss"

const LandingImage = ({ title, subtitle, imgSrc }) => {
  return (
    <div
      className={styles.landingImage}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  )
}

export default LandingImage
