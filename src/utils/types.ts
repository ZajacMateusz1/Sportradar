import EVENTS from "../utils/events.json";
export type EventType = (typeof EVENTS.data)[number];
export type TransformedEventType = {
  id: string;
  sport: string;
  date: string;
  time: string;
  homeTeamName: string;
  awayTeamName: string;
  competitionName: string;
};
