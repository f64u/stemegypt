import React from "react"

import { Link } from "gatsby"

import styles from "./sitemap.module.scss"

const Sitemap = () => {
  return (
    <div className={styles.sitemap}>
      <div className={styles.container}>
        <div className={styles.title}>Website Content</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/academics">Academics</Link>
          </li>
          <li>
            <Link to="/alumni">Alumni</Link>
          </li>
          <li>
            <Link to="/alumni/meet">Meet Alumni</Link>
          </li>
          <li>
            <Link to="/campus">Campus</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/exchange">Exchange Programs</Link>
          </li>
          <li>
            <Link to="/organizations">Student Organizations</Link>
          </li>
          <li>
            <Link to="/records">Competition Records</Link>
          </li>
          <li>
            <Link to="/request-info">Request Information</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sitemap
