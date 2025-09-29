import type { Meta, StoryObj } from "@storybook/react-vite";
import { Timeline } from "../components/Timeline";
import type { PhiloAction } from "../types/PhiloAction";
import type { TimeRange } from "../types/PhiloLogProcessingResult";

const baseTime = Date.UTC(2024, 0, 1, 12, 0, 0);

const sampleActions: PhiloAction[] = [
  {
    philoNum: 0,
    type: "eat",
    startTime: baseTime,
    endTime: baseTime + 100,
  },
  {
    philoNum: 0,
    type: "think",
    startTime: baseTime + 100,
    endTime: baseTime + 200,
  },
  {
    philoNum: 0,
    type: "sleep",
    startTime: baseTime + 200,
    endTime: baseTime + 300,
  },
  {
    philoNum: 0,
    type: "eat",
    startTime: baseTime + 300,
    endTime: baseTime + 400,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime + 100,
    endTime: baseTime + 200,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: baseTime + 200,
    endTime: baseTime + 300,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 300,
    endTime: baseTime + 400,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime + 200,
    endTime: baseTime + 300,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: baseTime + 300,
    endTime: baseTime + 400,
  },
];

const sampleTimeRange: TimeRange = {
  min: baseTime,
  max: baseTime + 400,
};

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const SampleData: Story = {
  args: {
    actions: sampleActions,
    timeRange: sampleTimeRange,
  },
};
