/**
 * Created by pomy on 19/07/2017.
 */

'use strict';

const path = require('path');
const webpack = require('webpack');

{{#if_eq state 'redux'}}
let vendors = [
    'redux', 'react-redux', 'react-router-redux', 'redux-actions', 'redux-actions-promise'
];
{{/if_eq}}
{{#if_eq state 'mobx'}}
let vendors = [
    'mobx', 'mobx-react', 'mobx-react-router', 'async-await-error-handling'
];
{{/if_eq}}

module.exports = {
    entry: {
        vendor: vendors.concat(
            'react', 'react-router-dom', 'react-dom', 'prop-types', 'history', 'async-react-component',
            'axios'
        )
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].dll.js',
        //定义输出：window.${output.library}
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './dist', '[name]-manifest.json'),
            // 和 output.library 一样即可
            name: '[name]_library'
        })
    ]
}
