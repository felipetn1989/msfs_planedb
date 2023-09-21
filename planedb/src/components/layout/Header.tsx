// layout and images

import MSFSLogo from "../../assets/images/msfsLogo.png";
import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  function divAnimation(id: number) {
    const divs = document.querySelectorAll(".menuLayoutDiv");

    divs[id].classList.toggle("w-0");
    divs[id].classList.toggle("w-full");
  }

  return (
    <header className={`${styles.header} relative`}>
      <div className={"max-w-[60rem] m-auto space-y-6"}>
        <img className="max-w-xs w-full" src={MSFSLogo} alt="MSFS Logo" />
        <nav className="text-center m-auto bg-black text-white absolute left-0 bottom-0 w-full p-0.5">
          <ul className="flex gap-8 justify-center lg:justify-around max-w-[60rem] m-auto italic">
            <li
              className="hover:cursor-pointer"
              onMouseEnter={() => divAnimation(0)}
              onMouseLeave={() => divAnimation(0)}
            >
              World e-AIP
              <div
                className={`w-0 h-1 ${styles.menuLayoutDiv} menuLayoutDiv`}
              ></div>
            </li>
            <li
              className="hover:cursor-pointer"
              onMouseEnter={() => divAnimation(1)}
              onMouseLeave={() => divAnimation(1)}
            >
              Plane performance Data
              <div
                className={`w-0 h-1 ${styles.menuLayoutDiv} menuLayoutDiv`}
              ></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
