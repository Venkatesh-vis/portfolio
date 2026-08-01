import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Android from "./svgs/Android";
import Apple from "./svgs/Apple";
import Web from "./svgs/Web";

const ProjectCard = ({
  project,
  index,
  totalProjects,
  openImage,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Previous cards shrink slightly as the next one arrives
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94 - index * 0.01]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <div
      ref={ref}
      className="sticky top-24 flex min-h-screen items-center justify-center"
      style={{
        zIndex: totalProjects - index,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        whileHover={{
          y: -8,
          transition: {
            duration: 0.25,
          },
        }}
        className="w-full max-w-7xl rounded-3xl border border-stone-800 bg-[#111111]/90 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,.45)]"
      >
        <div className="flex flex-col gap-10 p-8 lg:flex-row lg:p-12">
          {/* IMAGE */}
          <div className="flex w-full justify-center lg:w-1/3">
            <motion.img
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.25,
              }}
              src={project.image}
              alt={project.title}
              onClick={() => openImage(project.image)}
              className="cursor-pointer rounded-2xl shadow-lg"
              width={320}
              height={320}
            />
          </div>

          {/* CONTENT */}
          <div className="flex w-full flex-col lg:w-2/3">
            <motion.h3
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
              }}
              className="mb-4 text-3xl font-bold"
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="mb-6 leading-8 text-stone-400"
            >
              {project.description}
            </motion.p>

            {/* LINKS */}
            <div className="mb-6 flex flex-wrap items-center gap-5">
              {project.isReleased && project.androidUrl && (
                <a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center transition hover:text-white"
                >
                  <Android />
                  <span className="ml-2">Android</span>
                </a>
              )}

              {project.isReleased && project.iosUrl && (
                <a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center transition hover:text-white"
                >
                  <Apple />
                  <span className="ml-2">iOS</span>
                </a>
              )}

              {project.isReleased && project.webUrl && (
                <a
                  href={project.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center transition hover:text-white"
                >
                  <Web color="#fff" />
                  <span className="ml-2">Live Demo</span>
                </a>
              )}

              {project.companyUrl && (
                <a
                  href={project.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center transition hover:text-white"
                >
                  <Web color="#fff" />
                  <span className="ml-2">{project.projectName}</span>
                </a>
              )}
            </div>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <motion.span
                  key={technology}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-300"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;