import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  image,
  name,
  description,
  tags,
  index,
  source_code_link,
}) => {
  return (
    <div>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[250px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div
              className="absolute inset-0 flex 
             justify-end m-3 card-img_hover"
            >
              <div
                className="black-gradient w-10 h-10 rounded-full
              flex justify-center items-center cursor-pointer"
                onClick={() => window.open(source_code_link, "_blank")}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h3
              className="text-white font-bold
            text-[14px]"
            >
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>My Works</p>
        <h2 className={`${styles.sectionHeadText} text-center `}>Projects</h2>
      </motion.div>
      <div>
        <motion.p className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]">
          My projects section showcases a diverse range of completed
          assignments, highlighting my proficiency in various technologies.
          Using React.js, Tailwind CSS, HTML, and traditional CSS, I've crafted
          engaging and responsive user interfaces. Additionally, I've leveraged
          Django and SQLite to build robust backend systems, while Node.js and
          MongoDB have powered my dynamic web applications. These projects
          reflect my versatility and expertise in full-stack development.
        </motion.p>
      </div>
      <div className="mt-20 gap-7 flex flex-wrap">
        {projects.map((projects, index) => (
          <ProjectCard key={`project-${index}`} {...projects} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
