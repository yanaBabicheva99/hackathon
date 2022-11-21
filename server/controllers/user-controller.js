const userService = require('../service/user-service');

class UserController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData);
    } catch(err) {
      console.log(err);
    }
  }

  async login(req, res, next) {

  }

  async logout(req, res, next) {

  }

  async activate(req, res, next) {

  }

  async refresh(req, res, next) {

  }

  async getUser(req, res, next) {
    try {
      res.json(['123'])
    } catch(err) {

    }
  }
}

module.exports = new UserController();