var phrases;
exports.connect = function () {
    phrases = require('./phrases.json');
};

exports.getPhrase = function (name) {
    if (!phrases[name]) {
        throw new Error('No such phrase!');
    }
    return phrases[name];
};

