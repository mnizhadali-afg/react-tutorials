import "./Skills.css"
import SkillsTile from "./SkillsTile"
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
    <section className="container" id="skills">
      <h1 className="text-center">My Skills</h1>
      <p className="text-center">
        <i>I do All Kinds of Neat Stuff</i>
      </p>

      <div className="skillContainer">
        {data.map((item) => (
          <SkillsTile
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
export default Skills
