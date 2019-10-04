import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.scss"
import logo from "../assets/logo_small.png"

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
              <div className={styles.searchContent}>
                <input type="text" placeholder=" " />
                <div>
                  <svg>
                    <use xlinkHref="#path" />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 28"
          id="path"
        >
          <path
            d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562"
            transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)"
          ></path>
        </symbol>
      </svg>
    </header>
  )
}

export default Header
