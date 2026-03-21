interface CalendarHeaderProps {
  months: string[];
  currentMonth: number;
  currentYear: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}
export default function CalendarHeader({
  months,
  currentMonth,
  currentYear,
  handlePrevMonth,
  handleNextMonth,
}: CalendarHeaderProps) {
  return (
    <div className="calendar-header">
      <h2 className="font-header">{`${months[currentMonth]} ${currentYear}`}</h2>
      <div className="changeMonthButtons flex justify-center gap-2 cursor-pointer">
        <button className="prevButton" onClick={handlePrevMonth}>
          Prev Month
        </button>
        <button className="nextButton" onClick={handleNextMonth}>
          Next Month
        </button>
      </div>
    </div>
  );
}
