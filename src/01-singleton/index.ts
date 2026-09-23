

export class AppConfig {
    private static instance: AppConfig;


    private constructor() {}

    public static getInstance(): AppConfig {
        if(!this.instance) {
            this.instance = new AppConfig();
        }
        return this.instance;
    }
}