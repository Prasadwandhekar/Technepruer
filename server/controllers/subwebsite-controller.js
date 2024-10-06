const SubWebsite = require("../models/subwebsite-model");

const services =  async (req,res) => {
    try {
        const response = await SubWebsite.find();

        if(!response){
            //handle the case where no document was found
            res.status(404).json({msg:"No subWebsite found"});
        }
        return res.status(200).json({msg:"subWebsite found",data:response})
    } catch (error) {
        console.log(`error from the server ${error}`);
    }
}

module.exports = services;