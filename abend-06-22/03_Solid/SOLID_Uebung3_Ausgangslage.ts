interface IPersistanceService {
    save(entity: any): number;
}

class CookiePersitanceService implements IPersistanceService {
    save(entity: any): number {
        var id = Math.floor((Math.random() * 100) + 1);
        // Cookie persistance logic...
        return id;
    }
}

class FavouritesController {
    private _persistanceService: IPersistanceService;
    constructor(persistanceService: IPersistanceService) {
        this._persistanceService = persistanceService;
    }
    public saveAsFavourite(articleId: number) {
        return this._persistanceService.save(articleId);
    }
}

var favController = new FavouritesController(new CookiePersitanceService());