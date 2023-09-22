// swiper imports

import { Swiper, SwiperSlide } from "swiper/react";

// image imports

import c152 from "../../assets/images/C152.webp";
import c172 from "../../assets/images/C172.webp";
import pa28 from "../../assets/images/PA28.webp";

// style import

import styles from "./Planes.module.css";

type Props = {};

const Planes = (props: Props) => {
  const imageData = [
    { id: "1", url: c152, planeModel: "C152" },
    { id: "2", url: c172, planeModel: "C172" },
    { id: "3", url: pa28, planeModel: "PA28" },
  ];

  return (
    <div className="max-w-[60rem] m-auto">
      <h1>Select your plane</h1>
      <div className="p-8 h-full max-w-[60rem] m-auto">
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true, type: "bullets" }}
          navigation
          spaceBetween={0}
        >
          {imageData.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.url} alt={`${image.planeModel} photo`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Planes;
