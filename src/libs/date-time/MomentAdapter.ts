import moment from "moment";
import type DateTime from "./DateTime";

export default class MomentAdapter implements DateTime {
  addDays(date: Date, amount: number): Date {
    return moment(date).add(amount, "days").toDate();
  }
  isSameDay(dateLeft: Date, dateRight: Date): boolean {
    return moment(dateLeft).isSame(dateRight, "days");
  }
}
