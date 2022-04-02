import MomentAdapter from "@/libs/date-time/MomentAdapter";

interface DateTime {
  isSameDay(dateLeft: Date, dateRight: Date): boolean;
  addDays(date: Date, amount: Date): Date;
}

export default new MomentAdapter() as DateTime;
