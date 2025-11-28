"use client";
import AverageValue from "@/components/features/sensors/AverageValue";
import { loadInitialData } from "@/lib/loadInitialData";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadInitialData(dispatch);
  }, [dispatch]);

  return (
    <div className="mx-10 font-bold">
      <h1>Dashboard</h1>
      <div className="mt-4 grid grid-cols-2 gap-4 ">
        <AverageValue sensorType={"co2"} />
        <AverageValue sensorType={"humidity"} />
        <AverageValue sensorType={"sunlight"} />
        <AverageValue sensorType={"temperature"} />
      </div>
    </div>
  );
}
