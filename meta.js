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
        "author": {
            "type"   : "string",
            "message": "Author"
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
        "prefix": {
            "type"    : "string",
            "required": false,
            "message" : "the host name for Ajax request",
            "default" : ''
        }
    },
    "filters": {
        "src/redux/**/*": "state === 'redux'",
        "src/mobx/**/*": "state === 'mobx'"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dll\n  npm run dev\n\nDocumentation can be found at https://github.com/dwqs/react-startup"
}
