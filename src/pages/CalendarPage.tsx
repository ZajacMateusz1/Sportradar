import { useState, useMemo, useContext } from "react";
import EventsContext from "../store/events-context";
import type { EventType } from "../utils/types";

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
  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      if (prevDate.month > 0) return { ...prevDate, month: prevDate.month - 1 };
      else return { month: 11, year: prevDate.year - 1 };
    });
  };
  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      if (prevDate.month < 11)
        return { ...prevDate, month: prevDate.month + 1 };
      else return { month: 0, year: prevDate.year + 1 };
    });
  };
  const eventsMap = useMemo(() => {
    const dateToEvents: Record<string, EventType[]> = {};
    events.forEach((event) => {
      if (!dateToEvents[event.dateVenue]) {
        dateToEvents[event.dateVenue] = [];
      }
      dateToEvents[event.dateVenue].push(event);
    });
    return dateToEvents;
  }, [events]);
  return (
    <>
      <h1>Sports Events Calendar</h1>
      <div className="calendar">
        <div className="header">
          <h2>{`${months[currentDate.month]} ${currentDate.year}`}</h2>
          <div className="changeMonthButtons">
            <button className="prevButton" onClick={prevMonth}>
              Prev Month
            </button>
            <button className="nextButton" onClick={nextMonth}>
              Next Month
            </button>
          </div>
        </div>
        <div className="weekdays">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="monthDays">
          {Array.from({ length: firstDay }).map((_, index) => (
            <span
              key={`empty-${index}-${currentDate.month}-${currentDate.year}`}
            ></span>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const month = currentDate.month + 1;
            const date = `${currentDate.year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
            return (
              <span key={date}>
                {day}
                {eventsMap[date]
                  ? eventsMap[date].map((event) => event.homeTeam?.name)
                  : ""}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
