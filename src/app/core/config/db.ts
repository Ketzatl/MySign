import Dexie, { Table } from 'dexie';
import { Student } from '../models/student.model';

export class AppDB extends Dexie {
  students!: Table<Student, number>;

  constructor() {
    super('signatures');
    this.version(3).stores({
      students: '++id',
    });
  }
}
