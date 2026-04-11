import {EXPERIENCES} from "../constants";
import {motion} from "framer-motion";
import OpenLink from "./svgs/OpenLink";

const Experience = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-20 text-center text-4xl font-bold"
            >
                Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, x: -80}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        className="mb-14 flex flex-wrap lg:justify-center"
                    >
                        {/* Left (Year) */}
                        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                            <p className="text-sm text-stone-400">{exp.year}</p>
                        </div>

                        {/* Right */}
                        <div className="w-full lg:w-3/4 max-w-5xl">
                            <h3 className="mb-6 text-lg font-semibold">
                                {exp.role} -{" "}
                                <span className="text-stone-500 text-sm">
            {exp.company}
          </span>
                            </h3>

                            {/* Task Cards */}
                            <div className="grid gap-5">
                                {exp.tasks.map((task, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{opacity: 0, y: 25}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.4, delay: i * 0.08}}
                                        className="rounded-xl border cursor-pointer border-stone-800 bg-stone-900 p-5 hover:border-stone-600 transition"
                                    >
                                        <h4 className="font-medium text-base mb-2">
                                            {task.title}
                                        </h4>

                                        <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                                            {task.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {task.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="rounded bg-black px-2 py-1 text-xs text-stone-400"
                                                >
                    {tech}
                  </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
