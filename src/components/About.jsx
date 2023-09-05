import "./About.css"

const About = () => {
  return (
    <section className="about flex items-center" id="about">
      <div className="container">
        <div className="userDetails flex flex-direction-column items-center justify-center">
          <div className="image-container">
            <div className="rotating-border"></div>
            <img
              src="https://avatars.githubusercontent.com/u/66347282?v=4"
              alt="https://avatars.githubusercontent.com/u/66347282?v=4"
            />
          </div>
          <h2>Hi 👋</h2>
          <h3>
            I'm <span>Razia</span>
          </h3>
          <p>A Frontend Developer in Kabul</p>
        </div>
      </div>
    </section>
  )
}
export default About
