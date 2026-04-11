import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Android from "./svgs/Android";
import Apple from "./svgs/Apple";
import Web from "./svgs/Web";
import {useState} from "react";

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (img) => {
        setSelectedImage(img);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full cursor-pointer lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded"
                width={250}
                height={250}
                onClick={() => openImage(project.image)}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 text-2xl font-semibold inline-flex">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="mb-4">
                {project.isReleased && project.androidUrl.length > 0 ? (
                  <a
                    href={project.androidUrl}
                    className="mr-2 font-semibold inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={project.projectName}
                  >
                    <Android />
                    <span className="ml-2 mr-2 text-stone-400">Android</span>|
                  </a>
                ) : (
                  <></>
                )}
                {project.isReleased && project.iosUrl.length > 0 ? (
                  <a
                    href={project.iosUrl}
                    className="mr-2 font-semibold inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={project.projectName}
                  >
                    <Apple />
                    <span className="ml-2 mr-2 text-stone-400">iOS</span>|
                  </a>
                ) : (
                  <></>
                )}
                {project.isReleased && project.webUrl.length > 0 ? (
                  <a
                    href={project.webUrl}
                    className="mr-2 font-semibold inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={project.projectName}
                  >
                    <Web color="#ffffff" />
                    <span className="ml-2 mr-2 text-stone-400">LIVE</span>
                    {project.companyUrl.length > 0 ? "|" : ""}
                  </a>
                ) : (
                  <></>
                )}
                {project.companyUrl.length > 0 ? (
                  <a
                    href={project.companyUrl}
                    className="mr-2 font-semibold inline-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={project.projectName}
                  >
                    <Web color="#ffffff" />
                    <span className="ml-2 text-stone-400">
                      {project.projectName}
                    </span>
                  </a>
                ) : (
                  <></>
                )}
              </div>
              {project.technologies.map((technology, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 p-2 text-sm font-medium text-stone-400 inline-flex flex-wrap"
                  key={index}
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
        {selectedImage && (
            <div
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                onClick={closeImage}
            >
                <button
                    className="absolute cursor-pointer top-5 right-5 text-white text-3xl font-bold"
                    onClick={closeImage}
                >
                    ×
                </button>

                <img
                    src={selectedImage}
                    alt="Full View"
                    className="max-w-[95%] max-h-[90vh] object-contain rounded"
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
                />
            </div>
        )}
    </div>
  );
};

export default Projects;
