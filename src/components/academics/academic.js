import React from "react"

import styles from "./academic.module.scss"

const AcademicSystem = () => {
  return (
    <div className={styles.academic}>
      <h2 className={styles.title}>Academic System</h2>

      <div className={styles.content}>
        <p className={styles.caption}>
          "STEM Schools offer rigorous honor academic system in which students
          engage in intensive classes in order to develop their research and
          qualitative skills."
        </p>
        <p>
          Classes merge the punctual academic curricula with interesting
          collaborative environment, aiming to improve students’ social and
          presentational qualities. What makes STEM system unique is the fact of
          being student-based; that is, students are the center of the
          educational organization as it depends on students in explaining and
          searching their indicated concepts. Courses taught at school include
          STEM subjects: Physics, Chemistry, Biology, Geology, Pure Mathematics,
          Applied Mathematics, Geology and Technology. Besides, humanities at
          STEM schools are encouraged due to their importance in the several
          social interactions school contributes to. Humanities are languages:
          Arabic, English, German/French; Social Studies; Civics; and Religion.
          Additionally, students choose one of three available activities: Art,
          Library, Music to help them foster their sensational and artistic
          tastes. Physical Education is an obligatory course at STEM 6th Of
          October due to the obvious importance of sports in building students’
          bodies and minds.
        </p>
        <p>
          The most attractive feature at STEM schools in the Capstone. Since its
          very first graduating class in 2014, student research has played an
          essential role in learning at STEM High School. Requirements for the
          STEM High School Diploma include the completion of five original
          engineering or experimental research project be distributed across
          five semesters while be exhibited and evaluated at the end of each
          one. Students work in teams and choose their projects based on the
          topic provided that responds to one of the Egyptian Grand Challenges.
          Capstones are graded during the “Capstone Exhibition” by a panel of
          university professors in the School of Sciences and School of
          Engineering. The selected Grand Challenges include but not limited to:
        </p>
        <ul>
          <li>Housing</li>
          <li>Energy systems and Renewable resources</li>
          <li>Water availability and treatment</li>
          <li>Establishment of Industrial basis</li>
          <li>Communication</li>
          <li>Agriculture and Food support</li>
        </ul>
        <p>
          The Capstone provides an alternative way for dedicated students to
          fulfill passion by working on research projects during applying they
          learned concepts to make the most effective value of the comprehensive
          academic system. Students are supervised by engineers and other
          technical professionals throughout their project. Students get
          involved in research and/or project development at various agencies,
          including corporate, university, and government institutions,
          throughout the metropolitan Greater Cairo area.
        </p>
      </div>
    </div>
  )
}

export default AcademicSystem
