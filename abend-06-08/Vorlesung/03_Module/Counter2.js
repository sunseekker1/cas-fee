function createCounter(startValue)
{
    var obj = {};
    var counter = startValue || 0;
    obj.count = function(){ return ++counter; };
    obj.get = function(){ return counter; };
    return obj;
}

module.exports = createCounter;


