import { SensorType } from "@/types";

export const colorBgMap = {
  temperature: "bg-red-200",
  humidity: "bg-blue-200",
  sunlight: "bg-yellow-200",
  co2: "bg-green-200",
};

export const getSensorPrefix = (sensorType: SensorType) => {
  const prefixMap = {
    temperature: "tmp",
    humidity: "hum",
    sunlight: "sun",
    co2: "co2",
  };
  return prefixMap[sensorType];
};
