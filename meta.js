/**
 * Created by pomy on 24/07/2017.
 */

module.exports = {
    "prompts": {
        "name": {
            "type"    : "string",
            "required": false,
            "message" : "Project name",
            "default" : "react-startup"
        },
        "version": {
            "type"    : "string",
            "message" : "Project version",
            "default" : "0.0.1"
        },
        "description": {
            "type"    : "string",
            "required": false,
            "message" : "Project description",
            "default" : "A new React project"
        },
        "author": {
            "type"   : "string",
            "message": "Author"
        },
        "state": {
            "type": "list",
            "message": "state manage for your app",
            "choices": [
                {
                    "name": "Mobx (https://github.com/mobxjs/mobx)",
                    "value": "mobx",
                    "short": "mobx"
                },
                {
                    "name": "Redux (https://github.com/reactjs/redux)",
                    "value": "redux",
                    "short": "redux"
                }
            ]
        },
        "port": {
            "type"    : "string",
            "required": false,
            "message" : "client port",
            "default" : 3000
        },
        "path": {
            "type"    : "string",
            "required": false,
            "message" : "Webpack's outputPath, starts with dirName, eg:'dist' or 'dist/build'",
            "default" : "dist"
        },
        "publicPath": {
            "type"    : "string",
            "required": false,
            "message" : "Webpack dev server's publicPath, starts with '/' and ends with '/'",
            "default" : "/"
        },
        "prefix": {
            "type"    : "string",
            "required": false,
            "message" : "the host name for Ajax request",
            "default" : ''
        },
        "imageminifying": {
            "type": "confirm",
            "message": "Need image minifying in production?"
        }
    },
    "filters": {
        "src/redux/**/*": "state === 'redux'",
        "src/model/**/*": "state === 'mobx'"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dll\n  npm run dev\n\nDocumentation can be found at https://github.com/dwqs/react-startup"
}
