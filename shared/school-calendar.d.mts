export declare const CALENDAR_YEAR: number;
export declare const SCHOOL_WEEKDAYS: string[];
export declare const todayDateKey: () => string;
export declare const parseScheduleDays: (schedule: string) => Set<string>;
export declare const lessonDateKeys: (
  schedule: string,
  from: string,
) => string[];
