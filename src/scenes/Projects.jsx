import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative rounded-sm">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {desc}
        </p>
      </div>
      <img src={`assets/${projectTitle}.png`} alt={projectTitle} className="h-full"/>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Most of my works include translating films, documents, doing subtitles and, last but not least, proofreading others' products.
        </p>

      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-white
              max-w-[600px] max-h-[400px] text-2xl font-playfair font-semibold rounded-sm"
          >
            ATTENTION TO DETAILS
          </div>
          <Project title="Storii" 
            desc={"This is episode 7 with Viet Anh and Ha Anh Tuan. Again, I was very happy to work with their beautiful songs."} />
          <Project title="Storii 2" 
            desc={"Episode 5 of the series. This time, we have Suboi and Ha Tran - a truly unique combination."}/>

          {/* ROW 2 */}
          <Project title="Storii Wild Life" 
            desc={"I was the only translator of the whole series. This was a beautiful program aiming to raise people's awareness."}/>
          <Project title="High Kick" 
            desc={"One of the many shows I was a part of. Dealing with this series was a pleasure."}/>
          <Project title="Mau Co Ua" 
            desc={"One of my favorite works so far. Doing subtitles for this film was truly an honor."}/>

          {/* ROW 3 */}
          <Project title="Sing Your Dream" 
            desc={"This show has a great purpose and being a part of it was something I can't forget."}/>
          <Project title="Viet Success" 
            desc={"The channel is about the economy and it had given me quite a lot of knowledge of the field."}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[600px] max-h-[400px] text-2xl font-playfair font-semibold rounded-sm"
          >
            SMOOTH MEANING DELIVERY
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
