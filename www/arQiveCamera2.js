var exec = require('cordova/exec');

var pluginName = 'MyCam';

function MyCam() {}

// MyCam.prototype.transcodeVideo = function(success, error, options) {
//   var self = this;
//   var win = function(result) {
//     if (typeof result.progress !== 'undefined') {
//       if (typeof options.progress === 'function') {
//         options.progress(result.progress);
//       }
//     } else {
//       success(result);
//     }
//   };
//   exec(win, error, pluginName, 'transcodeVideo', [options]);
// };

MyCam.prototype.coolMethod = function (arg0, success, error) {
    exec(success, error, 'arQiveCamera2', 'coolMethod', [arg0]);
};

MyCam.prototype.add = function(arg0, success, error) {
    exec(success, error, 'coolMethod', 'add', [arg0]);
}

MyCam.prototype.subtract = function(arg0, success, error) {
    exec(success, error, 'coolMethod', 'subtract', [arg0]);
}


module.exports = new MyCam();