global.window = global;
global.assert = require("chai").assert;
global.firebase = require('firebase');
require('../src/js/data/dataWeWork');
require('./dataWeWork.spec.js');
