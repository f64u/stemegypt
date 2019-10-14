import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./iconbutton.module.scss"

const IconButton = props => {
  const text = props.text
  const icon = props.icon

  return (
    <div className={styles.iconButton}>
      <span className={styles.ctaText}>{text}</span>{" "}
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default IconButton
