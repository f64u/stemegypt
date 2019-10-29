import React from "react"

import styles from "./aboutcomponent.module.scss"

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, "")
}

const AboutComponent = ({ imgSrc, isLeft, children, name, className }) => {
  return (
    <section
      id={camelize(name)}
      className={`${styles.aboutComponent} ${
        isLeft ? styles.isLeft : ""
      } ${className}`}
    >
      <div className={styles.leftSide}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.abouts}>{children}</div>
      </div>
      <div className={styles.rightSide}>
        <img src={imgSrc} alt={name} />
      </div>
    </section>
  )
}
export default AboutComponent
