import { Link } from "react-router-dom";
import type { TransformedEventType } from "../../utils/types";
interface DayCardProps {
  events: TransformedEventType[] | null;
  day: number | null;
}
export default function DayCard({ events, day }: DayCardProps) {
  return (
    <div className="day p-1 text-center rounded-lg shadow-lg bg-white md:p-2 overflow-y-auto">
      {day !== null && <p className="font-semibold">{day}</p>}
      {events &&
        events.map((event) => (
          <Link
            to={`/events/${event.id}`}
            key={event.id}
            className="block truncate text-xs p-0.5 lg:text-md"
          >{`${event.homeTeamName} vs ${event.awayTeamName}`}</Link>
        ))}
    </div>
  );
}
