import { Link } from "react-router-dom";
import type { TransformedEventType } from "../../utils/types";
interface CalendarGridProps {
  currentDate: {
    month: number;
    year: number;
  };
  eventsMap: Record<string, TransformedEventType[]>;
}
export default function CalendarGrid({
  currentDate,
  eventsMap,
}: CalendarGridProps) {
  const daysInMonth = new Date(
    currentDate.year,
    currentDate.month + 1,
    0,
  ).getDate();
  const firstDay = new Date(currentDate.year, currentDate.month, 1).getDay();
  return (
    <div className="monthDays flex-1 grid grid-cols-7 gap-1 auto-rows-[1fr]">
      {Array.from({ length: firstDay }).map((_, index) => (
        <div
          className="day"
          key={`empty-${index}-${currentDate.month}-${currentDate.year}`}
        ></div>
      ))}
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const day = index + 1;
        const month = currentDate.month + 1;
        const date = `${currentDate.year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        return (
          <div
            className="day flex flex-col border border-black rounded-md shadow-md p-1"
            key={date}
          >
            <span className="font-semibold">{day}</span>
            {eventsMap[date]
              ? eventsMap[date].map((event) => (
                  <Link
                    to={`/events/${event.id}`}
                    key={event.id}
                    className="text-xs truncate"
                  >{`${event.homeTeamName} vs ${event.awayTeamName}, ${event.time.slice(0, -3)}`}</Link>
                ))
              : ""}
          </div>
        );
      })}
    </div>
  );
}
