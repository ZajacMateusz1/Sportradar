import { useState } from "react";

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
            <span key={`empty=${index}`}></span>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => (
            <span key={index + 1}>{index + 1}</span>
          ))}
        </div>
      </div>
    </>
  );
}
