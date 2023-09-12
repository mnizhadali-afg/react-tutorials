import ProjectTiles from "./ProjectTiles"

import "./Projects.css"

const data = [
  {
    title: "Something Special",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum, excepturi, placeat, repellendus quidem quis at in libero eveniet tempore odio. Sapiente nihil molestias, est voluptatibus",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Something Special",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum, excepturi, placeat, repellendus quidem quis at in libero eveniet tempore odio. Sapiente nihil molestias, est voluptatibus",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Something Special",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum, excepturi, placeat, repellendus quidem quis at in libero eveniet tempore odio. Sapiente nihil molestias, est voluptatibus",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
]

const Projects = () => {
  let projects = data.map((project, index) => (
    <ProjectTiles
      title={project.title}
      description={project.description}
      imgUrl={project.imgUrl}
      key={index}
    />
  ))
  return (
    <section id="projects">
      <div className="container">
        <h1 className="center">Projects</h1>
        <div className="projects">{projects}</div>
      </div>
    </section>
  )
}
export default Projects
