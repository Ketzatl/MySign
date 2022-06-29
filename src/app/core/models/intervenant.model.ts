import { StateSignature } from './state-signature';
import { User } from './users.model';

export interface Intervenant {
  comment: string;
  id: string;
  module: string;
  signature: string;
  state: StateSignature;
  user: User;
}
