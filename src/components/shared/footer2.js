import React from "react"

import logo from "../../assets/icons/logo.svg"
import mirus from "../../assets/icons/mirus.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faFlickr } from "@fortawesome/free-brands-svg-icons"

import { Link } from "gatsby"

import styles from "./footer2.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.row} ${styles.toCol}`}>
          <div className={styles.col}>
            <div className={styles.title}>Website</div>
            <ul>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <div className={styles.title}>GET IN TOUCH</div>
            <ul>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/request-info">Request Information</Link>
              </li>
            </ul>
          </div>
          <div className={styles.lastPCol}>
            <div className={`${styles.col} ${styles.socialLinks}`}>
              <a
                href="https://www.facebook.com/STEM6october/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.facebook}
                />
              </a>
              <a href="mailto:inquiry@stemegypt.edu.eg">
                <FontAwesomeIcon icon={faEnvelope} className={styles.email} />
              </a>
              <FontAwesomeIcon icon={faFlickr} className={styles.flickr} />
            </div>
            <div className={`${styles.col} ${styles.logoCol}`}>
              <div className={styles.logo}>
                <img src={logo} alt="STEM Egypt" width={150} />
              </div>
              <div className={styles.name}>
                STEM High School for Boys, 6th of October
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.row}>
          <div className={styles.copyNotice}>
            &copy; 2011-{new Date().getFullYear()} All rights reserved by STEM
            Egypt Schools
          </div>
          <div className={`${styles.row} ${styles.designNotice}`}>
            {/* Will this really last? */}
            <div>Designed by</div> <img src={mirus} alt="mirus" width={45} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
