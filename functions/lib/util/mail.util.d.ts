export declare class Mailer {
    private mail;
    private mailOptions;
    private readonly auth;
    private subject;
    private text;
    constructor(subject?: string, text?: string, to?: string);
    get mailInfo(): {
        subject: string;
        text: string;
    };
    private initMailMetaData;
    private initMailOptions;
    setNewSubject(subject?: string): string;
    setNewText(text?: string): string;
    send(): Promise<unknown>;
}
