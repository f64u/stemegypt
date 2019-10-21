import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import styles from "./clubs.module.scss"
import AnimateHeight from "react-animate-height"

const Club = ({ name, members, children: portions }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.club}>
      <div className={styles.head}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.icon} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <AnimateHeight
        height={isOpen ? "auto" : 0}
        duration={500}
        className={styles.content}
      >
        {portions.concat([
          <Portion title="Notable Members/Founders">
            <ul>
              {members.map(m => (
                <li>
                  {m.name}: {m.occupiance}
                </li>
              ))}
            </ul>
          </Portion>,
        ])}
      </AnimateHeight>
    </div>
  )
}

const Portion = ({ title, children }) => {
  return (
    <div className={styles.portion}>
      <div className={styles.subtitle}>{title}</div>
      {children}
    </div>
  )
}

const Clubs = () => {
  return (
    <div className={styles.clubs}>
      <Club
        name="Biology Group"
        members={[
          { name: "Youssef Yasser", occupiance: "Current Head" },
          { name: "Adbdelrahman Ali", occupiance: "Academic Director" },
          { name: "Mohamed Ebrahim", occupiance: "Academic Director" },
          { name: "Mohamed Elsayed", occupiance: "Magazine Head" },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            Creating a biology-passionate community for the students, who have
            that deep desire to break new grounds in the science of life. We aim
            to change the student’s perspective on biology through multiple
            activities besides helping students who find it daunting to deal
            with biology.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Fostering the passion for biology in all the students. Grooming our
            members for biology competitions, e.g., national and international
            biology Olympiad, Brain Bee. Also, encouraging them to draft their
            own biological researches.
          </p>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>Help students study biology.</li>
            <li>Change the student's prespective for biology.</li>
            <li>Draft and publish biological researhces.</li>
            <li>
              Gain medals and achieve the first places in all biology
              competitions.
            </li>
          </ul>
        </Portion>
        <Portion title="What we do">
          <p className={styles.text}>
            We organize various activities in order to fulfil our vision for
            instance:
          </p>
          <ul>
            <li>
              Evening sessions: we hold an evening sessions every two weeks for
              the students, who got a problem with biology and find it
              confusing.
            </li>
            <li>
              Study groups: we Make a study groups, in order to prepare to the
              competitions, e.g., international biology Olympiad.{" "}
            </li>
            <li>
              Research papers: we encourage our members to start their own
              research papers and participate in competitions, ISEF.
            </li>
            <li>
              Biology group Magazine: every month we get our biology magazine
              published through, sending it by mail to all 10,11, and 12
              graders.
            </li>
          </ul>
        </Portion>
      </Club>
      <Club
        name="Mathematics Club"
        members={[
          {
            name: "Fady Sabry",
            occupiance: "Founder and Current Head",
          },
          {
            name: "Ahmed Mostafa",
            occupiance: "Cofounder and Vice Head",
          },
          {
            name: "Anas Abdullah",
            occupiance: "Cofounder and Vice Head",
          },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            Providing an opportunity for students to broaden their knowledge in
            Mathematics and to interact with their peers who have the same
            interest. Moreover, to increase the awareness of students to the
            relevance of Mathematics to students’ everyday-lives.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Allow students to cultivate their interest in Mathematics in an
            informal environment, away from stressing over grades. This will
            help provide a supportive learning environment in which students can
            develop their problem-solving skills to the maximum. Moreover, to
            engage students in significant independent research experiences and
            explore interdisciplinary applications of Mathematics.
          </p>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>To present the study of Mathematics in a new way.</li>
            <li>
              To develop knowledge, skills, and attitudes necessary to pursue
              further studies in Mathematics.
            </li>
            <li>
              To provide competitive participants in Mathematics-related
              competitions with essential skills.{" "}
            </li>
            <li>
              Aiding the students who are looking forward to pursuing
              Mathematics as a major to be competitive applicants.
            </li>
            <li>
              Developing abstract, logical, and critical thinking of students as
              well as the ability to reflect critically upon their work and the
              work of others.
            </li>
          </ul>
        </Portion>
        <Portion title="The program of the club">
          <ul>
            <li>
              Organizing study groups for students intending to take AP calculus
              tests and ones who are planning to take part in
              Mathematics-related competitions.
            </li>
            <li>
              Organizing evening sessions discussing out-of-curriculum topics.
            </li>
            <li>Organizing competitions targeting talented students.</li>
            <li>
              Conducting sessions with experienced models to discuss advanced
              topics.
            </li>
          </ul>
        </Portion>
      </Club>
      <Club
        name="Physics Club"
        members={[
          {
            name: "Kareem Mohamed",
            occupiance: "Founder",
          },
          {
            name: "Peter Ehab",
            occupiance: "Cofounder and Current Head",
          },
          {
            name: "Mostafa Mohamed",
            occupiance: "Vice Head",
          },
          {
            name: "Mohamed Abo Elnaga",
            occupiance: "Academic Director",
          },
          {
            name: "Omar Khatab",
            occupiance: "Magazine Head",
          },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            To build a foundation for excellence in physics. encourage the
            students by igniting and promoting their enthusiasm, interests and
            passion, in the study of physics and know how nature works, in
            extracurricular studies in the practical and theoretical physics.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Improve our cogitation about physics by elaborating our
            understanding of the mathematical physics to be able to participate
            in international physics competitions as IAAC and IPHO.
          </p>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>Studying advanced physics courses. </li>
            <li>Training our students to work in the physics lab. </li>
            <li>
              Getting prepared for the hardest physics competitions to win the
              top ranks.
            </li>
          </ul>
        </Portion>
        <Portion title="What we do">
          <p className={styles.text}>
            We organize verity of activities in order to fulfil our vision and
            accomplish our aim for instance:{" "}
          </p>
          <ul>
            <li>
              Evening sessions: we gather once a week to have test to test our
              thinking about the topic that we agreed to study in the previous
              week's meeting.
            </li>
            <li>
              Study groups: we Make a study groups, to help each other during
              the weekly study.
            </li>
            <li>
              Competing in international competitions: we prepare and help the
              students to participate in international physics competitions like
              IPHO, Beam line competition, and international astronomy and
              astrophysics competition
            </li>
            <li>
              Physics club Magazine: every 3 months we present our work, physics
              history, and latest news in the physics field in a magazine, and
              each magazine issue is featured in the school library after
              publication.
            </li>
          </ul>
        </Portion>
      </Club>
    </div>
  )
}

export default Clubs
