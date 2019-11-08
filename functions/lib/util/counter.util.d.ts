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
    get totalEnters(): number;
    get weeklyCount(): number;
    get dailyCount(): number;
}
