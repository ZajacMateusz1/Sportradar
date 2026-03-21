import { useState, useMemo, useContext } from "react";
import EventsContext from "../store/events-context";
import type { TransformedEventType } from "../utils/types";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import WeekdaysRow from "../components/Calendar/WeekdaysRow";
import CalendarGrid from "../components/Calendar/CalendarGrid";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function CalendarPage() {
  const { events } = useContext(EventsContext);
  const today = new Date();
  const [currentDate, setCurrentDate] = useState({
    month: today.getMonth(),
    year: today.getFullYear(),
  });
  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      if (prevDate.month > 0) return { ...prevDate, month: prevDate.month - 1 };
      else return { month: 11, year: prevDate.year - 1 };
    });
  };
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      if (prevDate.month < 11)
        return { ...prevDate, month: prevDate.month + 1 };
      else return { month: 0, year: prevDate.year + 1 };
    });
  };
  const eventsMap = useMemo(() => {
    const dateToEvents: Record<string, TransformedEventType[]> = {};
    events.forEach((event) => {
      if (!dateToEvents[event.date]) {
        dateToEvents[event.date] = [];
      }
      dateToEvents[event.date].push(event);
    });
    return dateToEvents;
  }, [events]);
  return (
    <div className="calendar h-screen flex flex-col p-2 text-center">
      <CalendarHeader
        months={months}
        currentMonth={currentDate.month}
        currentYear={currentDate.year}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <WeekdaysRow />
      <CalendarGrid currentDate={currentDate} eventsMap={eventsMap} />
    </div>
  );
}
