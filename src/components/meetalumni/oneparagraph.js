import React from "react"

import styles from "./oneparagraph.module.scss"

const OneParagraph = ({ imgSrc, name, children, isLeft }) => {
  return (
    <div
      className={styles.oneParagraph}
      style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
    >
      <div className={styles.avatar}>
        <img className={styles.image} src={imgSrc} alt={name} />
        <h3 className={styles.title}>{name}</h3>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default OneParagraph
