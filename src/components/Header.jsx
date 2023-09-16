import Anchor from "./Anchor"
import "./Header.css"

const Header = () => {
  return (
    <nav>
      <div className="container flex items-center justify-end">
        <ul className="flex ">
          <li>
            <Anchor href="#about">ABOUT</Anchor>
          </li>
          <li>
            <Anchor href="#about">SERVICES</Anchor>
          </li>
          <li>
            <Anchor href="#about">CONTACT</Anchor>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
