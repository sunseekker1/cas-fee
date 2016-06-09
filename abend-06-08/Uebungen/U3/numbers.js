function numbers(start, end){
    var startCount = Number(start);
    var endCount = Number(end);

    function output(startCount, endCount){
        if (startCount < endCount){
            console.log(startCount);
            startCount += 1;
            output(startCount, endCount);
        }
    }

    output(startCount, endCount);

}

module.exports = { showNumbers : numbers};