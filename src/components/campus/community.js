import React from "react"

import styles from "./community.module.scss"

const SubCommunity = () => {
  return (
    <div className={styles.community}>
      <div className={styles.section}>
        <div className={styles.title}>School Community</div>
        <h2 className={styles.subtitle}>Student Body</h2>
        <p className={styles.text}>
          With only 450 students, by the end of the year, one may have had at
          least one conversation with everyone. Each student comes from a
          different background ranging from the big city residents to people
          with rural backgrounds, giving everyone an opportunity to understand
          other communities. Everyone has his own unique talent, encouraging the
          development of a collaborative, and competitive, atmosphere. Also,
          despite being a STEM school, the students show passion in various
          non-STEM fields, giving everyone a new experience to find other
          passions. However, the best thing about the students is that everyone
          is willing to share their knowledge.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>Campus Life</h2>
        <p className={styles.text}>
          The school is an amazing holistic experience. Diverse community, a
          research-based and curriculum-based hybrid education system, amazing
          extracurricular activities, and a dominant culture of giving back.
          Campus is always busy with activities, orientations, and student led
          courses. Most people have no more than three free hours, but they will
          never decline a request for help. Everyone is longing for new
          experiences. The main social scene could be described as a large
          family that is connected by the school where every member is effective
          and always happy for the success of others.
        </p>
      </div>
    </div>
  )
}

export default SubCommunity
