import { useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import EventsContext from "../store/events-context";
import type { TransformedEventType } from "../utils/types";

export default function CalendarPage() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
  const { events } = useContext(EventsContext);
  const today = new Date();
  const [currentDate, setCurrentDate] = useState({
    month: today.getMonth(),
    year: today.getFullYear(),
  });
  const daysInMonth = new Date(
    currentDate.year,
    currentDate.month + 1,
    0,
  ).getDate();
  const firstDay = new Date(currentDate.year, currentDate.month, 1).getDay();
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
      <div className="calendar-header">
        <h2 className="font-header">{`${months[currentDate.month]} ${currentDate.year}`}</h2>
        <div className="changeMonthButtons flex justify-center gap-2 cursor-pointer">
          <button className="prevButton" onClick={handlePrevMonth}>
            Prev Month
          </button>
          <button className="nextButton" onClick={handleNextMonth}>
            Next Month
          </button>
        </div>
      </div>

      <div className="weekdays grid grid-cols-7 gap-1 font-semibold">
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
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
                      to={`events/${event.id}`}
                      key={event.id}
                      className="text-xs truncate"
                    >{`${event.homeTeamName} vs ${event.awayTeamName}, ${event.time.slice(0, -3)}`}</Link>
                  ))
                : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
