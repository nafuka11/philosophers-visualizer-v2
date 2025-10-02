import { PhiloAction } from "../../types/PhiloAction";
import { TimeRange } from "../../types/PhiloLogProcessingResult";

const baseTime = Date.UTC(2024, 0, 1, 12, 0, 0);

export const standardCaseActions: PhiloAction[] = [
  {
    philoNum: 1,
    type: "eat",
    startTime: 1759368877031,
    endTime: 1759368877231,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: 1759368877231,
    endTime: 1759368877431,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: 1759368877431,
    endTime: 1759368877631,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: 1759368877631,
    endTime: 1759368877831,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: 1759368877831,
    endTime: 1759368878031,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: 1759368878031,
    endTime: 1759368878031,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: 1759368878031,
    endTime: 1759368878231,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: 1759368878231,
    endTime: 1759368878431,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: 1759368878431,
    endTime: 1759368878431,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: 1759368878431,
    endTime: 1759368878631,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: 1759368878631,
    endTime: 1759368878831,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: 1759368878831,
    endTime: 1759368878831,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: 1759368878831,
    endTime: 1759368879031,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: 1759368879031,
    endTime: 1759368879231,
  },
  {
    philoNum: 1,
    type: "think",
    startTime: 1759368879231,
    endTime: 1759368879231,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: 1759368877031,
    endTime: 1759368877231,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: 1759368877231,
    endTime: 1759368877431,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: 1759368877431,
    endTime: 1759368877431,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: 1759368877431,
    endTime: 1759368877631,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: 1759368877631,
    endTime: 1759368877831,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: 1759368877831,
    endTime: 1759368877831,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: 1759368877831,
    endTime: 1759368878031,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: 1759368878031,
    endTime: 1759368878231,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: 1759368878231,
    endTime: 1759368878431,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: 1759368878431,
    endTime: 1759368878631,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: 1759368878631,
    endTime: 1759368878831,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: 1759368878831,
    endTime: 1759368879031,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: 1759368879031,
    endTime: 1759368879231,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: 1759368877231,
    endTime: 1759368877431,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: 1759368877431,
    endTime: 1759368877631,
  },
  {
    philoNum: 3,
    type: "think",
    startTime: 1759368877631,
    endTime: 1759368877831,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: 1759368877831,
    endTime: 1759368878031,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: 1759368878031,
    endTime: 1759368878231,
  },
  {
    philoNum: 3,
    type: "think",
    startTime: 1759368878231,
    endTime: 1759368878231,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: 1759368878231,
    endTime: 1759368878431,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: 1759368878431,
    endTime: 1759368878631,
  },
  {
    philoNum: 3,
    type: "think",
    startTime: 1759368878631,
    endTime: 1759368878831,
  },
  {
    philoNum: 3,
    type: "eat",
    startTime: 1759368878831,
    endTime: 1759368879031,
  },
  {
    philoNum: 3,
    type: "sleep",
    startTime: 1759368879031,
    endTime: 1759368879231,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: 1759368877231,
    endTime: 1759368877431,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: 1759368877431,
    endTime: 1759368877631,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: 1759368877631,
    endTime: 1759368877631,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: 1759368877631,
    endTime: 1759368877831,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: 1759368877831,
    endTime: 1759368878031,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: 1759368878031,
    endTime: 1759368878231,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: 1759368878231,
    endTime: 1759368878431,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: 1759368878431,
    endTime: 1759368878631,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: 1759368878631,
    endTime: 1759368878631,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: 1759368878631,
    endTime: 1759368878831,
  },
  {
    philoNum: 4,
    type: "sleep",
    startTime: 1759368878831,
    endTime: 1759368879031,
  },
  {
    philoNum: 4,
    type: "think",
    startTime: 1759368879031,
    endTime: 1759368879031,
  },
  {
    philoNum: 4,
    type: "eat",
    startTime: 1759368879031,
    endTime: 1759368879231,
  },
  {
    philoNum: 5,
    type: "eat",
    startTime: 1759368877431,
    endTime: 1759368877631,
  },
  {
    philoNum: 5,
    type: "sleep",
    startTime: 1759368877631,
    endTime: 1759368877831,
  },
  {
    philoNum: 5,
    type: "think",
    startTime: 1759368877831,
    endTime: 1759368878031,
  },
  {
    philoNum: 5,
    type: "eat",
    startTime: 1759368878031,
    endTime: 1759368878231,
  },
  {
    philoNum: 5,
    type: "sleep",
    startTime: 1759368878231,
    endTime: 1759368878431,
  },
  {
    philoNum: 5,
    type: "think",
    startTime: 1759368878431,
    endTime: 1759368878631,
  },
  {
    philoNum: 5,
    type: "eat",
    startTime: 1759368878631,
    endTime: 1759368878831,
  },
  {
    philoNum: 5,
    type: "sleep",
    startTime: 1759368878831,
    endTime: 1759368879031,
  },
  {
    philoNum: 5,
    type: "think",
    startTime: 1759368879031,
    endTime: 1759368879231,
  },
];

export const standardCaseTimeRange: TimeRange = {
  min: 1759368877031,
  max: 1759368879231,
};

const philoCountForLargeDataset = 200;
export const manyPhilosopherActions: PhiloAction[] = Array.from(
  { length: philoCountForLargeDataset },
  (_, index) => {
    const start = baseTime + index * 10;
    const actionType =
      index % 3 === 0 ? "eat" : index % 3 === 1 ? "think" : "sleep";

    return {
      philoNum: index,
      type: actionType,
      startTime: start,
      endTime: start + 5,
    };
  }
);

export const manyPhilosopherTimeRange: TimeRange = {
  min: baseTime,
  max: baseTime + (philoCountForLargeDataset - 1) * 10 + 5,
};

export const zeroDurationActions: PhiloAction[] = [
  {
    philoNum: 0,
    type: "eat",
    startTime: baseTime,
    endTime: baseTime,
  },
  {
    philoNum: 1,
    type: "eat",
    startTime: baseTime + 50,
    endTime: baseTime + 50,
  },
  {
    philoNum: 1,
    type: "sleep",
    startTime: baseTime + 50,
    endTime: baseTime + 120,
  },
  {
    philoNum: 2,
    type: "eat",
    startTime: baseTime + 120,
    endTime: baseTime + 120,
  },
  {
    philoNum: 2,
    type: "sleep",
    startTime: baseTime + 120,
    endTime: baseTime + 120,
  },
  {
    philoNum: 2,
    type: "think",
    startTime: baseTime + 120,
    endTime: baseTime + 200,
  },
];

export const zeroDurationTimeRange: TimeRange = {
  min: baseTime,
  max: baseTime + 200,
};
