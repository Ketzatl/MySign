import { StateSignature } from './state-signature';
import { User } from './users.model';

export interface Student {
  comment?: string;
  id?: number;
  module?: string;
  signature?: string;
  state?: StateSignature;
  directus_users_id?: User;
}
