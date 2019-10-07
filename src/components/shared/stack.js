import React from "react"

import styles from "./stack.module.scss"

const Stack = props => {
  const index = props.index

  console.log(props.children)

  return (
    <div className={styles.stack}>
      {props.children.map((page, i) => (
        <div
          key={i}
          className={`${styles.normal} ${index === i ? styles.current : ""}`}
        >
          {page}
        </div>
      ))}
    </div>
  )
}

export default Stack
