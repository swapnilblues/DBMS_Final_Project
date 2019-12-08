const mongoose = require('mongoose');
require('dotenv');

const userSchema = mongoose.Schema({
                                       email: {
                                           type: String,
                                           required: true,
                                           trim: true,
                                           unique: 1
                                       },
                                       password: {
                                           type: String,
                                           required: true,
                                           minLength: 6
                                       },
                                       // firstName: {
                                       //     type: String,
                                       //     required: true,
                                       //     maxlength: 50
                                       // },
                                       userName: {
                                           type: String,
                                           required: true,
                                           maxlength: 50
                                       },
                                       // lastName: {
                                       //     type: String,
                                       //     required: true,
                                       //     maxlength: 50
                                       // },
                                       cart: {
                                           type: Array,
                                           default: []
                                       },
                                       history: {
                                           type: Array,
                                           default: []
                                       },
                                       role: {
                                           type: Number,
                                           default: 0
                                       },
    // add an enum here
                                       type: {
                                             type: Number,
                                             required: false,
                                             default:-1
                                         },
                                         accessPermission: {
                                             type: Number,
                                             default: 0
                                         }
                                   });

module.exports = mongoose.model('User', userSchema);