'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

/**
 * User Schema
 */
var BulletSchema = new Schema({
   created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        required: true,
        ref: 'User'
    }

});

mongoose.model('Bullet', BulletSchema);