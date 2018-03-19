/**
 *
 *   Created By iw.jhun
 *   On 2018-03-16 , 오후 6:47
 *
 */

const path = require('path');


const config = {
    entry: {
        app : './src/plugin.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: []

}

module.exports = config;
