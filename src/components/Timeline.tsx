import { useEffect, useState } from "react";
import Chart, { GoogleChartControlProp } from "react-google-charts";
import { TimeRange } from "../types/PhiloLogProcessingResult";
import { PhiloAction } from "../types/PhiloAction";
import { useWindowSize } from "../utils/useWindowSize";

const header = [
  { type: "string", id: "Index" },
  { type: "string", id: "Action" },
  { type: "string", role: "style" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
  { type: "number", id: "Scatter" },
];

const style = "stroke-width: 0.5; stroke-color: #000000; stroke-opacity: 0.55";

const convertData = (actions: PhiloAction[]) => {
  const data = [
    header,
    ...actions.map((action) => [
      action.philoNum.toString(),
      action.type,
      style,
      new Date(action.startTime),
      new Date(action.endTime),
      action.philoNum * -1,
    ]),
  ];
  return data;
};

const countPhilos = (actions: PhiloAction[]): number => {
  const uniquePhilos = actions.reduce((acc, curr): number[] => {
    if (!acc.includes(curr.philoNum)) {
      return [...acc, curr.philoNum];
    }
    return acc;
  }, [] as number[]);
  return uniquePhilos.length;
};

const generateChartControlProps = (
  timeRange: TimeRange
): GoogleChartControlProp => ({
  controlType: "ChartRangeFilter",
  options: {
    filterColumnIndex: 3,
    ui: {
      chartType: "ScatterChart",
      chartOptions: {
        width: "100%",
        height: 120,
        chartArea: {
          width: "80%",
          height: "50%",
          backgroundColor: "#eee",
        },
        hAxis: {
          baselineColor: "none",
          format: "mm:ss.SSS",
          viewWindow: {
            min: new Date(timeRange.min),
            max: new Date(timeRange.max),
          },
        },
        series: {
          0: { dataOpacity: 0.9 },
        },
      },
      chartView: {
        columns: [3, 5],
      },
    },
  },
  controlWrapperParams: {
    state: {
      range: {
        start: new Date(timeRange.min),
        end: new Date(timeRange.max),
      },
    },
  },
});

type Props = {
  actions: PhiloAction[];
  timeRange: TimeRange;
};

export const Timeline = ({ actions, timeRange }: Props) => {
  const [controls, setControls] = useState<GoogleChartControlProp[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const { width } = useWindowSize();

  const philoNum = countPhilos(actions);

  // https://github.com/rakannimer/react-google-charts/issues/209
  useEffect(() => {
    if (width) {
      setControls([generateChartControlProps(timeRange)]);
    }
  }, [width, timeRange]);

  useEffect(() => {
    setData(convertData(actions));
  }, [actions]);

  return (
    <Chart
      chartType="Timeline"
      width="100%"
      height={philoNum * 41 + 130}
      data={data}
      options={{
        colors: ["#fbb4ae", "#b3cde3", "#ccebc5"],
        avoidOverlappingGridLines: false,
      }}
      chartWrapperParams={{
        view: {
          columns: [0, 1, 2, 3, 4],
        },
      }}
      chartPackages={["controls"]}
      controls={controls}
    />
  );
};
