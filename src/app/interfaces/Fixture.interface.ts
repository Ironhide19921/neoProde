import { Periods } from "./Periods.interface";
import { Venue } from "./Venue.interface";
import { Status } from "./Status.interface";


export interface Fixture {
  id: number;
  referee?: any;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}
