import React from "react"

import styles from "./oneschool.module.scss"

const OneSchool = props => {
  const school = props.school
  const isLeft = props.isLeft

  return (
    <div
      className={styles.schoolCard}
      style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
    >
      <div className={styles.avatar}>
        <img
          className={styles.image}
          src={
            // require("../../assets/images/colleges/mit.png") ||
            require(`../../assets/images/colleges/${school.imageName}`)
          }
          alt={school.school}
        />
        <h3 className={styles.title}>{school.school}</h3>
      </div>
      <div className={styles.content}>
        <ul className={styles.namesList}>
          {school.names.map((name, i) => (
            <li className={styles.name} key={`name ${i}`}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OneSchool
