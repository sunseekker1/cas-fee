var CookiePersitanceService = (function () {
    function CookiePersitanceService() {
    }
    CookiePersitanceService.prototype.save = function (entity) {
        var id = Math.floor((Math.random() * 100) + 1);
        return id;
    };
    return CookiePersitanceService;
}());
var FavouritesController = (function () {
    function FavouritesController(persistanceService) {
        this._persistanceService = persistanceService;
    }
    FavouritesController.prototype.saveAsFavourite = function (articleId) {
        return this._persistanceService.save(articleId);
    };
    return FavouritesController;
}());
var favController = new FavouritesController(new CookiePersitanceService());
