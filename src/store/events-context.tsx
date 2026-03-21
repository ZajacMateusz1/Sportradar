import { createContext } from "react";
import { type TransformedEventType } from "../utils/types";
interface EventsContextInterface {
  events: TransformedEventType[];
  handleAddEvent: (newEvent: TransformedEventType) => void;
}
const EventsContext = createContext<EventsContextInterface>({
  events: [],
  handleAddEvent: () => {},
});
export default EventsContext;
