var util = require('util');

var phrases = {
    "Hello": "Privet",
    "World": "Mir"
};

// Custom errors
function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function HttpError(status, message) {
    this.status = status;
    this.message = message;

}

util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError('No such phrase ' + name);
    }
    return phrases[name];
}

function makePage(url) {
    if (url !== 'index.html') {
        throw new HttpError(404, 'No such page');
    }
    return util.format("%$, %$!", getPhrase('***'), getPhrase('World'));
}

try {
    var page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error(e.name, e.message, e.stack);
    }
}

