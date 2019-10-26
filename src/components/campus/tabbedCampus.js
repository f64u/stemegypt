import React, { useState } from "react"

import styles from "./tabbedCampus.module.scss"
import SideNav from "../shared/sidenav"
import Stack from "../shared/stack"

import CampusComponent from "./subcampus"
import SubCommunity from "./community"

const TabbedCampus = () => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className={styles.tabbedCampus}>
      <div className={styles.leftSide}>
        <SideNav onItemClick={i => setCurrentTab(i)} sticky>
          {[{ name: "Campus" }, { name: "School Community" }]}
        </SideNav>
      </div>
      <div className={styles.rightSide}>
        <Stack index={currentTab}>
          <CampusComponent />
          <SubCommunity />
        </Stack>
      </div>
    </div>
  )
}

export default TabbedCampus
