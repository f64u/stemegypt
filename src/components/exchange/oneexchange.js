import React from "react"

import styles from "./oneexchange.module.scss"
import OneYear from "./oneyear"

const OneExchange = props => {
  const exchange = props.exchange

  return (
    <div className={styles.oneExchange}>
      <h2 className={styles.exchangeTitle}>{exchange.name}</h2>
      {exchange.years.map((year, i) => {
        return (
          <div className={styles.oneYear} key={`year ${i}`}>
            <OneYear oneYearItem={year} />
          </div>
        )
      })}
    </div>
  )
}

export default OneExchange
