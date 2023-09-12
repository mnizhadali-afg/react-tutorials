import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import Anchor from "./Anchor"

const Footer = () => {
  return (
    <footer>
      <img src="https://avatars.githubusercontent.com/u/66347282?v=4" alt="" />
      <div className="flex gap-1x icons justify-center">
        <Anchor target="_blank">
          <BsFacebook />
        </Anchor>
        <Anchor target="_blank">
          <BsInstagram />
        </Anchor>
        <Anchor target="_blank">
          <BsLinkedin />
        </Anchor>
      </div>

      <p className="text-center">Privacy Policy | Terms of Use </p>

      <center>Copyright &copy; 2023 - All rights reserved</center>
    </footer>
  )
}
export default Footer
