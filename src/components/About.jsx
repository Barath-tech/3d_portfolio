import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5
        px-12 min-h-[280px] flex justify-evenly items-center
        flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h1 className="font-bold text-white text-[20px] text-center">
            {title}
          </h1>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h1 className={styles.heroHeadText}>Overview</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I'm a highly enthusiastic and experienced full-stack developer with a
        deep passion for problem-solving. With extensive knowledge in both
        frontend and backend development, I thrive in creating seamless,
        user-focused digital experiences. I'm on the lookout for exciting
        opportunities that challenge my skills and expertise in the world of
        programming.If you're seeking a versatile developer who can bring
        creativity and efficiency to your projects, I'm eager to connect and
        explore how we can work together to create exceptional digital
        solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
