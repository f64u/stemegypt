import React, { useState } from "react"

import styles from "./organizations-events.module.scss"
import SideNav from "../shared/sidenav"
import Stack from "../shared/stack"

import StudentUnion from "./student-union"
import Clubs from "./clubs"
import Events from "./events"

const OrganizationsEvents = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className={styles.organizationsEvents}>
      <div className={styles.leftSide}>
        <SideNav onItemClick={i => setIndex(i)} sticky>
          {[
            { name: "Student Union" },
            { name: "School Events" },
            { name: "Clubs and Organizations" },
          ]}
        </SideNav>
      </div>
      <div className={styles.rightSide}>
        <Stack index={index}>
          <StudentUnion />
          <Events />
          <Clubs />
        </Stack>
      </div>
    </div>
  )
}

export default OrganizationsEvents
