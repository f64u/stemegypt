import React from "react"

import styles from "./oneyear.module.scss"

const OneYear = props => {
  const item = props.oneYearItem
  const year = item["year"]
  const nOfP = item["nOfP"]
  const isTeam = item["team"]
  const names = item["names"]

  return (
    <div className={styles.oneYear}>
      <div className={styles.title}>
        <h3 className={styles.year}>
          {year}: {nOfP} Participant{nOfP > 1 ? "s" : ""}
        </h3>
        {item["comment"] ? (
          <span className={styles.comment}> ({item["comment"]})</span>
        ) : (
          ""
        )}
      </div>
      {isTeam ? (
        names.map((team, i) => (
          <React.Fragment key={`team ${i}`}>
            <h4 className={styles.teamTitle}>Team {i + 1}</h4>
            <ul>
              <li>Team Members: {team["names"].join("—")}</li>
              {<li>Awards: {team["award"] || "Participated"}</li>}
            </ul>
          </React.Fragment>
        ))
      ) : (
        <>
          <h4 className={styles.namesTitle}>Names and/or Awards Achieved: </h4>
          <ul className={styles.namesList}>
            {names.map((name, i) => {
              const nName = name["names"][0]
              const award = name["award"]

              return (
                <li className={styles.name} key={`award list item ${i}`}>
                  {nName || award
                    ? `${nName || "The School"}: ${award || "Participated"}`
                    : "No records available"}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}

export default OneYear
