import Dexie, { Table } from 'dexie';
import { Intervenant } from '../models/intervenant.model';
import { Student } from '../models/student.model';

export class AppDB extends Dexie {
  students!: Table<Student, number>;
  intervenants!: Table<Intervenant, number>;

  constructor() {
    super('signatures');
    this.version(3).stores({
      students: '++id',
      intervenants: '++id',
    });
  }
}

export const db = new AppDB();