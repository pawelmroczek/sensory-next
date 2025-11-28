import { co2 } from "@/assets/co2";
import { temperature } from "@/assets/temperature";
import { humidity } from "@/assets/humidity";
import { sunlight } from "@/assets/sunlight";
import type { SensorDataEntry } from "@/assets/types";
import type { SensorId } from "@/store/slices/sensorSlice";
import { addSensorDataById, setInitialLoading } from "@/store/slices/sensorSlice";
import type { AppDispatch } from "@/store/store";

export const loadInitialData = (dispatch: AppDispatch) => {
  // Zacznij od ustawienia loading na true
  dispatch(setInitialLoading(true));

  try {
    // Grupuj dane według sensorId
    const allData = [...co2, ...temperature, ...humidity, ...sunlight];
    
    const groupedData: Record<string, SensorDataEntry[]> = {};

    
    
    allData.forEach((entry) => {
      if (!groupedData[entry.sensorId]) {
        groupedData[entry.sensorId] = [];
      }
      groupedData[entry.sensorId].push(entry);
    });


    // Dodaj dane dla każdego sensora
    Object.entries(groupedData).forEach(([sensorId, entries]) => {
      const measurements = entries.map((entry) => ({
        timestamp: entry.sourceTimestamp,
        value: entry.value,
        Id: entry.id,
      }));

      dispatch(addSensorDataById({
        sensorId: sensorId as SensorId,
        data: measurements,
      }));
    });

    // Zakończ loading
    dispatch(setInitialLoading(false));
  } catch (error) {
    console.error("Błąd podczas ładowania danych:", error);
    dispatch(setInitialLoading(false));
  }
};