const Internship = require("../models/Intership-model");

const getAllInternship =  async (req,res) => {
    try {
        const response = await Internship.find();

        if(!response){
            //handle the case where no document was found
            res.status(404).json({msg:"No Internship found"});
        }
        return res.status(200).json({msg:"internship found",data:response})
    } catch (error) {
        console.log(`error from the server ${error}`);
    }
}

const getInternshipById = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await Internship.findOne({ _id: id });
        return res.status(200).json(data);
      } catch (error) {
        console.log(`error from the server ${error}`);
      }
}


module.exports = {getAllInternship,getInternshipById };  