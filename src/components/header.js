import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.scss"
import logo from "../assets/logo_small.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="STEM Egypt" width={40} />
          </Link>
        </h1>

        <nav className={styles.mainNav}>
          <ul className={styles.navLinks}>
            <li className={styles.navLink}>
              <Link to="/academics">Academics</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/campus">Campus</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/community">School Community</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/records">Competition Records</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/programs-participation">
                Exchange Programs Participation
              </Link>
            </li>
            <li className={`${styles.navLink} ${styles.cta}`}>
              <Link to="/organizations">Student Organizations and Events</Link>
            </li>
          </ul>

          <ul className={styles.navBack}>
            <li className={`${styles.navLink} ${styles.faded}`}>
              <Link to="/alumni">Alumni</Link>
            </li>
            <li className={`${styles.navLink} ${styles.faded}`}>
              <Link to="/alumni/meet">Meet our Alumni</Link>
            </li>
            <li className={`${styles.navLink} ${styles.cta} ${styles.search}`}>
              <FontAwesomeIcon icon={faSearch} color="#f0f0f0" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
