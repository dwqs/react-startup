/**
 * Created by pomy on 19/07/2017.
 */

'use strict';

const path = require('path');
const webpack = require('webpack');

{{#if_eq state 'redux'}}
let vendors = [
    'react', 'react-router-dom', 'react-dom', 'prop-types', 'history', 'async-react-component',
    'redux', 'react-redux', 'react-router-redux', 'redux-actions', 'redux-actions-promise'
];
{{/if_eq}}
{{#if_eq state 'mobx'}}
let vendors = [
    'react', 'react-router-dom', 'react-dom', 'prop-types', 'history', 'async-react-component',
    'mobx', 'mobx-react', 'mobx-react-router'
];
{{/if_eq}}

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, './{{path}}'),
        filename: '[name].dll.js',
        //定义输出：window.${output.library}
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './{{path}}', '[name]-manifest.json'),
            // 和 output.library 一样即可
            name: '[name]_library'
        })
    ]
}
