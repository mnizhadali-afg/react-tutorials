import { useEffect, useState } from "react"
import MultiActionAreaCard from "./ProjectTiles"
//import image from "./assets/Frozan.jpeg"

import "./Projects.css"
import { CircularProgress } from "@mui/material"

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/users/Frozanziaee/repos`)
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data
       setRepos(filteredRepos)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <section id="projects">
      <div className="container fade-in">
        <h2 className="center">Projects</h2>
        <div className="projects">
          {repos.map((repo) => (
            <MultiActionAreaCard
              link={repo.homepage}
              key={repo.id}
              title={repo.name}
              description={repo.description}
              image={repo.owner.avatar_url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
