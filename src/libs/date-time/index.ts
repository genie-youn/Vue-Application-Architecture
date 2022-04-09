import type DateTime from "./DateTime";
import Adapter from "./MomentAdapter";

const instance: DateTime = new Adapter();

export function isSameDay(dateLeft: Date, dateRight: Date): boolean {
  return instance.isSameDay(dateLeft, dateRight);
}
export function addDays(date: Date, amount: number): Date {
  return instance.addDays(date, amount);
}
