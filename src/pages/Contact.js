import { useState } from "react";
import emailjs from "emailjs-com";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // const isValidEmail = email => {
  //   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regex.test(String(email).toLowerCase());
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");

    if (name && email && message) {
      // TODO - send mail
      const serviceId = "service_q734d2r";
      const templateId = "template_4ig10v5";
      const userId = "HhtCrFR-z_788FWjk";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact">
      <div className="contact__content container">
        <h2>_Contact me</h2>

        <p>
          This contact form does not keep any of your data. Its unique role is
          to send me an email.
        </p>

        <div className="contact-form__wrapper">
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              className="contact-form__input contact-form__name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="contact-form__input contact-form__email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="contact-form__input contact-form__msg"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="contact-form__btn btn" type="submit">
              Send
            </button>
            <span className={emailSent ? "visible" : null}>
              Thank you for your message, I will be in touch in no time!
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
