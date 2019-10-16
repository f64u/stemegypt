import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./lab.module.scss"

const Lab = ({ name, imgSrc }) => {
  return (
    <div className={styles.labCard}>
      <img className={styles.image} src={imgSrc} alt={name} />
      <div className={styles.text}>
        <span className={styles.name}>{name}</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  )
}

export default Lab
