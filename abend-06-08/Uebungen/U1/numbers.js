function numbers(start, end){
    var startCount = start;

    function output(startCount, end){
        if (startCount < end){
            console.log(startCount);
            startCount += 1;
            output(startCount, end);
        }
    }

    output(startCount, end);

}

module.exports = { showNumbers : numbers};