import { Intervenant } from './intervenant';
import { StateModule } from './state-module';
import { Student } from './student';

export interface Module {
  city: string;
  date: string;
  duration: string;
  id: string;
  intervenant: Intervenant;
  name: string;
  session: string;
  start: string;
  state: StateModule;
  student: Array<Student>;
}
