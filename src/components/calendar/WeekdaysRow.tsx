const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function WeekdaysRow() {
  return (
    <div className="weekdays grid grid-cols-7 gap-1 font-semibold text-sm md:text-md lg:text-lg xl:text-xl">
      {days.map((day) => (
        <span key={day}>{day}</span>
      ))}
    </div>
  );
}
