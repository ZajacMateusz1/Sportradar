import { useEffect, useState, type ReactNode } from "react";
import EventsContext from "./events-context";
import transformRawEventData from "../utils/transformRawData";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";
import EVENTS from "../utils/events.json";
import type { TransformedEventType } from "../utils/types";
const eventsInitValue =
  getFromLocalStorage<TransformedEventType[]>("events") ??
  transformRawEventData(EVENTS.data);
interface EventsContextProviderProps {
  children: ReactNode;
}
export default function EventsContextProvider({
  children,
}: EventsContextProviderProps) {
  const [events, setEvents] = useState<TransformedEventType[]>(eventsInitValue);
  const handleAddEvent = (newEvent: TransformedEventType) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };
  useEffect(() => {
    setToLocalStorage("events", events);
  }, [events]);
  const eventsCTX = {
    events,
    handleAddEvent,
  };
  return <EventsContext value={eventsCTX}>{children}</EventsContext>;
}
