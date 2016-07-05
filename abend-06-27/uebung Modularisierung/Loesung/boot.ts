import {AppConfig, theAppConfig} from './config';
import {Router} from './router';
import {Binder} from './binder';

import {RemoteService} from './remoteService';
import {DataService} from './dataService';

function boot() : void {
    var router = new Router(theAppConfig);
    var remoteService = new RemoteService();
    var dataService = new DataService(remoteService);
    var data = dataService.getData();
    var binder = new Binder();
    binder.bind(data);    
}

boot();