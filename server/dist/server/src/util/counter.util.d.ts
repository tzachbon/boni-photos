export declare class Counter {
    private weekly;
    private daily;
    private sum;
    constructor();
    sendMailEveryWeek(): Promise<void>;
    sendMailEveryDay(): Promise<void>;
    setWeeklyCount(weekly: any): void;
    setDailyCount(daily: any): void;
    updateCounter(): void;
    readonly totalEnters: number;
    readonly weeklyCount: number;
    readonly dailyCount: number;
}
