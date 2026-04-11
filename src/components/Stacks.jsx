import ReactSvg from "./svgs/React";
import express from "../assets/icons8-express-js-50.png";
import node from "../assets/node-js-svgrepo-com.svg";
import socket from "../assets/socket.png";
import Redux from "./svgs/Redux";
import TailwindCSS from "./svgs/Tailwind";
import { motion } from "framer-motion";
import JavaScript from "./svgs/JavaScript.jsx";
import MongoDB from "./svgs/MongoDB.jsx";
import Html from "./svgs/Html";
import Css from "./svgs/Css";
import Git from "./svgs/Git";
import Postman from "./svgs/Postman";
import MaterialUI from "./svgs/MaterialUI";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const Stacks = () => {
  return (
      <div className="pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="m-20 text-center text-4xl font-bold"
        >
          Stacks
        </motion.h2>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap justify-center items-center"
        >
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.4)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <Html />
              <span className="mt-2 text-sm font-medium">HTML</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.6)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <Css />
              <span className="mt-2 text-sm font-medium">CSS</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(1.8)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <JavaScript />
              <span className="mt-2 text-sm font-medium">JavaScript</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <ReactSvg />
              <span className="mt-2 text-sm font-medium">React</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.2)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <Redux />
              <span className="mt-2 text-sm font-medium">Redux</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(4)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <MaterialUI />
              <span className="mt-2 text-sm font-medium">Material UI</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3.4)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <TailwindCSS />
              <span className="mt-2 text-sm font-medium">Tailwind CSS</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.8)}
              className="p-6 flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <img
                  src={node}
                  alt="Node"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
              />
              <span className="mt-2 text-sm font-medium">Node.js</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
              className="p-6 flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <img
                  src={express}
                  alt="Express"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
              />
              <span className="mt-2 text-sm font-medium">Express</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3.2)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <MongoDB />
              <span className="mt-2 text-sm font-medium">MongoDB</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3.2)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <img
                  src={socket}
                  alt="Express"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
              />
              <span className="mt-2 text-sm font-medium">Socket.IO</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3.6)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <Git />
              <span className="mt-2 text-sm font-medium">Git</span>
            </div>
          </motion.div>
          <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3.8)}
              className="p-6"
          >
            <div className="flex flex-col items-center">
              <Postman />
              <span className="mt-2 text-sm font-medium">Postman</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
  );
};

export default Stacks;
