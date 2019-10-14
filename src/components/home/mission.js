import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./mission.module.scss"

const MissionSection = () => {
  return (
    <section id={styles.mission}>
      <div className={styles.images}>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
        <div className={styles.image}></div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          To inspire joy at the prospect of discovery, and to foster a culture
          of innovation based on ethical behavior and the shared interests of
          humanity.
        </p>
        <div className={styles.cta}>
          <span className={styles.ctaText}>mission</span>{" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </section>
  )
}

export default MissionSection
