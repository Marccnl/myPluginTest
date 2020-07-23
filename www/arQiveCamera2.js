var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'arQiveCamera2', 'coolMethod', [arg0]);
};

module.exports.add = function(arg0, success, error) {
    exec(success, error, 'coolMethod', 'add', [arg0]);
}

module.exports.subtract = function(arg0, success, error) {
    exec(success, error, 'coolMethod', 'add', [arg0]);
}