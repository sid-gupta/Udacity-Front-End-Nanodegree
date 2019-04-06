var functionOne = function functionOne() {
    var one = 0;
    return function rOne() {
        one += 1;
        return one;
    }
};

var functionTwo = function functionTwo() {
    let two = 0;
    return function rTwo() {
        two += 1;
        return two;
    }
};
