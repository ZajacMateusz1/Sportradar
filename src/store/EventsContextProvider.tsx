import { useState, type ReactNode } from "react";
import EventsContext from "./events-context";
import EVENTS from "../utils/events.json";
import { type EventType } from "../utils/types";
interface EventsContextProviderProps {
  children: ReactNode;
}
export default function EventsContextProvider({
  children,
}: EventsContextProviderProps) {
  const [events, setEvents] = useState(EVENTS.data);
  const handleAddEvent = (newEvent: EventType) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };
  const eventsCTX = {
    events,
    handleAddEvent,
  };
  return <EventsContext value={eventsCTX}>{children}</EventsContext>;
}
