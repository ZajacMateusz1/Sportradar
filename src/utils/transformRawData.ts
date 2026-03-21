import { v4 as uuidv4 } from "uuid";
import type { EventType, TransformedEventType } from "./types";

const transformRawEventData = (events: EventType[]): TransformedEventType[] => {
  const transformedEvents: TransformedEventType[] = events.map((event) => ({
    id: uuidv4(),
    sport: event.sport,
    status: event.status,
    date: event.dateVenue,
    time: event.timeVenueUTC,
    homeTeamName: event.homeTeam?.name || "Unknown",
    awayTeamName: event.awayTeam?.name || "Unknown",
    result: {
      homeGoals: event.result?.homeGoals ?? 0,
      awayGoals: event.result?.awayGoals ?? 0,
    },
    competitionName: event.originCompetitionName,
  }));

  return transformedEvents;
};
export default transformRawEventData;
