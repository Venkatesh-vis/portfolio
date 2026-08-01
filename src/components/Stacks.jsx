import ReactSvg from "./svgs/React";
import express from "../assets/icons8-express-js-50.png";
import node from "../assets/node-js-svgrepo-com.svg";
import socket from "../assets/socket.png";
import razorpay from "../assets/razorpay.png";
import ts from "../assets/typescript.svg";
import mysql from "../assets/mysql.svg";
import aws from "../assets/aws.svg";
import docker from "../assets/docker.svg";
import githubactions from "../assets/githubactions.svg";
import jest from "../assets/jest.svg";
import nginx from "../assets/nginx.svg";
import postgresql from "../assets/postgresql.svg";
import rtl from "../assets/react-testing-library.svg";
import redis from "../assets/redis.svg";
import sequelize from "../assets/sequelize.svg";
import Redux from "./svgs/Redux";
import TailwindCSS from "./svgs/Tailwind";
import { motion } from "framer-motion";
import JavaScript from "./svgs/JavaScript";
import MongoDB from "./svgs/MongoDB";
import Html from "./svgs/Html";
import Css from "./svgs/Css";
import Git from "./svgs/Git";
import Postman from "./svgs/Postman";
import MaterialUI from "./svgs/MaterialUI";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const iconClass = "w-14 sm:w-16 md:w-18 lg:w-20 h-auto";

const Stacks = () => {
  const stacks = [
    // Frontend
    { name: "HTML", component: <Html /> },
    { name: "CSS", component: <Css /> },
    { name: "JavaScript", component: <JavaScript /> },
    {
      name: "TypeScript",
      component: <img src={ts} alt="TypeScript" className={iconClass} />,
    },
    { name: "React", component: <ReactSvg /> },
    { name: "Redux", component: <Redux /> },
    { name: "Material UI", component: <MaterialUI /> },
    { name: "Tailwind CSS", component: <TailwindCSS /> },

    // Backend
    {
      name: "Node.js",
      component: <img src={node} alt="Node.js" className={iconClass} />,
    },
    {
      name: "Express.js",
      component: <img src={express} alt="Express.js" className={iconClass} />,
    },
    {
      name: "Socket.IO",
      component: <img src={socket} alt="Socket.IO" className={iconClass} />,
    },
    {
      name: "Sequelize",
      component: <img src={sequelize} alt="Sequelize" className={iconClass} />,
    },

    // Databases
    { name: "MongoDB", component: <MongoDB /> },
    {
      name: "MySQL",
      component: <img src={mysql} alt="MySQL" className={iconClass} />,
    },
    {
      name: "PostgreSQL",
      component: (
        <img src={postgresql} alt="PostgreSQL" className={iconClass} />
      ),
    },
    {
      name: "Redis",
      component: <img src={redis} alt="Redis" className={iconClass} />,
    },

    // Cloud & DevOps
    {
      name: "AWS",
      component: <img src={aws} alt="AWS" className={iconClass} />,
    },
    {
      name: "Docker",
      component: <img src={docker} alt="Docker" className={iconClass} />,
    },
    {
      name: "NGINX",
      component: <img src={nginx} alt="NGINX" className={iconClass} />,
    },
    {
      name: "GitHub Actions",
      component: (
        <img
          src={githubactions}
          alt="GitHub Actions"
          className={iconClass}
        />
      ),
    },

    // Testing
    {
      name: "Jest",
      component: <img src={jest} alt="Jest" className={iconClass} />,
    },
    {
      name: "React Testing Library",
      component: (
        <img
          src={rtl}
          alt="React Testing Library"
          className={iconClass}
        />
      ),
    },

    // Tools
    { name: "Git", component: <Git /> },
    { name: "Postman", component: <Postman /> },
    {
      name: "Razorpay",
      component: (
        <img
          src={razorpay}
          alt="Razorpay"
          className="w-14 sm:w-16 md:w-18 lg:w-24 h-auto"
        />
      ),
    },
  ];

  return (
    <section className="pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-bold"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-y-8 place-items-center"
      >
        {stacks.map((stack, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
            }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="w-24 h-24 flex items-center justify-center">
              {stack.component}
            </div>

            <span className="text-xs sm:text-sm text-center font-medium">
              {stack.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stacks;