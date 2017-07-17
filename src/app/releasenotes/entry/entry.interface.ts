import { ChangeType } from './type.enum';
export interface Entry {
  title: string;
  description: string;
  type: ChangeType;
  image?: string;
}
