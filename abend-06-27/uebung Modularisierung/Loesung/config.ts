export interface AppConfig {
    color: string;
    routes: string[];
}

export var theAppConfig: AppConfig = 
{
    color: 'red', 
    routes: ['home', 'list']
};