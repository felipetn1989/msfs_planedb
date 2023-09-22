// swiper imports

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// image imports

import c152 from "../../assets/images/C152.webp";
import c172 from "../../assets/images/C172.webp";
import pa28 from "../../assets/images/PA28.webp";

// style import

import planeStyles from "./Planes.module.css";

type Props = {};

const Planes = (props: Props) => {
  const imageData = [
    { id: "1", url: c152, planeModel: "C152", planeName: "Cessna 152" },
    { id: "2", url: c172, planeModel: "C172", planeName: "Cessna 172" },
    { id: "3", url: pa28, planeModel: "PA28", planeName: "Piper Arrow III" },
  ];

  return (
    <main className={`${planeStyles.main} p-8`}>
      <div className="max-w-[60rem] m-auto space-y-10">
        <h1 className="text-white uppercase border border-white text-3xl p-2 w-fit">Select your plane</h1>
        <div className="h-full max-w-[60rem] m-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination
            slidesPerView={1}
          >
            {imageData.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  src={image.url}
                  alt={`${image.planeModel} photo`}
                  className="w-[100vw] lg:h-[35rem] object-cover"
                />
                <div className="absolute bottom-8 left-8 text-white bg-black uppercase border border-white p-2">
                  {image.planeName}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Planes;
