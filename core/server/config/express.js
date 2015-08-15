// EXPRESS CONFIGURATION FILE
// we require the config file first!
var config = require('./config.js'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport');


module.exports = function () {
    // generates the app object
    var app = express();


    // Environment-dependant middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }


    // this middleware will run no matter the environment
    app.use(cors());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    // cookie support
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // here we set our templating engine
    // route is relative to server.js
    app.set('views', './core/server/views');
    app.set('view engine', 'ejs');


    // here we register flash and passport
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());


    // HERE WE INCLUDE THE ROUTES
    // we run the router objects giving them the express app
    require('../routes/users.server.routes.js')(app);
    require('../routes/quizzes.server.routes.js')(app);


    // THIS WILL BE ANGULAR APP
    // needs to come after setting the rendering engine
    app.use(express.static('./core/client'));

    return app;
};