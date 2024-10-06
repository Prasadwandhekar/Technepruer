const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model")
//All getAllUsers Logic
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//All getAllContact logic

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);

    if (!contacts || contacts.length == 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// Get UserDelete Logic

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// Get Single User Logic

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//update user Logic

const updateUserById = async (req, res) => {
    try{
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({_id:id} , {$set:updatedUserData,});

        return res.status(200).json(updatedData);
    }
    catch(error){
        next(error);
    }
};

// deleteContactById
  

const deleteContactById = async (req, res) => {    
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
      
  } catch (error) {
    next(error);
  }
};


//get All Services 
const getAllServices = async (req ,res) => {
  try {
    const contacts = await Service.find();
    console.log(contacts);

    if (!contacts || contacts.length == 0) {
      return res.status(404).json({ message: "No Service Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
}

//get single Service by ID 
const deleteServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: "Service Deleted Successfully" });
      
  } catch (error) {
    next(error);
  }
}

const getServiceById = async (req,res) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}


const UpdateServiceById = async (req,res) => {
  try{  
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await Service.updateOne({_id:id} , {$set:updatedUserData,});

    return res.status(200).json(updatedData);
}
catch(error){
    next(error);
}
}

const CreateService = async (req,res) => {
  const { service, provider, price, description } = req.body;

  try {
    const newService = new Service({
      service,
      provider,
      price,
      description,
    });

    await newService.save();

    res.status(201).json({message: 'Service created successfully',service: newService,});
  } catch (error) {
    next(error);
    console.error('Error creating service:', error);
    res.status(500).json({
      message: 'Failed to create service',
      error: error.message,
    });
  }
}


module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,  
  getUserById,
  updateUserById,
  deleteContactById,
  getAllServices,  
  deleteServiceById,
  getServiceById,
  UpdateServiceById,
  CreateService,
};
