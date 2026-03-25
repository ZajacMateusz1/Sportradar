import ButtonCircle from "../shared/ButtonCircle";
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
interface CalendarHeaderProps {
  currentMonth: number;
  currentYear: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}
export default function CalendarHeader({
  currentMonth,
  currentYear,
  handlePrevMonth,
  handleNextMonth,
}: CalendarHeaderProps) {
  return (
    <header className="calendar-header">
      <h2 className="font-header uppercase text-md font-bold md:text-xl lg:text-2xl xl:text-3xl">{`${months[currentMonth]} ${currentYear}`}</h2>
      <div className="changeMonthButtons py-1 flex justify-center gap-2 lg:gap-6 lg:py-2">
        <ButtonCircle onClick={handlePrevMonth}>{"<"}</ButtonCircle>
        <ButtonCircle onClick={handleNextMonth}>{">"}</ButtonCircle>
      </div>
    </header>
  );
}
