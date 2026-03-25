import ButtonCircle from "../shared/ButtonCircle";
import SelectElement from "../shared/SelectElement";
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
  filters: Record<string, string>;
  handleFiltersChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function CalendarHeader({
  currentMonth,
  currentYear,
  handlePrevMonth,
  handleNextMonth,
  filters,
  handleFiltersChange,
}: CalendarHeaderProps) {
  return (
    <header className="calendar-header flex flex-col items-center pb-2">
      <h2 className="font-header uppercase text-md font-bold md:text-xl lg:text-2xl xl:text-3xl">{`${months[currentMonth]} ${currentYear}`}</h2>
      <div className="changeMonthButtons py-1 flex justify-center gap-2 lg:gap-6 lg:py-2">
        <ButtonCircle onClick={handlePrevMonth}>{"<"}</ButtonCircle>
        <ButtonCircle onClick={handleNextMonth}>{">"}</ButtonCircle>
      </div>
      <SelectElement
        value={filters.sport}
        onChange={handleFiltersChange}
        isHidden={false}
        defaultMessage="All sports"
        name="sport"
        label="Filter by sport"
        options={["Football", "Basketball", "Volleyball"]}
      />
    </header>
  );
}
