const R = require('ramda');
const prop = R.prop;
const path = R.path;
const curry = R.curry;
const fd = require('ramda-fantasy').Identity;

let double = x => x+x

let x = fd({ name: 'YUhjew', prefs: { languages: { primary: 'English' } } }).map(path(['prefs', 'languages', 'primary'])).chain(double)

x


