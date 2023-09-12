import React, {useState} from "react"
import Input from "./Input.jsx"
import Label from "./Label.jsx"
import Button from "../Button.jsx"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name :"",
    email :"",
    message: ""
  })
  const handleChange = (e) => {}
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(formData.name + " Thank you for sending us a message ")
  } 
  
  
  return (
    <section id="contact">
      <div className="container">
        <div className="contact flex justify-center flex-direction-column">
          <h1>
            Contact <span>Me</span>
          </h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="" className="form-label" value="Name" />
              <Input
                type="text"
                className="form-control"
                name="name"
                placeholder="Razia"
                required={true}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="" className="form-label" value="Email" />
              <Input
                type="email"
                className="form-control"
                name="email"
                placeholder="name@domain.com"
                required={true}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="" className="form-label" value="Message" />
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
    </section>
  )
}

export default Contact
