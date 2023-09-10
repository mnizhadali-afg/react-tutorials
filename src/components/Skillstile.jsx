import React from "react"
// import "/Skillstile.css"
import "./SkillsTile.css"

function SkillsTile({ icon, title, description }) {
  return (
    <div className="card text-center">
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  )
}

export default SkillsTile
