import "./Skills.css"
import { FaJava } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { FaBootstrap } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import SkillsTile from "./SkillsTile"
let data = [
  {
    icon: <FaJava />,
    title: "Java",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
  },
  // {
  //   icon: <FaReact />,
  //   title: "React",
  //   //description:
  //   //"Doloremque animi pariatur excepturi itaque tempora nam ducimus? At quo hic quas laboriosam iure dolorem dolore quae odit laborum corrupti architecto voluptatibus soluta molestiae cumque eligendi adipisci repellat, ipsa blanditiis.",
  // },
]

const Skills = () => {
  return (
    <section className="container skills-section" id="skills">
      <h3 className="skill">Skills</h3>
      <div className="skillContainer">
        {data.map((item, index) => (
          <SkillsTile key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </section>
  )
}
export default Skills
