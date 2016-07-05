export class Data {

    private _localData: any;

    getRemoteData() : any {
        // gets data from a remote service
        return { data: 'a lot of data' };
    }

    getData() : any {

        if(!this._localData) {
            this._localData = getRemoteData();
        }

        return this._localData;
    }
}
