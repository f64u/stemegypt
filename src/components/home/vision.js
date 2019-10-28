import React from "react"

import hand from "../../assets/images/home/hand.png"

import styles from "./vision.module.scss"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import IconButton from "../shared/iconbutton"

const VisionSection = () => {
  return (
    <section id={styles.vision}>
      <div className={styles.rect}></div>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>
            A place for tomorrow's brightest minds to break the boundaries,
            unleash their latent potential, and create the center of excellence.
          </div>
          <div className={styles.subtitle}>
            that embody trans-disciplinary collaboration, real-world
            applications, critical thinking, and pioneering spirit.
          </div>
          <div className={styles.cta}>
            <IconButton text="our vision" icon={faArrowRight} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={hand} alt="illustration" />
        </div>
      </div>
    </section>
  )
}

export default VisionSection
