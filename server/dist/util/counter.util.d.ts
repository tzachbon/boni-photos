export declare class Counter {
    constructor();
    initCron(): void;
    sendMailEveryWeek(): Promise<void>;
    sendMailEveryDay(): Promise<void>;
    getEntersPerUser(data: any): {};
    getAvgTime(data: any): {};
    getUsersData(): Promise<any>;
}
