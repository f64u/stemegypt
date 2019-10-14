import React from "react"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./target.module.scss"
import IconButton from "../shared/iconbutton"

const TargetedStudentsSection = () => {
  return (
    <section id={styles.target}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className={styles.targeted}>Targeted</h2>
          <h2 className={styles.students}>students</h2>
        </div>
        <p className={styles.text}>
          Accepting only about 150 out of 5000 students annually, STEM October
          is pretty competitive. Indeed, the school targets prospective students
          with demonstrated passion and aptitude for Science, Technology,
          Engineering, and Mathematics.
        </p>
        <div className={styles.cta}>
          <IconButton text="learn more" icon={faArrowRight} />
        </div>
      </div>
    </section>
  )
}

export default TargetedStudentsSection
