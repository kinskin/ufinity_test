module.exports = (app, mysqlAllModels) => {

    /*
    *  =========================================
    *  =========================================
    *  =========================================
    *  =========================================
    *    ALL ROUTES FOR POKEMON CONTROLLER
    *  =========================================
    *  =========================================
    *  =========================================
    */

    // require the controller
    const controllerCallbacks = require('./controllers/controllersIndex.js')(mysqlAllModels);


    app.get('/',)
    app.get('/showteachers', controllerCallbacks.showTeachers);

};