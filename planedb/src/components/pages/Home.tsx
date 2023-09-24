// styles

import LinkButton from "../layout/LinkButton";
import styles from "./Home.module.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className={`${styles.homeMain} p-8 flex flex-col items-center homePage max-w-[100rem] m-auto`}>
      <div className="max-w-[60rem] h-full text-white m-auto space-y-4">
        <h1 className="text-left font-bold text-5xl">
          MSFS Nav and Plane database
        </h1>
        <p className="max-w-[25rem]">
          Search through our databate to look for a specific country e-AIP
          website or the plane's performance data for your flight
        </p>
        <div className="space-x-4">
          <LinkButton to="/eaip" btnText="e-AIP's" />
          <LinkButton to="/planes" btnText="Planes" />
        </div>
      </div>
    </main>
  );
};

export default Home;
