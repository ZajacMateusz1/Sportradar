import { useState, type ReactNode } from "react";
import EventsContext from "./events-context";
import transformRawEventData from "../utils/transformRawData";
import EVENTS from "../utils/events.json";
import type { TransformedEventType } from "../utils/types";
interface EventsContextProviderProps {
  children: ReactNode;
}
const transformedInitialEvents = transformRawEventData(EVENTS.data);
export default function EventsContextProvider({
  children,
}: EventsContextProviderProps) {
  const [events, setEvents] = useState<TransformedEventType[]>(
    transformedInitialEvents,
  );
  const handleAddEvent = (newEvent: TransformedEventType) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };
  const eventsCTX = {
    events,
    handleAddEvent,
  };
  return <EventsContext value={eventsCTX}>{children}</EventsContext>;
}
