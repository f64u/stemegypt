import React from "react"

import styles from "./schools.module.scss"
import OneSchool from "./oneschool"

const Schools = props => {
  const schools = props.schools

  return (
    <div className={styles.schools}>
      {schools.map((school, i) => (
        <div className={styles.school} key={`school ${i}`}>
          <OneSchool school={school} isLeft={i % 2 === 0} />
        </div>
      ))}
    </div>
  )
}

export default Schools
