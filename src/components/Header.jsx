import "./Header.css"

const Header = () => {
  return (
    <nav>
      <div className="container flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/66347282?v=4"
          alt=""
        />
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
