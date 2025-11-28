import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSensorPrefix } from "@/lib/sensorTypes/utils";
import { selectAllSensorsOfType, useAppSelector } from "@/store/hooks";
import { SensorType } from "@/types";

type TableComponentProps = {
  sensorType: SensorType;
};

const TableComponent = ({ sensorType }: TableComponentProps) => {
  const sensors = useAppSelector((state) =>
    selectAllSensorsOfType(state, sensorType)
  );

  const prefix = getSensorPrefix(sensorType);

  return (
    <div>
      {" "}
      <Tabs defaultValue="tables" className="w-full">
        <TabsList className="w-200">
          <TabsTrigger className="px-6" value="tables">
            Wszystkie
          </TabsTrigger>
          {[1, 2, 3, 4].map((sensorNum) => (
            <TabsTrigger
              key={sensorNum}
              className="px-6"
              value={`sensor-${prefix}-${sensorNum}`}
            >
              Sensor {sensorNum}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="tables">
          <div>Table for sensor type: {sensorType}</div>
        </TabsContent>
        <TabsContent value="chart">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TableComponent;
