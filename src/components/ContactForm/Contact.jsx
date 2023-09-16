import React, { useState } from "react"
import Input from "./Input.jsx"
import Label from "./Label.jsx"
import Button from "../Button.jsx"
import { TfiEmail } from "react-icons/tfi"
import { BsTelephone } from "react-icons/bs"
import { MdOutlineDownload } from "react-icons/md"

import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    text: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    // console.log(formData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(formData.name + " Thank you for sending us a message ")
  }

  return (
    <article id="contact">
      <div className="container flex flex-direction-row justify-between">
        <div>
          <div>
            <h3 className="contacts">Contact Me</h3>
            <div className="flex gap-1x justify-baseline">
              <TfiEmail />
              <p>
                <a href="#" className="anker"></a>frozanziaie234@gmail.com
              </p>
            </div>
            <div className="flex gap-1x justify-baseline">
              <BsTelephone />
              <p>
                <a href="#"></a>+93 749 501 154
              </p>
            </div>
            <div className="btnContainer">
              <Button
                type="file"
                className="pointer flex "
                value={
                  <span className="flex justify-baseline">
                    <span>Resume</span> <MdOutlineDownload />
                  </span>
                }
              />
            </div>
          </div>
        </div>

        <div className="contact ">
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your email"
                required={true}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                className="form-control"
                name="text"
                id=""
                rows="3"
                placeholder="Your message"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="btnContainer">
              <Button type="submit" className="pointer" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </article>
  )
}

export default Contact
