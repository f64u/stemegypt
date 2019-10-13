import React from "react"

import styles from "./oneyear.module.scss"

const OneYear = props => {
  const item = props.oneYearItem
  const year = item["year"]
  const names = item["names"]

  return (
    <div className={styles.oneYear}>
      <h3 className={styles.title}>
        {year}: {names.length} Exchange{names.length > 1 ? "s" : ""}
      </h3>
      <h4 className={styles.namesTitle}>Names of people who went: </h4>
      <ul className={styles.namesList}>
        {names.map((name, i) => {
          return (
            <li className={styles.name} key={`name ${i}`}>
              {name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OneYear
