import LinkedIn from "./svgs/LinkedIn";
import DailyDev from "./svgs/DailyDev";
import Github from "./svgs/Github";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/venkatesh-vishwanadulaa-57a53318b/"
          target="_blank"
          rel="noopener noreferrer"
          area-label="Linked In"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/Venkatesh-vis"
          target="_blank"
          rel="noopener noreferrer"
          area-label="Linked In"
        >
          <Github />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
