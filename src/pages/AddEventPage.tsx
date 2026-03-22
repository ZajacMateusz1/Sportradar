import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import EventsContext from "../store/events-context";
import InputElement from "../components/shared/InputElement";
import SelectElement from "../components/shared/SelectElement";
import Button from "../components/shared/Button";
export default function AddEventPage() {
  const { handleAddEvent } = useContext(EventsContext);
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
    handleAddEvent({
      id: uuidv4(),
      sport: values.sport,
      date: values.date,
      time: values.time,
      homeTeamName: values.homeTeamName,
      awayTeamName: values.awayTeamName,
      competitionName: values.competitionName,
    });
  };
  return (
    <div className="wrapper text-center">
      <h1>Add new event</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 max-w-md mx-auto p-6 bg-grey rounded-xl shadow"
      >
        <InputElement name="date" type="date" required>
          Date
        </InputElement>
        <InputElement name="time" type="time" required>
          Time
        </InputElement>
        <SelectElement
          name="sport"
          label="Please select sport"
          options={["Football", "Basketball", "Volleyball"]}
          required
        />
        <SelectElement
          name="competitionName"
          label="Please select competition"
          options={[
            "Champions League",
            "League",
            "National Cup",
            "Friendly match",
          ]}
          required
        />
        <InputElement name="homeTeamName" type="text" required>
          Home Team
        </InputElement>

        <InputElement name="awayTeamName" type="text" required>
          Away Team
        </InputElement>
        <div className="buttons flex gap-2">
          <Button type="submit">Add Event</Button>
          <Button type="reset">Reset</Button>
        </div>
      </form>
    </div>
  );
}
