import { Module } from "./module.model";

export interface Session {
  readonly id: string;
  readonly name: string;
  readonly start_date: string;
  readonly end_date: string;
  readonly modules: Module[];
}