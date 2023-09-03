import React from "react"
import "./Contact.css"

function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    let form = e.target
    let formData = new FormData(form)
    let data = Object.fromEntries(formData)
    console.log(data)
    let name = data.name
    alert("Thank you" + " " + name + " for submitting the form")
    form.reset()
  }
  return (
    <section>
      <h1>
        Contact <span>Me</span>
      </h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id=""
            aria-describedby="helpId"
            placeholder="Razia"
            required
          />
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control "
            name="email"
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="text"
            id=""
            rows="3"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <div class="btn">
          <button type="submit" className="pointer">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
