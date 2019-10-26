import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import styles from "./events.module.scss"
import AnimateHeight from "react-animate-height"

const Event = ({ name, expanded, children }) => {
  const [isOpen, setIsOpen] = useState(expanded || false)

  return (
    <div className={styles.event}>
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
        {children.map(portion => (
          <div className={styles.portion}>
            <div className={styles.subtitle}>{portion.title}</div>
            {portion.paragraphs.map(p => (
              <p className={styles.text}>{p}</p>
            ))}
          </div>
        ))}
      </AnimateHeight>
    </div>
  )
}

const Events = () => {
  return (
    <div className={styles.events}>
      <h2 className={styles.title}>School Events</h2>

      <Event
        name="The German Teacher Day “Deutsch Lehrer Tag,” November 24th, 2014"
        expanded
      >
        {[
          {
            title: "Overview",
            paragraphs: [
              "The event was held by “Goethe Institute in Cairo” in association with the ministry of education. It was completely organized by STEM October students who showed their ability to organize such a colossal event. The October Students Union was responsible for preparing for the day.",
              "It was remarkably the first time for this event to be held in a school here in Egypt. The event’s day had many activities for the attendees including workshops and sessions given by Goethe trainers to the 411 Egyptian German language teachers, free time for the attendees to share experiences with themselves and their trainers, musical performances, and talks given by October students for the attendees to introduce the school.",
            ],
          },
          {
            title: "Theme",
            paragraphs: [
              "The event was held mainly to celebrate the German teachers’ day and to give the opportunity for exchanging experience, communication, and creating ideas. The event aimed also to create workshops to introduce the attendees to a new modern way for teaching German and to share some activities of Goethe institute in Cairo and STEM October.",
            ],
          },
          {
            title: "Attendees",
            paragraphs: [
              "The event was attended by the German ambassador in Egypt, Goethe institute manager in the Middle East and North Africa, Goethe institute manager in Cairo, and dean of the Alsun Faculty, Ain Shams University. The event was a very big one with about 411 German teachers, Goethe institute trainers, many German students from Helwan University and Ain Shams University.",
            ],
          },
          {
            title: "Attendees Feedback",
            paragraphs: [
              "The general feedback from all the attendees was positive; everyone enjoyed the event and said that he really benefited from the experience. Moreover, the VIP’s gave a very positive feedback on the event and the organizers. The German ambassador showed his appreciation to the STEM October students’ talks and offered the school a place in a program called “Schools: Partners for the Future” (PASCH). In addition, the dean of the Alsun Faculty, Ain Shams University commended STEM October students for their activities - presented in their talks – and also said that such students are better than some professors in his opinion.",
            ],
          },
        ]}
      </Event>
      <Event name="Local Hack Day, December 2nd, 2017">
        {[
          {
            title: "Overview",
            paragraphs: [
              "MLH’s Local Hack Day is a global hackathon for learning, building, and sharing. It introduces students who are passionate and curious about technology to an environment full of excitement and competition. In 2017, The event brought out more than 6,000 participants across 34 countries and 236 cities around the world.",
              "For the first time ever, the Local Hack Day was brought to the Egyptian STEM community on December 2, 2017 in STEM 6th October High School for Boys. It was under the supervision of John William, current Student Council President. The main sponsor was Al Watania Technologies. About 100 attendees from STEM community participated in the event.",
            ],
          },
          {
            title: "Event Day",
            paragraphs: [
              "The Hack Day contained professional sessions given by expert speakers: IOT (Internet Of Things) session, IT (Information Technology) given by one of Microsoft staff, Game development, and Web Technology. The sessions were held in STEM 6th October High School’s labs, including Fab Lab, Electronics Lab, Multimedia Lab, and Robotics Lab. The STEM 6th October students also organized competitions, aiming to motivate the sense of innovation and curiosity for the students, these competitions were: Problem Solving Contest, Robots Race, and Hunt Your Treasure. In the Problem Solving Contest, students competed to solve different challenges using algorithm and coding. In the Robots Race, students in teams designed their own robots and programmed them to participate in a fascinating race. Lastly for the Hunt Your Treasure competition, students got into a mission of searching for a QR code in the school area using their mobile phones.",
            ],
          },
          {
            title: "Participants Feedback",
            paragraphs: [
              "The feedback was positive and constructive from both the attendees and the speakers. The speakers demonstrated how fascinated they were by the interactivity and passion of STEM 6th October students as they gave them those sessions and noticed their cooperation to manage the day. The attendees were satisfied with the outcome of the day, they said that they had the chance to engage in technology and get to work by their own in a competitive environment. In the end, we can say that it was a STEM day by every literal sense.",
            ],
          },
        ]}
      </Event>
      <Event name="Local Hack Day, December 1st, 2018">
        {[
          {
            title: "Overview",
            paragraphs: [
              "For the second year, the Local Hack Day was brought again to the Egyptian STEM community on December 1st, 2018 in STEM 6th October High School for Boys. The Hack Day this time assembled workshops on “Google Assistant,” cybersecurity, embedded systems, machine learning (AI), and game development. Names from IEEE Helwan Student Branch to GDG and flutter attended the day. ",
            ],
          },
          {
            title: "Event Day",
            paragraphs: [
              "The workshops were held in STEM 6th October High School’s labs, including Fab Lab, Electronics Lab, Multimedia Lab, and Robotics Lab. At the end of the day, every workshop hosted a competition to prove participants’ comprehension and give them some sense of hands-on experience. First Lego League school team’s lead was there to host a quick session of how to use Lego pieces optimally, so that by the end of the session the team involved built a fully functional robot. The attendance this year was extraordinary, people who signed up for tickets are about 500, 250 of which showed up. This is a 250% increase from 2017’s 100-attendee. Meanwhile, the social media reach was 13.1k.",
            ],
          },
          {
            title: "Attendees Feedback",
            paragraphs: [
              "The feedback was positive and constructive from both the attendees and the workshop hosts/hostesses. The hosts demonstrated how fascinated they were by the interactive attendance and passion of STEM 6th October organizing team who showed their cooperation in organizing the day. The attendees were satisfied with the outcome of the day and reflected on how vibrant the workshops and the closing ceremony were with respect to 2017’s event.",
              "You can find the Facebook event of STEM LHD '18 here: https://www.facebook.com/events/387327258474035/",
            ],
          },
        ]}
      </Event>
      <Event name="“University of Rochester’s visit,” April 8th, 2018">
        {[
          {
            title: "Overview",
            paragraphs: [
              "The event was held by STEM October students and counselor. The school hosted Jonathan Burdick, Vice Provost and Dean of Admissions and Financial Aid at the University of Rochester at the time. It was a school day in STEM October as students attended their sessions normally before and after the event. ",
              "On the day, Mr. Burdick had an inclusive campus tour where he got to personally see the school’s library, laboratories, and class rooms. He was also introduced to the October students’ achievements including test scores, prizes, international competitions, etc.…  Throughout the day, Mr. Burdick was accompanied by two STEM October students who were accepted to the University of Rochester’s class of 2022.",
              "Besides, Mr. Burdick gave a 40-minutes talk where he gave a positive feedback on the school, introduced the University of Rochester in details, and answered many students’ questions.",
              "After the talk, Mr. Burdick was further introduced to the school’s environment by taking a look on the ongoing sessions at the class rooms and laboratories.",
            ],
          },
          {
            title: "The Visitor's Feedback",
            paragraphs: [
              "In his talk, Jonathan Burdick, Vice Provost and Dean of Admissions and Financial Aid in the University of Rochester at the time, gave a very positive feedback on what he had seen at STEM October’s campus. ",
              "“I feel like you’re very lucky to be here” said Mr. Burdick to the STEM students listening to his talk, “I’ve been learning a bit about the problem-based learning approach that’s going on here, and I find it fascinating because I think it is the wave of Future.”",
              "“There are lots of people all over the world trying to figure out the right way to approach education, and I think one of the answers is already found right here.” Mr. Burdick added. ",
            ],
          },
        ]}
      </Event>
      <Event name="STEM-MUN Conference, 2019">
        {[
          {
            title: "Overview",
            paragraphs: [
              "For the first time ever in STEM community, under the leadership of Abdullah El-Shenawy, and with the collaboration of 4 different STEM schools (October, Maadi, Obour, and Ismailia), the first ever STEM model united nation was held. Firstly, for the delegates’ form, more than 120 persons from all STEM schools in Egypt had applied to take 1 of 22 seats in the conference. After filtration and interviews, the delegates were chosen and begun their sessions, which are some pre-sessions to inform them about what the UN is, and to let them know more about the topic, the day-organization, and how the conference will move on. The main topic of the conference was the Yemeni civil war, as 22 delegates standing for 22 countries discussed and debated to reach a resolution for the issue. ",
            ],
          },
          {
            title: "The Conference Day",
            paragraphs: [
              "The day started with the opening speech, describing what STEM MUN represents. Then, an opening speech for every delegate was made. After that, they went through many debates in order to create a resolution to solve the Yemeni civil war. Finally, different resolutions were made and one of them was selected by the votes of the delegates under the supervision of the chairperson. ",
              "In the closing ceremony, certificates were given to the team hard-working members and to all of the delegates.",
              "The best delegates were chosen from among the others and were given special certificates and different awards.",
            ],
          },
          {
            title: "Feedback",
            paragraphs: [
              "The reviews on the conference were outstanding, starting from the guests (Dr. Reda El-Sherbiny, the principal of STEM October; Mrs. Doaa Ragab, counselor of STEM October; MR. Muhammed Abd El-Tawab, IT supervisor); as they confessed their admiration with the delegates and the organization of the day, ending with the delegates and the team members who showed great success in keeping the event brimming with life and describing how it skyrocketed their love for debating and discussing the common good for different countries and the whole world.",
            ],
          },
        ]}
      </Event>
    </div>
  )
}

export default Events
