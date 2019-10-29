import React from "react"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import schoolBuilding from "../../assets/images/home/back.jpg"
import residentiaryBuilding from "../../assets/images/home/front.jpg"

import styles from "./mission.module.scss"
import IconButton from "../shared/iconbutton"
import { Link } from "gatsby"

const MissionSection = () => {
  return (
    <section id={styles.mission}>
      <div className={styles.images}>
        <img
          src={schoolBuilding}
          alt="school building"
          className={`${styles.image} ${styles.backgroundImage}`}
        />
        <img
          src={residentiaryBuilding}
          alt="residentiary building"
          className={`${styles.image} ${styles.focusedImage}`}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          To inspire joy at the prospect of discovery, and to foster a culture
          of innovation based on ethical behavior and the shared interests of
          humanity.
        </p>
        <div className={styles.cta}>
          <Link to="/about/#mission">
            <IconButton text="mission" icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
