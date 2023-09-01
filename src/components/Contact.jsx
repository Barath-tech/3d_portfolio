import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin } from "../assets";
import React, { Fragment } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //template_cy6vmfg
  //service_8u6e9oe
  //XicjxqyYOhf4caF7b
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8u6e9oe",
        "template_cy6vmfg",
        {
          from_name: form.name,
          to_name: "Barath S",
          from_email: form.email,
          to_email: "barathsundar03@gmail.com",
          from_message: form.message,
        },
        "XicjxqyYOhf4caF7b"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for contacting me...I will get back to you as soon as possible"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went Wrong...Try again!!");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse
  flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={form.name}
              placeholder="What's your name..?"
              className=" placeholder:text-secondary text-white
               outline-none rounded-lg bg-tertiary py-4 px-6 border-none
               font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={form.email}
              placeholder="What's your email..?"
              className=" placeholder:text-secondary text-white
               outline-none rounded-lg bg-tertiary py-4 px-6 border-none
               font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              onChange={handleChange}
              name="message"
              value={form.message}
              placeholder="What do you want to say..?"
              className=" placeholder:text-secondary text-white
               outline-none rounded-lg bg-tertiary py-4 px-6 border-none
               font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit
            outline-none text-white font-bold rounded-xl
            shadow-md shadow-primary "
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <Fragment>
            <p className={styles.sectionSubText}>For more Details:</p>
            <div
              className=" 
          flex flex-row justify-between 
          items-center  w-20 h-20"
            >
              <a href="https://www.linkedin.com/in/barath-s-8a6997213/">
                <img src={linkedin} />
              </a>
            </div>
          </Fragment>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px]
      h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
