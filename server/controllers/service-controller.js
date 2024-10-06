const Service = require("../models/service-model");

const services =  async (req,res) => {
    try {
        const response = await Service.find();

        if(!response){
            //handle the case where no document was found
            res.status(404).json({msg:"No services found"});
        }
        return res.status(200).json({msg:"Services found",data:response})
    } catch (error) {
        console.log(`error from the server ${error}`);
    }
}

module.exports = services;