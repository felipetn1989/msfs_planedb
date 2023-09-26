// swiper imports

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// style import

import styles from "./Planes.module.css";

// react-router-dom

import { useState } from "react";
import PlaneData from "../layout/PlaneData";
import { ISelectedPlane } from "../interfaces/ISelectedPlane";

type Props = {};

const Planes = (props: Props) => {
  const [showPlaneInfo, setShowPlaneInfo] = useState<boolean>(false);
  const [selectedPlane, setSelectedPlane] = useState<ISelectedPlane>();

  function handlePlaneSelection(id: string) {
    setShowPlaneInfo(true);

    setSelectedPlane(imageData.find((element) => element.id === id));
  }

  const imageData = [
    {
      id: "1",
      url: "../../../public/images/C152.webp",
      planeModel: "C152",
      planeName: "Cessna 152",
      poh: "https://args.com.br/arquivos/biblioteca/1/web/c152-cessna-152-manual.pdf",
      "Airspeed Limitations":
        "../../../public/images/C152/airspeedLimitations.png",
      "Takeoff Distance": "../../../public/images/C152/takeoffDistance.png",
      "Rate of Climb": "../../../public/images/C152/rateOfClimb.png",
      "Climb Chart": "../../../public/images/C152/climbChart.png",
      "Cruise Performance": "../../../public/images/C152/cruisePerformance.png",
      "Landing Distance": "../../../public/images/C152/landingDistance.png",
    },
    {
      id: "2",
      url: "../../../public/images/C172.webp",
      planeModel: "C172",
      planeName: "Cessna 172",
    },
    {
      id: "3",
      url: "../../../public/images/PA28.webp",
      planeModel: "PA28",
      planeName: "Piper Arrow III",
    },
  ];

  return (
    <main className={`${styles.planesMain} p-8`}>
      <div className="max-w-[60rem] m-auto">
        {!showPlaneInfo && (
          <>
            <h1 className="text-white uppercase border border-white text-3xl p-2 w-fit">
              Select your plane
            </h1>
            <div className="h-full max-w-[60rem] m-auto mt-8">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination
                slidesPerView={1}
              >
                {imageData.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="hover:cursor-pointer">
                      <img
                        src={image.url}
                        alt={`${image.planeModel} photo`}
                        className="w-[100vw] lg:h-[35rem] object-cover"
                      />
                      <div
                        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-5xl lg:text-7xl uppercase text-center ${styles.caption}`}
                        onClick={() => handlePlaneSelection(image.id)}
                      >
                        {image.planeName}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
        {showPlaneInfo && (
          <div className="text-white w-full">
            <div className="flex justify-between border-b pb-8">
              <h2 className="uppercase border text-3xl p-2 w-fit">
                {selectedPlane!.planeName}
              </h2>
              <button
                className="uppercase border text-3xl p-2 w-fit "
                onClick={() => setShowPlaneInfo(false)}
              >
                Back
              </button>
            </div>
            <div className="border-b py-8">
              <button className="uppercase border border-white text-3xl p-2 w-fit">
                <a href={selectedPlane!.poh} target="blank">
                  Pilot's Operating Handbook
                </a>
              </button>
            </div>
            <PlaneData selectedPlane={selectedPlane} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Planes;
