import { Entry } from '../entry/entry.interface';

export interface Release {
  version: string;
  date: Date;
  entries: Entry[];
}
