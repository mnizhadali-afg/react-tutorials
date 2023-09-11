import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  const handleClick = (e) => {
    console.log(e.target)
  }
  return (
    <footer>
      <div className="flex justify-center gap-1x icons">
        <BsFacebook onClick={handleClick} />
        <BsInstagram onClick={handleClick} />
        <BsLinkedin onClick={handleClick} />
      </div>

      <center>Copyright &copy; 2023 - All rights reserved</center>
    </footer>
  )
}
export default Footer
