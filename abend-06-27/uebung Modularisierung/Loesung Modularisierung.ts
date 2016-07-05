import {Router} from './router';


function boot() : void {
    var router = new Router(config);
    var data = getData();
    bind(data);    
}

function bind(data : any) : void {
    
    // would bind the view to the controller
    console.log(data);
    
}







boot();