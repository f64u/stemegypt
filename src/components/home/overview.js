import React from "react"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import styles from "./overview.module.scss"
import IconButton from "../shared/iconbutton"

import { Link } from "gatsby"

const OverviewSection = () => {
  return (
    <section id={styles.overview}>
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        <div className={styles.line}></div>
        <div className={styles.title}>
          Ranked as Egypt's best High School, STEM High School for Boys - 6th of
          October
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.subtext}>
          Offering a unique system that focuses on scientific, mathematical, and
          technological fields, STEM schools target high-potential students who
          demonstrate strong academic skills.
        </div>
        <div className={styles.link}>
          <div className={styles.cta}>
            <Link to="/about#Overview">
              <Link to="/about#overview">
                <IconButton text="overview" icon={faArrowRight} />
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
