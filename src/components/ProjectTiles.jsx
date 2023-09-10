import "./ProjectTile.css"
import { FiChevronsRight } from "react-icons/fi"

const ProjectTiles = ({ title, description, imgUrl }) => {
  return (
    <div className="flex proejctTile flex-wrap">
      <div className="projectDetails">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="link">
          <a href="#">View Project</a>
          <FiChevronsRight />
        </div>
      </div>
      <div className="projectThumbnail">
        <img src={imgUrl} alt={title} />
      </div>
    </div>
  )
}
export default ProjectTiles
