import React, { useState } from "react"

import styles from "./sidenav.module.scss"

const SideNav = props => {
  const items = props.children
  const onItemClick = props.onItemClick
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div
      className={styles.sideNav}
      style={props.sticky ? { position: "sticky", top: "1em" } : {}}
    >
      {items.map((item, i) => (
        <div className={styles.outerBtn}>
          <button
            className={`${styles.itemName} ${
              currentIndex === i ? styles.current : ""
            }`}
            key={`button ${i}`}
            onClick={() => {
              setCurrentIndex(i)
              onItemClick(i)
            }}
          >
            {item.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SideNav
