import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import EventsContext from "../store/events-context";
import Button from "../components/shared/Button";
export default function EventDetailsPage() {
  const { events } = useContext(EventsContext);
  const params = useParams();
  const selectedEvent = events.find((event) => event.id === params.eventId);
  if (!selectedEvent) {
    return <h2>Event not found</h2>;
  }
  return (
    <main className="flex justify-center">
      <div className="event-card p-6 w-full max-w-md text-center rounded-2xl shadow-lg bg-white">
        <header className="event-info-header mb-5">
          <h2 className="text-md font-bold md:text-xl lg:text-2xl xl:text-3xl">
            {selectedEvent.homeTeamName} vs {selectedEvent.awayTeamName}
          </h2>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl">
            {selectedEvent.competitionName}
          </p>
        </header>
        <section className="event-info pb-2">
          <h3 className="font-semibold text-md md:text-lg lg:text-xl xl:text-2xl">
            Details
          </h3>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl">
            Sport: {selectedEvent.sport}
          </p>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl">
            Time: {selectedEvent.date}, {selectedEvent.time.slice(0, 5)}
          </p>
        </section>
        <Button>
          <Link to="/">Back to calendar</Link>
        </Button>
      </div>
    </main>
  );
}
