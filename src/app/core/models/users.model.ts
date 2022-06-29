import { Intervenant } from "./intervenant.model";
import { Student } from "./student.model";

export interface User {
  email: string;
  first_name: string;
  id: string;
  intervenant?: Intervenant;
  last_name: string;
  role: string;
  student?: Student;
}
