import ReactSvg from "./svgs/React";
import express from "../assets/icons8-express-js-50.png";
import node from "../assets/node-js-svgrepo-com.svg";
import socket from "../assets/socket.png";
import razorpay from "../assets/razorpay.png";
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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const Stacks = () => {
  const stacks = [
    { name: "HTML", component: <Html /> },
    { name: "CSS", component: <Css /> },
    { name: "JavaScript", component: <JavaScript /> },
    { name: "React", component: <ReactSvg /> },
    { name: "Redux", component: <Redux /> },
    { name: "Material UI", component: <MaterialUI /> },
    { name: "Tailwind CSS", component: <TailwindCSS /> },
    {name: "Node.js", component: (<img src={node} alt="Node" className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"/>),},
    {name: "Express", component: (<img src={express} alt="Express" className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"/>),},
    {name: "Razorpay", component: (<img src={razorpay} alt="Express" className="w-20 sm:w-24 md:w-28 lg:w-50 h-auto"/>),},
    { name: "MongoDB", component: <MongoDB /> },
    {name: "Socket.IO", component: (<img src={socket} alt="Socket" className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto"/>),},
    { name: "Git", component: <Git /> },
    { name: "Postman", component: <Postman /> },
  ];

  return (
      <div className="pb-24">
        {/* Heading */}
        <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="m-20 text-center text-4xl font-bold"
        >
          Stacks
        </motion.h2>

        {/* Container */}
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 place-items-center"
        >
          {stacks.map((stack, index) => (
              <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{scale: 1.2, transition: { duration: 0.3 }}}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <motion.div >
                    {stack.component}
                  </motion.div>
                  <span className="mt-2 text-sm font-medium">
                {stack.name}
              </span>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
  );
};

export default Stacks;