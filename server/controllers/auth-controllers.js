// *----------------------
//* Controllers
// *----------------------

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

  

// *-------------------
// Home Logic
// *-------------------
const home = async (req, res) => {  
  try {  
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {      
    console.log(error);
  }  
};

// *-------------------------------  
//* User Registration Logic 📝
// *-------------------------------
// 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

const register = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    // res.status(201).json({ message: "User registered successfully" });
    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  } 
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login request received with email:', email);
  
    const userExist = await User.findOne({ email });

    if (!userExist) {
      console.log('User not found with email:', email);
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log('User found:', userExist);


    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    console.log('Password valid:', isPasswordValid);

    if (isPasswordValid) {
      const token = await userExist.generateToken();
      console.log('Token generated:', token);

      res.status(200).json({
        message: "Login Successful",
        token: token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password " });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// *-------------------
// User Logic
// *-------------------

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
      
    console.log(` error from user route ${error}`);
  }
};  

const getUserById = async (req,res) => {
  try {  
               
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    if (!data) {
      return res.status(404).json({ message: 'User not found' });  
    }  
    return res.status(200).json(data);
  } catch (error) {
    next(error);
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
}
  
const UpdateUserProfile = async (req,res) => {
  try {
    const { username, email, phone } = req.body; //needed then add password

    // Validation logic (if required)
    if (!username || !email || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username;
    user.email = email;
    user.phone = phone;
    // if (password) {
    //   user.password = password; // Assuming the password is already hashed
    // }

    await user.save();
    res.json(user);
  } catch (error) {          
    next(error)
    res.status(500).json({ message: error.message });
  }
}

module.exports = { home, register, login ,user ,getUserById,UpdateUserProfile};  