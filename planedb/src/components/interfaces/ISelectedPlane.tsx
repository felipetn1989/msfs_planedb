export interface ISelectedPlane {
  id: string;
  url: string;
  planeModel: string;
  planeName: string;
  poh?: string;
  "Airspeed Limitations"?: string;
  "Takeoff Distance"?: string;
  "Rate of Climb"?: string;
  "Climb Chart"?: string;
  "Cruise Performance"?: string;
  "Landing Distance"?: string;
}
