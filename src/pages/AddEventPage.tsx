import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import EventsContext from "../store/events-context";
import useFormField from "../hooks/useFormField";
import { isEmpty } from "../utils/validation";
import InputElement from "../components/shared/InputElement";
import SelectElement from "../components/shared/SelectElement";
import Button from "../components/shared/Button";
export default function AddEventPage() {
  const { handleAddEvent } = useContext(EventsContext);
  const navigate = useNavigate();
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    Object.values(formData).forEach((formField) => formField.handleBlur());
    const hasError = Object.values(formData).some(
      (formField) => formField.error,
    );
    if (hasError) return;
    handleAddEvent({
      id: uuidv4(),
      sport: formData.sport.value,
      date: formData.date.value,
      time: formData.time.value,
      homeTeamName: formData.homeTeamName.value,
      awayTeamName: formData.awayTeamName.value,
      competitionName: formData.competitionName.value,
    });
    navigate("/");
  };
  const handleReset = () => {
    Object.values(formData).forEach((formField) =>
      formField.handleInputChange(""),
    );
  };
  const formData = {
    sport: useFormField(isEmpty),
    date: useFormField(isEmpty),
    time: useFormField(isEmpty),
    homeTeamName: useFormField(isEmpty),
    awayTeamName: useFormField(isEmpty),
    competitionName: useFormField(isEmpty),
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 mx-auto p-4 max-w-lg text-center bg-white rounded-xl shadow"
    >
      <h2 className="font-header uppercase text-md font-bold md:text-xl lg:text-2xl xl:text-3xl">
        Add new event
      </h2>
      <InputElement
        value={formData.date.value}
        onChange={(e) => formData.date.handleInputChange(e.target.value)}
        onBlur={formData.date.handleBlur}
        error={formData.date.error ? "This field cannot be empty" : ""}
        name="date"
        type="date"
        required
      >
        Date
      </InputElement>
      <InputElement
        value={formData.time.value}
        onChange={(e) => formData.time.handleInputChange(e.target.value)}
        onBlur={formData.time.handleBlur}
        error={formData.time.error ? "This field cannot be empty" : ""}
        name="time"
        type="time"
        required
      >
        Time
      </InputElement>
      <SelectElement
        value={formData.sport.value}
        onChange={(e) => formData.sport.handleInputChange(e.target.value)}
        onBlur={formData.sport.handleBlur}
        error={formData.sport.error ? "This field cannot be empty" : ""}
        name="sport"
        label="Please select sport"
        options={["Football", "Basketball", "Volleyball"]}
        required
      />
      <SelectElement
        value={formData.competitionName.value}
        onChange={(e) =>
          formData.competitionName.handleInputChange(e.target.value)
        }
        onBlur={formData.competitionName.handleBlur}
        error={
          formData.competitionName.error ? "This field cannot be empty" : ""
        }
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
      <InputElement
        value={formData.homeTeamName.value}
        onChange={(e) =>
          formData.homeTeamName.handleInputChange(e.target.value)
        }
        onBlur={formData.homeTeamName.handleBlur}
        error={formData.homeTeamName.error ? "This field cannot be empty" : ""}
        name="homeTeamName"
        type="text"
        required
      >
        Home Team
      </InputElement>

      <InputElement
        value={formData.awayTeamName.value}
        onChange={(e) =>
          formData.awayTeamName.handleInputChange(e.target.value)
        }
        onBlur={formData.awayTeamName.handleBlur}
        error={formData.awayTeamName.error ? "This field cannot be empty" : ""}
        name="awayTeamName"
        type="text"
        required
      >
        Away Team
      </InputElement>
      <div className="buttons flex gap-2 mt-2">
        <Button type="submit">Add Event</Button>
        <Button type="reset" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}
