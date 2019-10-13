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
      {items.map((item, i) => {
        let list = [
          <button
            className={`${styles.itemName} ${
              currentIndex === i ? styles.current : ""
            }`}
            key={i}
            onClick={() => {
              setCurrentIndex(i)
              onItemClick(i)
            }}
          >
            {item.name}
          </button>,
        ]
        if (item !== items[items.length - 1])
          list.push(
            <div key={2 * items.length - i} className={styles.divider} />
          )

        return list
      })}
    </div>
  )
}

export default SideNav
