import type { EventType, TransformedEventType } from "./types";

const transformRawEventData = (events: EventType[]): TransformedEventType[] => {
  const transformedEvents: TransformedEventType[] = events.map((event) => ({
    id: `${event.dateVenue}-${event.originCompetitionId}-${event.homeTeam?.name || "Unknown"}-${event.awayTeam?.name || "Unknown"}`,
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
