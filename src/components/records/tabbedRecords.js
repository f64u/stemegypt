import React, { useState } from "react"

import Stack from "../shared/stack"
import SideNav from "../shared/sidenav"
import OneCompetiton from "./onecompetition"

import styles from "./tabbedRecords.module.scss"

const TabbedRecords = props => {
  let competitions = props.competitions
  const [currentItem, setCurrentItem] = useState(0)

  const fisrtThirteen = competitions.slice(0, 13)
  const rest = competitions.slice(13, competitions.length)
  let n = 0

  return (
    <div className={styles.tabbedRecords}>
      <div className={styles.leftSide}>
        <SideNav onItemClick={i => setCurrentItem(i)}>
          {fisrtThirteen.concat([
            {
              name: "Other Awards and International Recognitions",
            },
          ])}
        </SideNav>
      </div>
      <div className={styles.rightSide}>
        <Stack index={currentItem}>
          {fisrtThirteen
            .map((competition, i) => {
              x = i
              return (
                <div className={styles.competition} key={`competition ${i}`}>
                  <OneCompetiton competition={competition} />
                </div>
              )
            })
            .concat([
              <div className={styles.rest} key={`competition ${x + 1}`}>
                {rest.map((competition, i) => (
                  <div
                    className={styles.competition}
                    key={`other competition ${i}`}
                  >
                    <OneCompetiton competition={competition} />
                  </div>
                ))}
              </div>,
            ])}
        </Stack>
      </div>
    </div>
  )
}

export default TabbedRecords
