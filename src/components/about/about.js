import React from "react"

import visionImg from "../../assets/images/home/hand.png"
import missionImg from "../../assets/images/school/labs/lab7.jpg"
import overviewImg from "../../assets/images/school/labs/lab47.jpg"
import targetImg from "../../assets/images/school/building/build7.jpg"

import styles from "./about.module.scss"
import AboutComponent from "./aboutcomponent"

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <AboutComponent
          name="Vision"
          imgSrc={visionImg}
          className={styles.oneabout}
        >
          <p>
            At STEM High School, we believe that the school was designed to
            create “centers of excellence” that embody trans-disciplinary
            collaboration, real world applications, critical thinking, and a
            pioneering spirit. Ultimately, STEM schools support a new vision of
            Egypt as a country equipped with both the human capital and the
            institutional resources to compete and excel in the international
            marketplace.
          </p>
          <p>
            The overarching goal of the schools is to create a network of
            self-sufficient schools with newly established curriculum, trained
            teachers, industry partnerships and operational system under the
            MOE's public schooling system to educate high performing students
            from across Egypt, regardless of socioeconomic status.
          </p>
        </AboutComponent>
        <AboutComponent
          name="Mission"
          imgSrc={missionImg}
          isLeft
          className={styles.oneabout}
        >
          <p>
            The mission of STEM High School for Boys is to provide students a
            challenging learning environment focused on math, science, and
            technology, to inspire joy at the prospect of discovery, and to
            foster a culture of innovation based on ethical behavior and the
            shared interests of humanity.
          </p>
        </AboutComponent>
        <AboutComponent
          name="Overview"
          imgSrc={overviewImg}
          className={styles.oneabout}
        >
          <p>
            Ranked as Egypt’s best High School, STEM High School for Boys – 6 of
            October was initiated as the product of a partnership between the
            U.S. Agency for International Development (USAID), World Learning
            and its sub-recipients the ECASE project to provide technical
            assistance to the Ministry of Education to establish STEM schools in
            Egypt. Offering a unique system that focuses on scientific,
            mathematical and technological fields, STEM schools target
            high-potential students who demonstrate strong academic skills.
            Taught by professors involved in post-graduate studies, the core
            skills and values acquired by the students throughout the curriculum
            emphasize and promote critical inquiry and research, problem solving
            skills, intellectual curiosity, and social responsibility. As the
            first of its kind in Egypt, the school serves applicants from
            different governorates: Cairo, Giza, Qalubia, Fayoum, Bani Souwaif,
            as well as the cities near 6 of October city.
          </p>
        </AboutComponent>
        <AboutComponent
          name="Targeted Students"
          imgSrc={targetImg}
          isLeft
          className={styles.oneabout}
        >
          <p>
            Accepting only about 150 out of 5000 students annually, STEM October
            is pretty competitive. Indeed, the school targets prospective
            students with demonstrated passion and aptitude for Science,
            Technology, Engineering, and Mathematics. Students coming to STEM
            October should show their willingness to continuously learn, improve
            themselves, and share their knowledge with the school community.
          </p>
          <h3>
            ELIGIBILTY CRITERIA <span>(ANNULALY UPDATED)</span>
          </h3>
          <p>
            In order to get accepted into STEM October, applicants should meet
            one of two criteria
          </p>
          <ul>
            <li>
              To have a total grade of more than 98% in the 9th Grade, and to
              have a grade of 100% in one of three Subjects: Math, Science, and
              English.
            </li>
            <li>
              To have a total grade of more than 95% in the 9th Grade, and to
              have a grade of 100% in two of three Subjects: Math, Science, and
              English.
            </li>
          </ul>
          <p>
            These criteria vary each year; however, they have been the same for
            the last two years and are expected to last for a couple more.
          </p>
          <p>
            After meeting one of the mentioned conditions, applicants undergo
            four other acceptance tests - which are made to ensure the
            applicants’ competence in the tested fields. The four tests are
            English, Math, Science, and IQ and are held nation-wide. Students
            are, eventually, ranked based on their scores in the four tests
            where the top 150 are accepted into STEM October!
          </p>
        </AboutComponent>
      </div>
    </div>
  )
}

export default About
