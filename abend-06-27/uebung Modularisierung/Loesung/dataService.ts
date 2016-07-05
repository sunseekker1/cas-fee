import {RemoteService} from './remoteService';

export class DataService {
    
    constructor(private remoteService : RemoteService) {
    }

    private _localData : any;
    getData() : any {
        
        if(!this._localData) {
            this._localData = this.remoteService.getRemoteData();
        }
        return this._localData;
    }

} 