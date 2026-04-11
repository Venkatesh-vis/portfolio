import ProfilePic from "../assets/Venkatesh.jpeg";
import { motion } from "framer-motion";
import { PROFILE_CONTENT } from "../constants";

const contentVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const Profile = () => {
  return (
    <div className="pb-4 1g:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8 min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
          <motion.img
              src={ProfilePic}
              alt="Profile"
              className="border border-stone-900 rounded-3xl object-cover aspect-square w-56 sm:w-72 md:w-80 lg:w-96"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-4xl font-semibold"
            >
              VENKATESH VISHWANADULA
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r•from-stone-300•to-stone-600 bg-clip-text text-2xl tracking-tight"
            >
              Full stack developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 py-6 text-xl leading-relaxed tracking-tighter"
            >
             {PROFILE_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
