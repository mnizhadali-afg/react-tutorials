import React from "react"
// import "/Skillstile.css"
import "./Skillstile.css"

function Skillstile({ icon, title, description }) {
  return (
    <div className="flex flex-direction-column justify-center items-center card ">
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
      <p className="description center">{description}</p>
    </div>
  )
}

export default Skillstile
