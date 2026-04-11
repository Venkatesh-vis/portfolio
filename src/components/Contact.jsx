import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import Gmail from "./svgs/Gmail";
import Phone from "./svgs/Phone";
import Location from "./svgs/Location";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center font-bold text-3xl"
      >
        Get in touch with me!
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center gap-2 justify-center my-4"
        >
          <Location />
          {CONTACT.address}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={`tel:${CONTACT.phoneNo}`}
          className="flex flex-row items-center gap-2 justify-center my-4"
        >
          <Phone />
          {CONTACT.phoneNo}
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="mailto:gopigskkumar@gmail.com"
          className="flex flex-row items-center gap-2 justify-center"
        >
          <Gmail />
          <span className="border-b">{CONTACT.email}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
