import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.scss"

import logo from "../../assets/logo.svg"
import mirus from "../../assets/icons/mirus.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.navFooter}>
          <li className={`${styles.navLink} ${styles.first}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/request-info">Request Information</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/about/policy">Privacy Policy</Link>
          </li>
          <li className={styles.navLink}>
            <Link to="/about/map">Site Map</Link>
          </li>
        </ul>

        <div className={styles.logo}>
          <img src={logo} alt="STEM Egypt" width={85} />
        </div>
        <h2 className={styles.title}>
          STEM High School for Boys, 6th of October
        </h2>
        <h3 className={styles.copyNotice}>
          &copy; 2011-2019 All Rights Reserved by STEM Egypt Schools
        </h3>

        <div className={styles.designNotice}>
          {/* Will this really last? */}
          <h3>Designed by</h3>
          <img src={mirus} alt="mirus" width={50} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
