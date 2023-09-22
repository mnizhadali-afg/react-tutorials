import React from "react"
import "./SkillsTile.css"


function SkillsTile({ icon, title }) {
  return (
    <div className="card flex flex-direction-column justify-between justify-content ">
      <div className="icon">{icon}</div>

      <p className="title">{title}</p>
    </div>
  )
}

export default SkillsTile
