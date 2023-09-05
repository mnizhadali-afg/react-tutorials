import "./ProjectTile.css"

const ProjectTiles = ({ title, description, imgUrl }) => {
  return (
    <div className="flex proejctTile flex-wrap">
      <div className="projectDetails">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#">View Project</a>
      </div>
      <div className="projectThumbnail">
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  )
}
export default ProjectTiles
