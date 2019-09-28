import React from "react"

import styles from "./thename.module.scss"

const TheName = () => {
  return (
    <section id={styles.thename}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.line}></div>
          <h2 className={styles.title}>
            STEM High School for Boys{" "}
            <span className={styles.place}>6th of October</span>
          </h2>
          <div className={styles.line}></div>
        </div>
        <div className={`${styles.line} ${styles.separator}`}></div>
        <h4 className={styles.subtitle}>For a better future</h4>
      </div>
    </section>
  )
}

export default TheName
