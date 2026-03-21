import { useState, useMemo } from "react";
import EVENTS from "../utils/events.json";

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
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const eventsMap = useMemo(() => {
    const dateToEvents: Record<string, typeof EVENTS.data> = {};
    EVENTS.data.forEach((event) => {
      if (!dateToEvents[event.dateVenue]) {
        dateToEvents[event.dateVenue] = [];
      }
      dateToEvents[event.dateVenue].push(event);
    });
    return dateToEvents;
  }, []);
  return (
    <>
      <h1>Sports Events Calendar</h1>
      <div className="calendar">
        <div className="header">
          <h2>{`${months[currentMonth]} ${currentYear}`}</h2>
        </div>
        <div className="weekdays">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="monthDays">
          {Array.from({ length: firstDay }).map((_, index) => (
            <span key={`empty-${index}`}></span>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const month = currentMonth + 1;
            const date = `${currentYear}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
            return (
              <span key={day}>
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
