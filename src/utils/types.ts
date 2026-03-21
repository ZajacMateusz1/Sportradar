import EVENTS from "./events.json";

export type EventType = (typeof EVENTS.data)[number];
