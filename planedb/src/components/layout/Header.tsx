// layout and images

import MSFSLogo from "../../assets/images/msfsLogo.png";
import styles from "./Header.module.css";

// react=router

import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  function divAnimation(id: number) {
    const divs = document.querySelectorAll(".menuLayoutDiv");

    divs[id].classList.toggle("w-0");
    divs[id].classList.toggle("w-full");
  }

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "World e-AIP", path: "/eaip" },
    { name: "Plane performance data", path: "/planes" },
  ];

  return (
    <header className={`${styles.header} relative`}>
      <div className={"max-w-[60rem] m-auto space-y-6"}>
        <img className="max-w-xs w-full" src={MSFSLogo} alt="MSFS Logo" />
        <nav className="text-center m-auto bg-black text-white absolute left-0 bottom-0 w-full p-0.5">
          <ul className="flex gap-8 justify-center md:justify-around max-w-[60rem] m-auto italic">
            {menuItems.map((item, index) => (
              <li
                className="hover:cursor-pointer"
                onMouseEnter={() => divAnimation(index)}
                onMouseLeave={() => divAnimation(index)}
              >
                <Link to={item.path}>
                  {item.name}
                  <div
                    className={`w-0 h-1 ${styles.menuLayoutDiv} menuLayoutDiv`}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
