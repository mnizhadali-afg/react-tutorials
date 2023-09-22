import React from "react"
import "./SkillsTile.css"


function SkillsTile({ icon, title }) {
  return (
    <div className="card text-center">
      <div className="icon">{icon}</div>

      <p className="title">{title}</p>
    </div>
  )
}

export default SkillsTile
