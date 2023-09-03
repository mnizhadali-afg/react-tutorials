import ProjectTiles from "./ProjectTiles"
import "./Projects.css"

const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
      <div className="flex flex-direction-column temp">
        <ProjectTiles
          title="Something Special"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum, excepturi, placeat, repellendus quidem quis at in libero eveniet tempore odio. Sapiente nihil molestias, est voluptatibus "
          imgUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
        <ProjectTiles
          title="Something Special"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum, excepturi, placeat, repellendus quidem quis at in libero eveniet tempore odio. Sapiente nihil molestias, est voluptatibus "
          imgUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
      </div>
    </section>
  )
}
export default Projects
