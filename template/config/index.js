'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: require('./dev.env.js'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3000,
        prefix: ''
    },
    build:{
        env: require('./prod.env.js'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        prefix: ''
    }
}
