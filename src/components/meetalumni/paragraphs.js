import React from "react"

import styles from "./paragraphs.module.scss"
import OneParagraph from "./oneparagraph"

const Paragraphs = () => {
  return (
    <div className={styles.paragraphs}>
      <div className={styles.oneParagraph}>
        <OneParagraph
          name="Mustafa Ehab"
          imgSrc={require("../../assets/images/people/ehab.png")}
        >
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Mostafa Ehab, probably one of the most popular prodigies that came
              out of STEM October and one that has rightfully deserved his
              position in the cast of accepted students. Mostafa comes from Beni
              Suef and he spent most of his early life in Syria and traveling
              between Cairo and his hometown until one day his uncle visited him
              when he was in 9<sup>th</sup> grade and his wife told Mostafa
              about a school called the Zewail School: a misconception name for
              STEM October. Mostafa applied for the school by a challenge from
              his father and some encouragement from his school mates and he was
              accepted to join the 3-year adventure.
            </p>
            <p className={styles.paragraph}>
              When Mostafa first joined the school, he didn’t like the
              environment much and he felt that he was more comfortable at his
              old school and with his family. This feeling crept on him until
              the middle of the second semester in his sophomore year. Then, he
              finally realized how attached he had become to the school and how
              the school really changed him for the better and how it opened his
              eyes to a new world of thought that he never would’ve achieved in
              his old school. And at that moment, he decided to continue in STEM
              and he also decided to pursue the goal of studying abroad. Junior
              year for Mostafa was a year of accomplishment: he spent the year
              running from one activity to the next and he sought out to fulfill
              the goals that he had set for himself at the beginning of the
              year. He looks back at it now as one of the most fruitful years of
              his life. And after that, of course, was his senior year. The year
              he liked to call the year of actualization. A year where he
              reflected on his past and looked at the metamorphosis that he has
              gone through. And also a year where he looked to the future and
              tried to predict how he would look back on these amazing years
              later on in his life. Ending the year with the life changing
              acceptance email from Stanford University.
            </p>
            <p className={styles.paragraph}>
              Mostafa credits the school for giving its students an
              international perspective of thinking and that it makes them think
              on a scale like no normal student. His favorite memory from the
              school was working with the student union and how he loved the
              organization and its members and how they worked to solve the
              problems around them and make the best environment possible for
              the students. And his favorite extracurricular activity is a very
              popular one among students till this day which is the CCC or the
              Competitive College Club: a club that gathers students that are
              passionate to study abroad so that they can help, benefit and
              support each other.
            </p>
          </div>
        </OneParagraph>
      </div>
      <div className={styles.oneParagraph}>
        <OneParagraph
          name="Mohamed Ramadan"
          imgSrc={require("../../assets/images/people/ramadan.png")}
          isLeft
        >
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Mohamed Ramadan is one of the brain children of STEM October and
              one of its glorious cast of accepted students. Born in El
              Dakahlia, Mohamed was a student at an experimental language school
              since kindergarten and he stayed there until he received a
              suggestion from some school teachers and friends to apply to STEM
              October. He wanted to embark on the adventure with his 2 friends.
              He was passionate to try something new, make projects, build
              contraptions, change the world and possibly study abroad. Although
              the STEM school experience was as short as 3 years, for Mohamed it
              represented a changing period for his life.
            </p>
            <p className={styles.paragraph}>
              He started off his sophomore year with only one thing in mind:
              Discover. He basically joined all the clubs that were available
              including biology, geology, physics, chemistry, game development
              and so many others that he says he can’t even remember anymore
              because of how unimpactful they were. Nevertheless, it was a
              crucial step he took to uncover his passion and find what was
              right for him. Little did he know that his passion was actually
              just staying at home and reading a book. In junior year, he was
              determined to hone his skills. He read even more and he even
              started writing and engaging with the STEM community through his
              literature. In senior year, he realized that it was almost the end
              of the road and after some critical thinking about how this school
              had changed him, he started devoting most of his time to giving
              back to the community and leaving a mark at this place that
              evolved him to what he was now. And while he was doing that, he
              was preparing for the most important year of his life.
            </p>
            <p className={styles.paragraph}>
              A few very tough months later and it was time for the decision.
              And, as usual, his hard work was paid off with an invigorating
              statement: “You have been selected to be one of the students for
              the class of 2022 for Washington University in St. Louis”. And
              with that, he gives off his last thoughts about the school: “[A]
              community that unleashes the potential of every student and pushes
              them beyond their limits, [a] collaborative and spontaneously
              competitive community where we are all competing yet we are all
              helping each other, [an] inclusive community where your mindset,
              religion, and ethnicity don't matter. It's that community that
              produces impactful individuals who are ready to soar to greater
              heights. STEM is basically college, just 2 or 3 bits more intense
              and enriching. And that's how it helped me withstand college.”
            </p>
          </div>
        </OneParagraph>
      </div>
    </div>
  )
}

export default Paragraphs
