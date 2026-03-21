import { createContext } from "react";
import { type EventType } from "../utils/types";
interface EventsContextInterface {
  events: EventType[];
  handleAddEvent: (newEvent: EventType) => void;
}
const EventsContext = createContext<EventsContextInterface>({
  events: [],
  handleAddEvent: () => {},
});
export default EventsContext;
