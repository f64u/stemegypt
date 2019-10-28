import React from "react"

import styles from "./landing.module.scss"
import logo from "../../assets/icons/logo.svg"

const Landing = () => {
  return (
    <section id={styles.landing}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.downlay}></div>

          <div className={styles.text}>
            <h1 className={styles.title}>STEM Egypt</h1>
            <h2 className={styles.subtitle}>High School for Boys</h2>
          </div>
          <img
            src={logo}
            alt="STEM Egypt"
            width={230}
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  )
}

export default Landing
