import React, { useState } from "react"

import ImageGallery from "react-image-gallery"

import styles from "./subcampus.module.scss"
import Stack from "../shared/stack"
import Lab from "./lab"

const N_RES = 19
const N_BUILD = 25
const N_LAB = 57

const CampusComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const residencs = []
  for (let i = 1; i <= N_RES; i++) {
    const image = require(`../../assets/images/school/residence/res${i}.jpg`)
    residencs.push({
      original: image,
      thumbnail: image,
    })
  }

  const buildings = []
  for (let i = 1; i <= N_BUILD; i++) {
    const image = require(`../../assets/images/school/building/build${i}.jpg`)
    buildings.push({
      original: image,
      thumbnail: image,
    })
  }

  const labs = []
  for (let i = 1; i <= N_LAB; i++) {
    const image = require(`../../assets/images/school/labs/lab${i}.jpg`)
    labs.push({
      original: image,
      thumbnail: image,
    })
  }

  return (
    <div className={styles.campus}>
      <div className={styles.header}>
        <div className={styles.title}>Campus</div>
        <p className={styles.pretext}>
          October STEM school is built on a considerably vast piece of land to
          include all the academic facilities, students’ residence and
          playgrounds it was meant to hold. The school consists of three main
          areas:
        </p>
      </div>
      <div className={styles.tabset}>
        <input
          type="radio"
          name="tabset"
          id="tab1"
          aria-controls="building"
          checked
          onClick={() => setCurrentIndex(0)}
          className={currentIndex === 0 && styles.active}
        />
        <label for="tab1">School Building</label>
        <input
          type="radio"
          name="tabset"
          id="tab2"
          aria-controls="residence"
          onClick={() => setCurrentIndex(1)}
          className={currentIndex === 1 && styles.active}
        />
        <label for="tab2">Students' Residence</label>
        <input
          type="radio"
          name="tabset"
          id="tab3"
          aria-controls="labs"
          onClick={() => setCurrentIndex(2)}
          className={currentIndex === 2 && styles.active}
        />
        <label for="tab3">School Labs</label>
      </div>
      <div className={styles.border}></div>

      <Stack index={currentIndex}>
        <section id={styles.building}>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                The school building has one of the most bewitching architecture
                designs among all the Egyptian schools. With its charming classy
                looks the school’s design reflects the legacy it was meant to
                show and share with all other Egyptian schools.
              </p>
              <p>
                With 18 classrooms inside the building, each class moves between
                these rooms during the day to keep the students motivated and
                refreshed. Inside these classrooms, students are separated into
                6 different groups. The groups are to work together to guarantee
                helping each other and understanding their curriculums without
                any outside help.
              </p>
              <p>
                Although the school focuses on the refinement of the students’
                STEM skills, Sports play a leading role in keeping the students
                in shape and motivated to keep going. The school includes a top
                tier volleyball court and a football yard that attract most
                students. The school is also covered with wide green spaces
                leading to a centered pergola that’s located between the school
                building and the students’ residence.
              </p>
            </div>
            <div className={styles.sliderContent}>
              <ImageGallery items={buildings} />
            </div>
          </div>
        </section>
        <section id={styles.residence}>
          <div className={styles.content}>
            <div className={styles.text}>
              <p>
                The student residence is divided into three main buildings, one
                for each batch, where each building is divided into 6 wings,
                where 5 of them are residential wings for students and the sixth
                is unique for each building. The special wings are mosque, gym,
                and residence for some teachers and school workers. Each of the
                main residential wings is divided into 10 rooms where each room
                houses 3 students. Each wing also includes 4 shared baths
                containing three shower stalls, three toilets, and three sinks.
                Each of the buildings has its own dining hall while sharing a
                common kitchen located in the second building. All buildings are
                equipped with Wi-Fi that is could only be used by the school
                laptops.
              </p>
            </div>
            <div className={styles.sliderContent}>
              <ImageGallery items={residencs} />
            </div>
          </div>
        </section>
        <section id={styles.labs}>
          <div className={styles.content}>
            <p className={styles.text}>
              The school’s most memorable site is the labs ground where all the
              labs are located close to each other. The school includes 14 labs,
              which are:
            </p>

            <div className={styles.row}>
              <ul>
                <li>Geology Lab</li>
                <li>Robotics Lab</li>
                <li>Computer Lab</li>
                <li>Physics Lab</li>
                <li>Electronics Lab</li>
                <li>Phonetics Lab</li>
                <li>Chemistry Lab</li>
                <li>Communication Lab</li>
                <li>Sound Dynamics</li>
                <li>Biology Lab</li>
                <li>Multimedia Lab</li>
                <li>Mechanics Lab</li>
                <li>Fab Lab</li>
                <li>Fluid Dynamics Lab</li>
              </ul>

              <div className={styles.sliderContent}>
                <ImageGallery items={labs} />
              </div>
            </div>
            <p className={styles.text}>
              Each has its own unique look and architecture that inspires the
              students into believing in how awesome what these labs help to
              develop. All the practical experiments are held in these labs with
              variety of tools and models that illustrates these experiments.
            </p>
          </div>
        </section>
      </Stack>
    </div>
  )
}

export default CampusComponent
