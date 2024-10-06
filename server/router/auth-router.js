const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers")
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validators");
const loginSchema = require("../validators/login-validators")
const authMiddleware = require("../middlewares/auth-middleware");
// const loginSchema =  require("../validators/auth-validators");  

//   router.get("/",(req,res) =>{
//     res.status(200).send("Welcome to mern stack project");
//   });

// router.route("/").get((req,res) =>{
//     res.status(200).send("Welcome to mern stack project");
//   });

    
router.route("/").get(authControllers.home);

router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);

router
  .route("/login")
  .post(validate(loginSchema),authControllers.login);

  router.route("/user").get(authMiddleware, authControllers.user);

  router.route("/user/:id").get(authMiddleware,authControllers.getUserById)

  router.route("/user/update/:id").patch(authMiddleware,authControllers.UpdateUserProfile)



  module.exports = router;
