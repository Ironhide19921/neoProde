import { League } from "./League.interface";
import { Teams } from "./Teams.interface";
import { Goals } from "./Goals.interface";
import { Score } from "./Score.interface";
import { Fixture } from "./Fixture.interface";

export interface Match {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

