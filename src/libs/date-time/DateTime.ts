export default interface DateTime {
  isSameDay(dateLeft: Date, dateRight: Date): boolean;
  addDays(date: Date, amount: number): Date;
}
