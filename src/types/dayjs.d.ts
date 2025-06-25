import 'dayjs';

declare module 'dayjs' {
  interface Dayjs {
    calendar(calendarName: string): Dayjs;
  }
}
