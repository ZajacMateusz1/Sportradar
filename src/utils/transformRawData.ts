import { v4 as uuidv4 } from "uuid";
import type { EventType, TransformedEventType } from "./types";

const transformRawEventData = (events: EventType[]): TransformedEventType[] => {
  const transformedEvents: TransformedEventType[] = events.map((event) => ({
    id: uuidv4(),
    sport: event.sport,
    date: event.dateVenue,
    time: event.timeVenueUTC,
    homeTeamName: event.homeTeam?.name || "Unknown",
    awayTeamName: event.awayTeam?.name || "Unknown",
    competitionName: event.originCompetitionName,
  }));

  return transformedEvents;
};
export default transformRawEventData;
