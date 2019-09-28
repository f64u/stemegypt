import React from "react"

import styles from "./vision.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

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
            our vision <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <img src="http://via.placeholder.com/350x350" alt="illustration" />
      </div>
    </section>
  )
}

export default VisionSection
