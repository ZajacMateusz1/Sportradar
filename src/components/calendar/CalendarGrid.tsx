import DayCard from "./DayCard";
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
    <div className="monthDays flex-1 grid grid-cols-7 gap-0.5 auto-rows-[90px] md:auto-rows-fr md:grid-rows-6 md:gap-2">
      {Array.from({ length: firstDay }).map((_, index) => (
        <DayCard
          events={null}
          day={null}
          key={`empty-${index}-${currentDate.month}-${currentDate.year}`}
        />
      ))}
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const day = index + 1;
        const month = currentDate.month + 1;
        const date = `${currentDate.year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        return (
          <DayCard key={date} events={eventsMap[date] || null} day={day} />
        );
      })}
    </div>
  );
}
