import React from "react"

function Anchor(prop) {
  return (
    <a href={prop.target} target="_blank" rel="noopener noreferrer">
      {prop.children}
    </a>
  )
}

export default Anchor
