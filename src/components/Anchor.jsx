import React from "react"

function Anchor(prop) {
  return <a href={prop.target}>{prop.children}</a>
}

export default Anchor
