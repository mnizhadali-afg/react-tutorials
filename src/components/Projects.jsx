import { useEffect, useState } from "react"
import MultiActionAreaCard from "./ProjectTiles"
import image from "./assets/Frozan.jpeg"

import "./Projects.css"
import { CircularProgress } from "@mui/material"

const Projects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/users/akbarirazia/repos`)
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data.filter((item) => item.homepage)
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
        <h1 className="center">Projects</h1>
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
/*<a href="images/Razia Akbari's CV.pdf" download="Razia's CV">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
              </svg>
              <span>Download</span>
            </button>
          </a>
          */
export default Projects
