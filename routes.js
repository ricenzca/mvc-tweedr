module.exports = (app, allModels) => {


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

  const registerController = require('./controllers/register')(allModels);
  app.get('/register', registerController.registerRequestHandler);
  app.post('/register', registerController.registerControllerCallback);

  const loginController = require('./controllers/login')(allModels);
  app.get('/login', loginController.loginRequestHandler);
  app.post('/login', loginController.loginControllerCallback);

  const tweedController = require('./controllers/tweed')(allModels);
  app.get('/tweed', tweedController.tweed);
  app.post('/tweed', tweedController.tweedControllerCallback);

  const homeController = require('./controllers/home')(allModels);
  app.get('/', homeController.homeControllerCallback);
};
