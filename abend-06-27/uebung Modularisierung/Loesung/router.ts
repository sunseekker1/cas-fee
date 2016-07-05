import {AppConfig} from './config';

export class Router {
    constructor(private _config : AppConfig) {
        
    }
    
    setupRoutes() : void {
        this._config.routes.forEach(element => {
            console.log(element);
        });
    }
    
    routeTo(target : string) : void {
        // TODO: Contains in route confing then route to this element
    }
}
