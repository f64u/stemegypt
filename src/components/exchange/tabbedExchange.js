import React, { useState } from "react"

import { Scrollbars } from "react-custom-scrollbars"

import Stack from "../shared/stack"
import SideNav from "../shared/sidenav"
import OneExchange from "./oneexchange"

import styles from "./tabbedExchange.module.scss"

const TabbedExchange = props => {
  const exchanges = props.exchanges
  const [currentItem, setCurrentItem] = useState(0)

  return (
    <div className={styles.tabbedExchange}>
      <div className={styles.leftSide}>
        <Scrollbars>
          <SideNav onItemClick={i => setCurrentItem(i)}>{exchanges}</SideNav>
        </Scrollbars>
      </div>
      <div className={styles.rightSide}>
        <Scrollbars autoHide>
          <div className={styles.rightSideContent}>
            <Stack index={currentItem}>
              {exchanges.map((exchange, i) => {
                return (
                  <div className={styles.exchange} key={`exchange ${i}`}>
                    <OneExchange exchange={exchange} />
                  </div>
                )
              })}
            </Stack>
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}

export default TabbedExchange
