import React from "react";
import "./contact.css";

const ContactPage = () => {
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   if (window.location.href.includes("success=true")) {
  //     setSuccess(true);
  //   }
  // }, success);

  return (
    <div id="contact" className="contact-container">
      <div className="wrapper-contact">
        <div className="highlight"></div>
        <h2>Contact</h2>
        <div className="contactInfoContainer">
          {/* {success && (
            <p style={{ color: "green" }}>Thanks for your message! </p>
          )} */}

          <div className="formContainer">
            <form
              action="/success=true"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label>
                <input type="text" name="name" placeholder="Name" />
              </label>
              <label>
                <input type="email" name="email" placeholder="Email" />
              </label>
              <label>
                <textarea
                  name="message"
                  placeholder="Write a message here"
                ></textarea>
              </label>
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="contactMeContainer">
            <p>
              You can contact me at{" "}
              <a
                className="contactEmail"
                href="mailto:galit.gerasimov3@gmail.com"
              >
                galit.gerasimov3@gmail.com
              </a>{" "}
              or feel free to use the form provided and I'll get back to you as
              soon as possible!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
