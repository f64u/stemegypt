import React, { useState } from "react"

import styles from "./tabbedAcademics.module.scss"
import SideNav from "../shared/sidenav"
import Stack from "../shared/stack"

import Grading from "./grading"
import AcademicSystem from "./academic"

const TabbedAcademics = () => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className={styles.tabbedAcademics}>
      <div className={styles.leftSide}>
        <SideNav onItemClick={i => setCurrentTab(i)} sticky>
          {[{ name: "Academic System" }, { name: "Grading and Curriculum" }]}
        </SideNav>
      </div>
      <div className={styles.rightSide}>
        <Stack index={currentTab}>
          <AcademicSystem />
          <Grading />
        </Stack>
      </div>
    </div>
  )
}

export default TabbedAcademics
