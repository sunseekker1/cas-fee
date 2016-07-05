export class Router {
    constructor(private config : AppConfig) {

    }

    setupRoutes() : void {
        this.config.routes.forEach(element => {
            console.log(element);
        });
    }

    routeTo(target : string) : void {
        // TODO: Contains in route confing then route to this element
    }
}
