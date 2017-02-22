Note: Make sure to have nodejs (latest) in server environment

From your root directory
    1. Get the dependencies
    //These are production dependencies and essential to run reactjs app (here --save flag tell nodejs that these are production dependencies)
    $ npm install react react-dom --save-dev
    // webpack-dev-server will run the app as service, babel-loader to traspile es6 code to es5 code
    //babel-preset-es2015 (which is es6,  to define which es6 command can be used) and
    //babel-preset-react (react specific babel) babel-preset-stage-2 (for extra feature support) be used,
    $ npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev

    2. Now with all dependecies installed start the app
    //from Root folder execute command
    $ npm start

    By default it will be running under http://localhost:8080
