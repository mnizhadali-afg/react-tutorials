import "./Skills.css"
import Skillstile from "./Skillstile"
let data = [
  {
    icon: "😎",
    title: "Creativity",
    description:
      "Doloremque animi pariatur excepturi itaque tempora nam ducimus? At quo hic quas laboriosam iure dolorem dolore quae odit laborum corrupti architecto voluptatibus soluta molestiae cumque eligendi adipisci repellat, ipsa blanditiis.",
  },
  {
    icon: "😍",
    title: "Creativity",
    description:
      "Doloremque animi pariatur excepturi itaque tempora nam ducimus? At quo hic quas laboriosam iure dolorem dolore quae odit laborum corrupti architecto voluptatibus soluta molestiae cumque eligendi adipisci repellat, ipsa blanditiis.",
  },
  {
    icon: "😯",
    title: "Creativity",
    description:
      "Doloremque animi pariatur excepturi itaque tempora nam ducimus? At quo hic quas laboriosam iure dolorem dolore quae odit laborum corrupti architecto voluptatibus soluta molestiae cumque eligendi adipisci repellat, ipsa blanditiis.",
  },
  {
    icon: "😯",
    title: "Creativity",
    description:
      "Doloremque animi pariatur excepturi itaque tempora nam ducimus? At quo hic quas laboriosam iure dolorem dolore quae odit laborum corrupti architecto voluptatibus soluta molestiae cumque eligendi adipisci repellat, ipsa blanditiis.",
  },
  {
    icon: "😯",
    title: "Creativity",
    description:
      "Doloremque animi pariatur excepturi itaque tempora nam ducimus? At quo hic quas laboriosam iure dolorem dolore quae odit laborum corrupti architecto voluptatibus soluta molestiae cumque eligendi adipisci repellat, ipsa blanditiis.",
  },
  {
    icon: "😯",
    title: "Creativity",
    description:
      "Doloremque animi pariatur excepturi itaque tempora nam ducimus? At quo hic quas laboriosam iure dolorem dolore quae odit laborum corrupti architecto voluptatibus soluta molestiae cumque eligendi adipisci repellat, ipsa blanditiis.",
  },
]

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="flex justify-center flex-direction-column">
          <h1 className="center skill">My Skills</h1>
          <p className="center">
            <i>I do All Kinds of Neat Stuff</i>
          </p>
          <br /> <br />
          <div className="skillset flex gap-1x items-center justify-center flex-wrap">
            {data.map((item) => (
              <Skillstile
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills
