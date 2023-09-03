import ProjectTiles from "./ProjectTiles"
import "./Projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects">
          <ProjectTiles
            title="Something Special"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum, excepturi, placeat, repellendus quidem quis at in libero eveniet tempore odio. Sapiente nihil molestias, est voluptatibus "
            imgUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
          <ProjectTiles
            title="Something Special Again"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipis. lorem ipsum dolor sit amet consectetur adipis. Lorem ipsum dolor sit amet consectetur adipis. Lorem ipsum dolor sit amet consectetur adipis."
            imgUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </div>
    </section>
  )
}
export default Projects
