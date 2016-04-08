'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Device Schema
 */
var DeviceSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  battery: {
    type: Number
  },
  locationnet: {
    type: String
  },
  lastcalloutname: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Device', DeviceSchema);
