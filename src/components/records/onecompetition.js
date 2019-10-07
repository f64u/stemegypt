import React from "react"

import styles from "./onecompetition.module.scss"
import OneYear from "./oneyear"

const OneCompetition = props => {
  const competition = props.competition

  return (
    <div className={styles.oneCompetition}>
      <h2 className={styles.competitionTitle}>{competition.name}</h2>
      {competition.years.map((year, i) => {
        return (
          <div className={styles.oneYear} key={`year ${i}`}>
            <OneYear oneYearItem={year} />
          </div>
        )
      })}
    </div>
  )
}

export default OneCompetition
