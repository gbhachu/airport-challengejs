function Weather() {};

Weather.prototype.isStormy = function() {
    var number = Math.floor((Math.random() * 10) + 1);
    if (number <= 7) {
        return true
    } else {
        return false
    }

};
