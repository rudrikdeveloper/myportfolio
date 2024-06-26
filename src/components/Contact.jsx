import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "src/hooks/useAlert";
import Alert from "./Alert";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rudrik",
          from_email: form.email,
          to_email: "rudrikofficial239@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent Successfully!!!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        showAlert({
          show: true,
          text: "I didn't receive your Message???",
          type: "danger",
        });
      });
  };

  return (
    <>
      {alert.show && <Alert {...alert} />}
      <section className="relative flex lg:flex-row flex-col max-container">
        <div className="flex-1 min-w-[50%] flex flex-col h-full">
          <h1 className="text-3xl font-bold flex justify-center dark:text-light">
            Get in <span className="bluee">&nbsp;Touch</span>
          </h1>

          <form
            className="w-full flex flex-col gap-7 mt-14 flex-grow"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold bluee">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Your Name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="text-black-500 font-semibold bluee">
              Email-Id
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email-Id"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label className="text-black-500 font-semibold bluee">
              Your Message
              <textarea
                name="message"
                rows={8}
                className="textarea"
                placeholder="Let me know how can I help you!!!"
                required
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <div className="flex-grow"></div>{" "}
            {/* Pushes the button to the bottom */}
            <button type="submit" className="btn mt-4" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
