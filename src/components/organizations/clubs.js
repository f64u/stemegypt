import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import styles from "./clubs.module.scss"
import AnimateHeight from "react-animate-height"

const Club = ({ name, members, subtext, children: portions }) => {
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
        {[subtext ? <p className={styles.subtext}>{subtext}</p> : null].concat(
          portions.concat([
            <Portion title="Notable Members/Founders">
              <ul>
                {members.map(m => (
                  <li>
                    {m.name}: {m.occupiance}
                  </li>
                ))}
              </ul>
            </Portion>,
          ])
        )}
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
      <Club
        name="Chemistry Group"
        subtext="“Aiming at improving student’s understanding of chemistry and evolving their skills to the maximum”"
        members={[
          {
            name: "Kirollos Nader",
            occupiance: "Founder",
          },
          {
            name: "Moustafa Nagy",
            occupiance: "Cofounder",
          },
          {
            name: "Mohamed Atef",
            occupiance: "Cofounder",
          },
          {
            name: "Moustafa Ehab",
            occupiance: "Cofounder",
          },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            Introducing Chemistry as a matter of controversy by encouraging
            students to discuss freely to enhance their critical thinking
            skills. Also, aiming to change the way chemistry-related topics are
            addressed by discussing them innovatively. This is implemented by
            explaining famous phenomena from the view of chemists and relating
            it to other fields of science, making room for a clear atmosphere
            for discussion and competition.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Forming a group of students who are interested in Chemistry in
            general. Their main aim is to form an interactive, exciting, and
            efficient method for studying Chemistry; accordingly, enhancing
            their understanding. Moreover, the group introduce various concepts
            whether they are discussed in the curriculum or not, as an
            enlightening method to explore various fields of Chemistry.
          </p>
        </Portion>
        <Portion title="Aims">
          <ol>
            <li>
              Presenting the study of Chemistry in a new way:
              <ul>
                <li>
                  Encouraging experiment-based learning, debates, and open
                  discussions.
                </li>
                <li>
                  Conducting and simulating notable experiments on which some
                  important laws of Chemistry were based.
                </li>
              </ul>
            </li>
            <li>
              Introducing chemistry-related careers and raising the awareness of
              the chemistry benefits in the modern industry and labor.
            </li>
            <li>
              Providing our peers with the essential lab skills:{" "}
              <ul>
                <li>Assistance in conducting extracurricular experiments.</li>
                <li>
                  Instructions on how to deal with several lab conditions,
                  readying colleagues for any independent research.
                </li>
              </ul>
            </li>
            <li>
              Aiding the students who are looking forward to pursuing Chemistry
              as a major to be competitive applicants.
            </li>
          </ol>
        </Portion>
      </Club>
      <Club
        name="Hack Club"
        members={[
          {
            name: "Ali Tarek",
            occupiance: "Founder and Co-President",
          },
          {
            name: "Omar Yasser",
            occupiance: "Co-President",
          },
          {
            name: "Ahmed Hesham",
            occupiance: "Vice President",
          },
          {
            name: "Ahmed Saad",
            occupiance: "Vice President and Head of Marketing committee",
          },
          {
            name: "Wael Gamal",
            occupiance: "Vice President and Head of Media committee",
          },
        ]}
      >
        <Portion title="What is Hack Club?">
          <p className={styles.text}>
            Hack Club is a nonprofit network of computer science clubs, where
            members learn to code and to solve problems through tinkering and
            building projects. Globally, it is founded in 221 schools, 35
            states, and 15 countries!
          </p>
        </Portion>
        <Portion title="Vision">
          <p className={styles.text}>
            The goal of Hack Club is to help its members become “hackers”. We
            want a space at every school where people are making interesting
            things with code every week. Schools don’t provide that, so we’re
            creating it in every school to make building things accessible to
            everyone.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Hack Clubs are student-led groups dedicated to:
          </p>
          <ul>
            <li>Spreading the computer science in high schools.</li>
            <li>Spreading coding and programming skills.</li>
            <li>Spreading problem-solving skills.</li>
          </ul>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>spread awareness of the existing advanced technologies</li>
            <li>enhance teens’ problem-solving and analysis skills </li>
            <li>help them present their ideas clearly and objectively</li>
            <li>
              Guide teens in the path of learning the required computer science
              skills through workshops, sessions, and hackathons.
            </li>
          </ul>
        </Portion>
        <Portion title="What we do">
          <p className={styles.text}>
            In sessions, hackathons, and workshops, students learn to code
            through building real-world projects like websites, apps, and games.
            We also offer them what’s so called “problem sets” so that they
            solve challenging problems that enlighten their minds.
          </p>
        </Portion>
      </Club>
      <Club
        name="English Conversation Club"
        subtext="“You might be familiar with clubs where mathematics and physics are the main points of interest. Nevertheless, here in the English conversation club, we are mostly keen on helping each other¬–the students–to practice our English freely.”"
        members={[
          {
            name: "Beshoy Melad",
            occupiance: "Founder",
          },
          {
            name: "Ahmed Hesham",
            occupiance: "Cofounder and Co-President",
          },
          {
            name: "Ahmed Sherif",
            occupiance: "Cofounder and Co-President",
          },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            In a world where English has become the universal language, our aim
            is to assist students to practice their speaking skills, introducing
            various methods of learning and exercising, and increasing the
            students’ fluency in English by competing in challenges. In turn,
            they can become active members of any diverse society.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Helping the students to surpass themselves in speaking English and
            overcome their fears of talking in public or presenting in front of
            a large group of people. Also, sharing the aesthetic of the most
            common language in the world among the students.
          </p>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>
              To aid the students to communicate in English fluently without
              stuttering or mishaps and to think in a foreign language easily
              rather than translating every word meditatively.
            </li>
            <li>
              To facilitate the interviewing process by training the members,
              providing tips and tricks on decreasing stress, and discussing the
              precision of using words.
            </li>
            <li>
              To acquaint the members with the criteria of speaking sections in
              English proficiency tests, helping the students to ace them.
            </li>
          </ul>
        </Portion>
        <Portion title="Program">
          <ul>
            <li>
              Arranging sessions that contain general discussions about random
              topics that allow the students to practice. Also, providing
              speaking content like idioms, phrases, or catchphrases.
            </li>
            <li>
              Simulating Academic and work-related interviews that will foster
              the capability of mastering them under several circumstances.
            </li>
            <li>
              Simulating TOEFL and IELTS speaking tests to accomplish the
              aforementioned purpose.
            </li>
            <li>
              Delivering presentations to illustrate specific topics like (How
              to maintain conventional presentation skills, Colors effect on the
              human mind, Phonetics basics, etc.). Also, assigning the members
              to make their own presentations to discuss and share their
              interests in English with the others.
            </li>
          </ul>
        </Portion>
      </Club>
      <Club
        name="Economics Club"
        members={[
          {
            name: "Mohamed Salah",
            occupiance: "Cofounder and President",
          },
          {
            name: "Seif Ahmed",
            occupiance: "Cofounder and Vice President",
          },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            Having a well-taught community about economics, one of the most
            useful fields nowadays. Since our school does not provide economic
            courses the economics club is there for students to find their
            hidden passion towards it.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            The club’s purpose is to lay the groundwork for future economic
            careers by teaching members basic economic concepts. Students will
            also be well-prepared to go through discussions about real-life
            economic issues.
          </p>
        </Portion>
        <Portion title="Aim">
          <ul>
            <li>
              Finish each season with the majority of the members having a
              strong incentive to study economics in the future.
            </li>
            <li>Get the members ready for the AP Microeconomics exam.</li>
            <li>
              Have all the members prepared to debate about current economic
              issues based on economic concepts.
            </li>
          </ul>
        </Portion>
        <Portion title="What we do">
          <p className={styles.text}>
            The main activity of the club is holding sessions to teach
            microeconomics, starting from the basic ideas of limited resources
            and scarcity reaching market failure and the role of government.
            Other activities are:
          </p>
          <ul>
            <li>
              Making biweekly debates about the topics we’ve discussed before.
            </li>
            <li>Watching “Crash Course Economics” videos.</li>
            <li>
              Organizing an event at the end of the season – hosting a local
              speaker.
            </li>
          </ul>
        </Portion>
      </Club>
      <Club
        name="Mirus"
        members={[
          {
            name: "Ahmed Hesham",
            occupiance: "Founder and President",
          },
          {
            name: "Abd Elwahab Magdy",
            occupiance: "Vice-President",
          },
          {
            name: "Abdelrahman Khater",
            occupiance: "CBO",
          },
          {
            name: "Pavly Halim",
            occupiance: "Technical Director",
          },
          {
            name: "Omar Ibrahim",
            occupiance: "CSO",
          },
          {
            name: "Mohanad Hassan",
            title: "CIO",
          },
          {
            name: "Farid Whaba",
            occupiance: "HR",
          },
          {
            name: "Omar Ayman",
            occupiance: "CFO",
          },
          {
            name: "Moaz Essam",
            occupiance: "CCO",
          },
        ]}
      >
        <Portion title="What is Mirus?">
          <p className={styles.text}>
            A local, aspiring student organization marking the initiation an
            independent designing team, by providing quality media solutions for
            high-schoolers and college students while laying down the bases for
            a novel business entrepreneurship project.
          </p>
          <p className={styles.text}>
            Using social media, public websites and our own website, we publish
            different designs and show everyone our work. As well as creating
            partnerships with different organizations to provide them with
            designs, we offer different ornate garments of our making to the
            store.
          </p>
        </Portion>
        <Portion title="Vision">
          <p className={styles.text}>
            Fostering talented youth designers, and editors and developing a
            friendly atmosphere for skill growth. After facing acclaims from
            school counselors, our organization is targeting to become a
            well-esteemed designing team with talented members around
            high-schools and colleges.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>Mirus is an organization dedicated to:</p>
          <ul>
            <li>Providing designs for high-school teams and clubs.</li>
            <li>Creating the base for a startup in prospect.</li>
            <li>Designing varied garments and selling them on-demand.</li>
          </ul>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>Becoming a successful startup.</li>
            <li>Forming an artistic crew of designers and editors.</li>
            <li>Helping our members improve constantly.</li>
            <li>
              Aiding other starting undergraduate clubs by producing designs and
              maybe on a bigger scale, in time.
            </li>
          </ul>
        </Portion>
      </Club>
      <Club
        name="Literature Club"
        members={[
          {
            name: "Antony Emil",
            occupiance: "Founder and President",
          },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            Creating a space for literature geeks among the STEM-Students
            community and spreading the knowledge about literary analysis skills
            core skills and their value for various fields inside STEM.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Introducing students to new topics in literature and helping them to
            analyze literature in respect with the writer’s background, tone of
            the text, etc. Also, assisting students in utilizing their new
            analytical skills in crafting their own works.
          </p>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>
              Think critically of literature and form a clear opinion of it
              while being able to clearly list what they find appealing, boring,
              and intriguing.
            </li>
            <li>
              Form clearer understanding of the text and avoiding misconceptions
              due to usage of unfamiliar writing styles.
            </li>
            <li>
              Understand literature in respect with the historical, political,
              and social background of the text and the personal background of
              the author justifying choices made by the author.
            </li>
            <li>
              Use their ability to analyze texts in forming their own writings
              as they will be able to choose which styles would give desirable
              impressions on the reader.
            </li>
          </ul>
        </Portion>
        <Portion title="What we do">
          <ul>
            <li>
              Hold weekly meetings discussing books that are chosen by voting,
              specific tropes, major writing styles in certain genres, or any
              literature related topic and how it is implemented across
              different genres or audiences.
            </li>
            <li>
              Write reports after finishing each book where participants note
              the general feel of the book, the most appealing parts and the
              most boring ones and noting why they felt that way, and parts
              where real-life influences on the writer are clear.
            </li>
            <li>
              Short activities that are concerned with the discussion of the day
              where students are asked to personalize the book in either
              altering decision made by the author, visualizing the text based
              on their own imagination, etc.
            </li>
          </ul>
        </Portion>
      </Club>
      <Club
        name="STEM-MUN"
        members={[
          {
            name: "Abdullah El-Shenawy",
            occupiance: "Chairman",
          },
          {
            name: "Omar Hussien",
            occupiance: "Vice Chairman",
          },
          {
            name: "Omar Nasser",
            occupiance: "Secretary",
          },
          {
            name: "Bishoy Milad",
            occupiance: "Social Media Head",
          },
          {
            name: "Abdullah Bahr",
            occupiance: "Social Media Vice-Head",
          },
          {
            name: "Youssef Yasser",
            occupiance: "OC Head",
          },
          {
            name: "Emad Muhammed",
            occupiance: "PR Head",
          },
          {
            name: "Abdullah El-Maghraby",
            occupiance: "FR Head",
          },

          {
            name: "Muhammed Hesam",
            occupiance: "Media Head",
          },
          {
            name: "Ahmed Saad",
            occupiance: "Website Manager",
          },
        ]}
      >
        <Portion title="Vision">
          <p className={styles.text}>
            Society of Politically well-informed STEM-students able to
            communicate and work out potential solution for the world’s ongoing
            problems.
          </p>
        </Portion>
        <Portion title="Mission">
          <p className={styles.text}>
            Spreading political awareness among the Egyptian STEM-students’
            community and having them informed about the world issues. Fostering
            their debating skills and enhancing their understanding for
            international relations.
          </p>
        </Portion>
        <Portion title="Aims">
          <ul>
            <li>Deepen the comprehension of global political issues</li>
            <li>
              Hone the public speaking and debating skills of the students
            </li>
            <li>
              Hone the public speaking and debating skills of the students
            </li>
          </ul>
        </Portion>
        <Portion title="What we do">
          <p className={styles.text}>
            Each season a new generation of delegates is chosen, mostly from
            STEM high scholars in Egypt. They receive intensive weekly sessions
            for a month, covering what is the UN and how it functions followed
            by the explanation for a selected global issue for the season.
            During these sessions, the delegates become well informed about the
            topic in hand and acquire a variety of skills including, debating,
            public speaking, researching, and analyzing. Afterwards a conference
            is held in which the delegates began to debate the problem from
            their own research and work towards coming up with an effective
            resolution to address the issue.{" "}
          </p>
        </Portion>
      </Club>
    </div>
  )
}

export default Clubs
