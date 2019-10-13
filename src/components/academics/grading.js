import React from "react"

import styles from "./grading.module.scss"

const Grading = () => {
  return (
    <div className={styles.grading}>
      <div className={styles.title}>Grading System</div>

      <div className={styles.content}>
        <div className={styles.leftSide}>
          <p>
            STEM October follows a letter grading system starting from A and
            ending with D; students scoring bellow D fail the course and receive
            an F score. The following table shows the interpretations of each
            grade.
          </p>
          <table>
            <tr>
              <th>grade</th>
              <th>range in percentage</th>
            </tr>
            <tr>
              <td className={styles.grade}>A+</td>
              <td>95%-100%</td>
            </tr>
            <tr>
              <td className={styles.grade}>A</td>
              <td>90%-95%</td>
            </tr>
            <tr>
              <td className={styles.grade}>B+</td>
              <td>85%-90%</td>
            </tr>
            <tr>
              <td className={styles.grade}>B</td>
              <td>80%-95%</td>
            </tr>
            <tr>
              <td className={styles.grade}>C+</td>
              <td>75%-80%</td>
            </tr>
            <tr>
              <td className={styles.grade}>C</td>
              <td>70%-75%</td>
            </tr>
            <tr>
              <td className={styles.grade}>D+</td>
              <td>65%-70%</td>
            </tr>
            <tr>
              <td className={styles.grade}>D</td>
              <td>60%-65%</td>
            </tr>
            <tr>
              <td className={styles.grade}>F</td>
              <td>&lt;60%</td>
            </tr>
          </table>
        </div>
        <div className={styles.rightSide}>
          <p>
            Most courses at STEM October are taught at Honors level; the school
            doesn’t offer AP course, however. All the courses taught in STEM
            October during the 10th, 11th, and 12th grades, their types, and
            their credits are shown in the table below.
          </p>
          <table>
            <tr>
              <th>Courses</th>
              <th>Type</th>
              <th>Credits</th>
            </tr>
            <tr>
              <td>Arabic</td>
              <td>Regular</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Second Language</td>
              <td>Regular</td>
              <td>3</td>
            </tr>
            <tr>
              <td>English</td>
              <td>Honors</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>Honors</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Geology</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Mechanics</td>
              <td>Honors</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Religion</td>
              <td>Regular</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Social Studies</td>
              <td>Regular</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Civics</td>
              <td>Regular</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Technology</td>
              <td>Regular</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Capstone 1</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Capstone 2</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Capstone 3</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Capstone 4</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Capstone 5</td>
              <td>Honors</td>
              <td>4</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Grading
