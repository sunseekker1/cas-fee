define(['jquery'], function ($){

    var methods = {};

    methods.printText = function (text){
        $('body').html(text);
    };

    return methods;

});