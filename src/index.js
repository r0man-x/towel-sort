// You should implement your task here.

module.exports = function towelSort (matrix) {

    function arrSort( array, result, reverse = false) {
        if (reverse) array.reverse();

        array.forEach(element => {
            result.push(element);
        });
    }

    let arrResult = [];

    if (matrix) {
        matrix.forEach(function (element, index) {
            if (index % 2 == 0) arrSort(element, arrResult);
            else arrSort(element, arrResult, true);
        });
    }

    return arrResult;
}
