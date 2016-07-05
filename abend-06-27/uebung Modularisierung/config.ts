export interface AppConfig {
    color: string;
    routes: string[];
}

export var config: AppConfig =
{
    color: 'red',
    routes: ['home', 'list']
};