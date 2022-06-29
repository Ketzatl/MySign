import { City } from './city.model';
import { Intervenant } from './intervenant.model';
import { Session } from './session.model';
import { StateModule } from './state-module.model';
import { Student } from './student.model';

export interface Module {
  city: City;
  date: string;
  duration: string;
  id: string;
  intervenants: Intervenant;
  name: string;
  session: Session;
  start_time: string;
  state: StateModule;
  students: Array<Student>;
}
