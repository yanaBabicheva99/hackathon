const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const roleController = require("../controllers/role-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth-middleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const testController = require("../controllers/test-controller");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/role", roleController.createRole);

router.post("/tests", testController.add);

router.put("/tests", testController.change);

router.delete("/tests", testController.delete);

router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get(
  "/users",
  [authMiddleware, roleMiddleware("ADMIN")],
  userController.getUsers
);
router.get("/user/:id", authMiddleware, userController.getUser);

router.get("/tests", testController.get);

module.exports = router;
