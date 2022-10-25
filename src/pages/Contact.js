import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Stars from "../components/layout/Stars";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    document.body.classList.add("contact-layout");
    return () => {
      document.body.classList.remove("contact-layout");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Surprise! I left a console log in the code!");

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
        <div className="contact__text">
          <h2>_Contact me</h2>

          <p>
            This contact form does not keep any of your data. Its unique role is
            to send me an email.
          </p>
        </div>

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
              SEND
            </button>
            <div className="contact-form__confirmation-wrapper">
              <span className={emailSent ? "visible" : null}>
                Thank you for your message, I will be in touch in no time!
              </span>
            </div>
          </form>
        </div>
      </div>
      <Stars />
    </div>
  );
};

export default ContactPage;
