const authorModel = require('../models/authorModel')



const  creatAuthor = async function (req,res) {
    
    try{
    const reqAuther = req.body;
    const SaveData = await authorModel.create(reqAuthor)
    res.send({msg: SaveData})

    }

    catch(error){

        res.status(500).send(error.message)
}

}