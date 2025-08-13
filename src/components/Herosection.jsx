import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const paraVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Herosection() {
  const paraContent = [
    "Hey there! 👋 I'm a passionate Full Stack Developer who loves turning ideas into reality through code.",
    "With over 2 years of experience building web and mobile apps, I've got a knack for creating solutions that actually work in the real world.",
    "When I'm not coding, you'll find me exploring new technologies, collaborating with awesome teams, and occasionally getting lost in the world of real-time features and API integrations.",
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="hero"
      id="home"
    >
      <div className="container">
        <h1 className="hero__title">
          Hi, I'm Amit! 👨‍💻
          <br />
          <span className="hero__subtitle">Full Stack Developer</span>
        </h1>

        {paraContent.map((para, idx) => (
          <motion.p
            variants={paraVariants}
            transition={{ delay: idx * 0.4 }}
            className="hero__discription"
            key={idx}
          >
            {para}
          </motion.p>
        ))}
        <motion.div
          variants={paraVariants}
          transition={{ delay: paraContent.length * 0.4 }}
        >
          <a
            key="resume-link"
            rel="noreferrer"
            className="cta-btn cta-btn--hero"
            href="./public/Amit Resume updated.pdf"
            target="_blank"
            aria-label="Download my resume"
          >
            Check Out My Resume
            <HiOutlineDownload />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
