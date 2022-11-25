const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const roleController = require('../controllers/role-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middleware/auth-middleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/role', roleController.createRole);


router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', [authMiddleware, roleMiddleware('USER')], userController.getUsers);
router.get('/user/:id', authMiddleware, userController.getUser);
router.patch('/changeRole/:id', [authMiddleware, roleMiddleware('ADMIN')], userController.changeRole)

module.exports = router;