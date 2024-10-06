const express = require("express")
const router = express.Router();
const adminControllers = require("../controllers/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware"); 
const adminMiddleware = require("../middlewares/admin-middleware")

router.route("/user").get(authMiddleware ,adminMiddleware, adminControllers.getAllUsers);
router.route("/contacts").get(authMiddleware ,adminMiddleware, adminControllers.getAllContacts)
  
router.route("/user/:id").get(authMiddleware,adminMiddleware,adminControllers.getUserById);
router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,adminControllers.updateUserById);
router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,adminControllers.deleteUserById)


router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminControllers.deleteContactById)


router.route("/service").get(authMiddleware,adminMiddleware,adminControllers.getAllServices)
router.route("/service/delete/:id").delete(authMiddleware,adminMiddleware,adminControllers.deleteServiceById);
router.route("/service/:id").get(authMiddleware,adminMiddleware,adminControllers.getServiceById)
router.route("/service/update/:id").patch(authMiddleware,adminMiddleware,adminControllers.UpdateServiceById)

router.route("/service/add").post(authMiddleware,adminMiddleware,adminControllers.CreateService)

      
  
module.exports = router;

