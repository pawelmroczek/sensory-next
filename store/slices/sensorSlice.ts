import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Measurement {
  timestamp: string;
  value: number;
  Id: string;
}

interface SensorData {
  data: Measurement[];
  error: string | null;
}

// Każdy typ czujnika ma 4 sensory z właściwymi ID
interface TemperatureSensors {
  "sensor-tmp-1": SensorData;
  "sensor-tmp-2": SensorData;
  "sensor-tmp-3": SensorData;
  "sensor-tmp-4": SensorData;
}

interface HumiditySensors {
  "sensor-hum-1": SensorData;
  "sensor-hum-2": SensorData;
  "sensor-hum-3": SensorData;
  "sensor-hum-4": SensorData;
}

interface SunlightSensors {
  "sensor-sun-1": SensorData;
  "sensor-sun-2": SensorData;
  "sensor-sun-3": SensorData;
  "sensor-sun-4": SensorData;
}

interface CO2Sensors {
  "sensor-co2-1": SensorData;
  "sensor-co2-2": SensorData;
  "sensor-co2-3": SensorData;
  "sensor-co2-4": SensorData;
}

interface SensorsState {
  initialLoading: boolean;
  temperature: TemperatureSensors;
  humidity: HumiditySensors;
  sunlight: SunlightSensors;
  co2: CO2Sensors;
}

const initialState: SensorsState = {
  initialLoading: true,
  temperature: {
    "sensor-tmp-1": { data: [], error: null },
    "sensor-tmp-2": { data: [], error: null },
    "sensor-tmp-3": { data: [], error: null },
    "sensor-tmp-4": { data: [], error: null },
  },
  humidity: {
    "sensor-hum-1": { data: [], error: null },
    "sensor-hum-2": { data: [], error: null },
    "sensor-hum-3": { data: [], error: null },
    "sensor-hum-4": { data: [], error: null },
  },
  sunlight: {
    "sensor-sun-1": { data: [], error: null },
    "sensor-sun-2": { data: [], error: null },
    "sensor-sun-3": { data: [], error: null },
    "sensor-sun-4": { data: [], error: null },
  },
  co2: {
    "sensor-co2-1": { data: [], error: null },
    "sensor-co2-2": { data: [], error: null },
    "sensor-co2-3": { data: [], error: null },
    "sensor-co2-4": { data: [], error: null },
  },
};

// Typy dla ID sensorów
export type SensorId =
  | keyof TemperatureSensors
  | keyof HumiditySensors
  | keyof SunlightSensors
  | keyof CO2Sensors;

const sensorSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {
    // Dodaje dane używając bezpośrednio ID sensora (np. "sensor-tmp-1")
    addSensorDataById: (
      state,
      action: PayloadAction<{ sensorId: SensorId; data: Measurement[] }>
    ) => {
      const { sensorId, data } = action.payload;
      // Automatycznie wykryj typ na podstawie ID
      if (sensorId.startsWith("sensor-tmp-")) {
        (state.temperature as any)[sensorId].data.push(...data);
      } else if (sensorId.startsWith("sensor-hum-")) {
        (state.humidity as any)[sensorId].data.push(...data);
      } else if (sensorId.startsWith("sensor-sun-")) {
        (state.sunlight as any)[sensorId].data.push(...data);
      } else if (sensorId.startsWith("sensor-co2-")) {
        (state.co2 as any)[sensorId].data.push(...data);
      }
    },
    // Ustawia globalny stan ładowania początkowego
    setInitialLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.initialLoading = action.payload;
    },
    // Ustawia błąd używając ID sensora
    setErrorById: (
      state,
      action: PayloadAction<{ sensorId: SensorId; error: string | null }>
    ) => {
      const { sensorId, error } = action.payload;
      if (sensorId.startsWith("sensor-tmp-")) {
        (state.temperature as any)[sensorId].error = error;
      } else if (sensorId.startsWith("sensor-hum-")) {
        (state.humidity as any)[sensorId].error = error;
      } else if (sensorId.startsWith("sensor-sun-")) {
        (state.sunlight as any)[sensorId].error = error;
      } else if (sensorId.startsWith("sensor-co2-")) {
        (state.co2 as any)[sensorId].error = error;
      }
    },
  },
});

export const { addSensorDataById, setInitialLoading, setErrorById } =
  sensorSlice.actions;

export default sensorSlice.reducer;
