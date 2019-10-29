import React, { useState } from "react"

import { Scrollbars } from "react-custom-scrollbars"

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
        <Scrollbars>
          <SideNav onItemClick={i => setCurrentItem(i)}>
            {fisrtThirteen.concat([
              {
                name: "Other Awards and International Recognitions",
              },
            ])}
          </SideNav>
        </Scrollbars>
      </div>
      <div className={styles.rightSide}>
        <Scrollbars autoHide>
          <div className={styles.rightSideContent}>
            <Stack index={currentItem}>
              {fisrtThirteen
                .map((competition, i) => {
                  n = i
                  return (
                    <div
                      className={styles.competition}
                      key={`competition ${i}`}
                    >
                      <OneCompetiton competition={competition} />
                    </div>
                  )
                })
                .concat([
                  <div className={styles.rest} key={`competition ${n + 1}`}>
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
        </Scrollbars>
      </div>
    </div>
  )
}

export default TabbedRecords
