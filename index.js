/**
 * ===================================
 * Configurations and set up
 * ===================================
 */


const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const cloudinary = require('cloudinary');
const multer = require('multer');

/**
 * ======================================================================================
 * the configuration below is for the uploading of file to cloudinary
 * ======================================================================================
 */


const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads')
  },
  filename: function (request, file, callback) {
    callback(null,file.originalname)
  }
})

const upload = multer({ storage: storage })

// Init express app
const app = express();

// Set up middleware
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * ===================================
 * Routes
 * ===================================
 * ===================================
 */

// get the thing that contains all the routes
const setRoutesFunction = require('./routes');

// call it and pass in the "app" so that we can set routes on it (also models)
setRoutesFunction(app);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));