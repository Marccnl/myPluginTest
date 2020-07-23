var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'arQiveCamera2', 'coolMethod', [arg0]);
};

exports.add = function(arg0, success, error) {
    exec(success, error, 'coolMethod', 'add', [arg0]);
}

exports.subtract = function(arg0, success, error) {
    exec(success, error, 'coolMethod', 'add', [arg0]);
}