const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jtw').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

// configure password options
const options = {};
// built in method
// jwt = JSON Web Token
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = password => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload);

        // telling passport to pass it onto the next middleware
        done();
    }))
}