import "./About.css"
import Anchor from "./Anchor"
import Button from "./Button"
import image from "./assets/Frozan.jpeg"
import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
const About = () => {
  return (
    <section className=" flex items-center fade-in" id="about">
      <div className="container image-about-contain">
        <div className="image-container">
          <img src={image} alt="" />
        </div>
        <div className="about grid place-center">
          <p className="text-right hello-text">Hello, I'm</p>
          <h1>Frozan Ziaee</h1>
          <p>
            Frontend web developer based in Parwan, Afghanistan. I am passionate
            about learning and willing to improve myself to the last point in
            this field. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur harum aliquid hic placeat quod quidem, amet error.
          </p>
          <br />
          <Button type="button" className="pointer " value="Get in touch" />
          <br />
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
        </div>
      </div>
    </section>
  )
}
export default About
