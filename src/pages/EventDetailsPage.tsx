import { useContext } from "react";
import { useParams } from "react-router-dom";
import EventsContext from "../store/events-context";
export default function EventDetailsPage() {
  const { events } = useContext(EventsContext);
  const params = useParams();
  const findedEvent = events.find((event) => event.id === params.eventId);

  return (
    <main>
      <p>{findedEvent?.homeTeamName}</p>
    </main>
  );
}
