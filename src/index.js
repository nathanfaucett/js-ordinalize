module.exports = ordinalize;


function ordinalize(number, full) {
    return full !== false ? number + ordinal(number) : ordinal(number);
}

function ordinal(number) {
    if (number === 0) {
        return "";
    } else {
        number = Math.abs(number % 100);

        if (number > 9 && number < 14) {
            return "th";
        } else {
            number = number % 10;

            switch (number) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }
    }
}
