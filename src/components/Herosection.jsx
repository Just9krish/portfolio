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
    "I am recent graduate from Mumbai University with a degree in Information Technology.",
    "My primary interests lie in building web applications and Restful APIs.",
    "I am comfortable working with languages such as JavaScript, HTML, and CSS, and I am familiar with web frameworks like React, Node, and Express. Additionally, I have experience working with databases like MySQL and MongoDB.",
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
          Hello,
          <br />
          My name is Amit.
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
            Get My Resume
            <HiOutlineDownload />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
