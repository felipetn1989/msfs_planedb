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

type Props = {};

const Planes = (props: Props) => {
  const [showPlaneInfo, setShowPlaneInfo] = useState<boolean>(false);
  const [selectedPlane, setSelectedPlane] = useState<any>();
  const [selectedChart, setSelectedChart] = useState<number | null>(null);

  const dataCategories = [
    "Airspeed Limitations",
    "Takeoff Distance",
    "Rate of Climb",
    "Climb Chart",
    "Cruise Perfomance",
    "Landing Distance",
  ];

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
      vSpeeds: "../../../public/images/C152/airspeedLimitations.png",
      takeoffDistance: "../../../public/images/C152/takeoffDistance.png",
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
                        className="absolute bottom-8 left-8 text-white bg-black uppercase border border-white p-2"
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
          <>
            <div className="flex justify-between border-b border-white pb-8">
              <h2 className="text-white uppercase border border-white text-3xl p-2 w-fit">
                {selectedPlane.planeName}
              </h2>
              <button
                className="text-white uppercase border border-white text-3xl p-2 w-fit"
                onClick={() => setShowPlaneInfo(false)}
              >
                Back
              </button>
            </div>
            <div className="border-b py-8 border-white">
              <button className="text-white uppercase border border-white text-3xl p-2 w-fit">
                <a href={selectedPlane.poh} target="blank">
                  Pilot's Operating Handbook
                </a>
              </button>
            </div>
            <div className="border-b border-white py-8">
              <div className="grid grid-cols-2 gap-8">
                {dataCategories.map((category, index) => (
                  <button
                    className={`text-white uppercase border border-white text-3xl p-2 w-fit ${
                      index % 2 !== 0 ? "place-self-end" : ""
                    }`}
                    onClick={() =>
                      selectedChart === index + 1
                        ? setSelectedChart(null)
                        : setSelectedChart(index + 1)
                    }
                  >
                    {selectedChart === index + 1 ? "Close" : `${category}`}
                  </button>
                ))}
              </div>
              {selectedChart === 1 && (
                <img
                  src={selectedPlane.vSpeeds}
                  alt="Airspeed Limitations"
                  className="mt-8"
                />
              )}
              {selectedChart === 2 && (
                <img
                  src={selectedPlane.takeoffDistance}
                  alt="Takeoff Distance"
                  className="mt-8"
                />
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Planes;
