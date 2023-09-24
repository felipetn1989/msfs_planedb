// react-imports

import { useState } from "react";

type Props = {
  selectedPlane: any;
};

const PlaneData = ({ selectedPlane }: Props) => {
  const [selectedChart, setSelectedChart] = useState<number | null>(null);

  const dataCategories = [
    "Airspeed Limitations",
    "Takeoff Distance",
    "Rate of Climb",
    "Climb Chart",
    "Cruise Performance",
    "Landing Distance",
  ];

  return (
    <div className="border-b py-8">
      <div className="grid gap-8">
        {dataCategories.map((category, index) => (
          <div>
            <div className="flex flex-col">
              <button
                className={`uppercase border text-3xl p-2 w-fit`}
                onClick={() =>
                  selectedChart === index + 1
                    ? setSelectedChart(null)
                    : setSelectedChart(index + 1)
                }
              >
                {selectedChart === index + 1 ? "Close" : `${category}`}
              </button>
            </div>
            <div>
              {selectedChart === index + 1 && (
                <img
                  src={selectedPlane[category]}
                  alt={category}
                  className="mt-8 m-auto"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaneData;
