



const  creatAuthor = async function (req,res) {
    const reqAuther = req.body;
    const SaveData = await authorModel.create(reqAuthor)
    res.send({msg: SaveData})
}