import { Intervenant } from './intervenant';
import { Student } from './student';

export interface User {
  email: string;
  first_name: string;
  id: string;
  intervenant?: Intervenant;
  last_name: string;
  role: string;
  student?: Student;
}
