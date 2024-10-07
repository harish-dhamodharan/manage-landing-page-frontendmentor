import { IPoint } from "../../molecules/Point/Point.interface";

const HERO = `What’s different about Manage?`;
const HERO_DESCRIPTION = `Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.`;
const POINTS: IPoint[] = [
  {
    point: "01",
    heading: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    point: "02",
    heading: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    point: "03",
    heading: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export { HERO, HERO_DESCRIPTION, POINTS };
