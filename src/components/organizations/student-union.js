import React from "react"

import styles from "./student-union.module.scss"

import mit from "../../assets/images/colleges/mit.png"
const john = mit
const labib = mit
const gaber = mit
const battah = mit
const saad = mit
const mohanad = mit
const badry = mit

const Person = ({ name, occupiance, imgSrc }) => {
  return (
    <div className={styles.person}>
      <img src={imgSrc} alt={name + " who does " + occupiance} />
      <div className={styles.name}>{name}</div>
      <div className={styles.occupiance}>{occupiance}</div>
    </div>
  )
}

const StudentUnion = () => {
  return (
    <div className={styles.studentUnion}>
      <div className={styles.content}>
        <p className={styles.preText}>
          Amid the vivacious nature of the student activities, the student union
          is one of the most prominent in STEM October’s everyday routine. The
          7-member committee is utterly elected according to the ministry of
          education conventional election scheme. Once they are elected in early
          October, a series of duties are delegated to these helpful students:
          occasional meetings with the high board, surveys coordination and
          student data collection, campus events, fairs and picnics
          organization, and communication with STEM unit. The student government
          this year 2018-2019 has assembled some leaders who have delivered a
          sense of giving back, commitment and spirit through the school year.
          Cited below is the thorough efforts portrayed in their work:
        </p>
        <ul>
          <li>Organized Intel ISEF science fair 2019 filtration.</li>
          <li>Fund raised and organized the school’s Fun day.</li>
          <li>
            Devised URT practice test trials and eventually was implemented.
          </li>
          <li>
            Lead serious discussions with Mr. Reda Mansour and Mr. Ali Koriem
            regarding the 200-scholarship agreements.
          </li>
          <li>Organized trips to the GUC, AAST and E-JUST.</li>
        </ul>
        <h2 className={styles.title}>2018-2019 Student Union Board</h2>
        <div className={styles.people}>
          <div className={styles.row}>
            <Person name="John William" occupiance="President" imgSrc={john} />
            <Person
              name="Abdulrahman Labib"
              occupiance="Vice-President"
              imgSrc={labib}
            />
          </div>
          <div className={styles.row}>
            {[
              ["Abdullah Gaber", gaber],
              ["Seif Battah", battah],
              ["Ahmed Saad", saad],
              ["Mohanad Ashraf", mohanad],
              ["Ali Elbadry", badry],
            ].map(p => (
              <Person
                name={p[0]}
                occupiance="Executive Committee"
                imgSrc={p[1]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentUnion
