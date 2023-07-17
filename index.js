// run npm test to test

function alphabet(text) {
    const re = new RegExp("[a-zA-Z]+at");
    return re.test(text);
}

function numbers(text) {
    const re = new RegExp("[1-9][0-9]*%");
    return re.test(text);
}

module.exports = {
    alphabet,
    numbers
};
