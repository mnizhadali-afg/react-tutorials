import React from "react"
import Input from "./Input.jsx"
import Label from "./Label.jsx"
import Button from "../Button.jsx"
import "./Contact.css"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)
    let data = Object.fromEntries(formData)
    console.log(data)
    let name = data.name
    alert("Thank you " + name + " for submitting the form")
    form.reset()
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
