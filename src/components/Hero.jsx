import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

/**
 * Renders a hero section on a webpage with dynamic content and animated computer graphics.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}
      >
        <div
          className="flex flex-col items-center 
        justify-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]"> Barath</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I'm an enthusiastic Mern Stack Developer and
            <br className="sm:block hidden" /> I'm a Final year Computer Science
            Engineering Student.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute flex w-full justify-center items-center
      bottom-32 xs:bottom-10 "
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4
             border-secondary flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
