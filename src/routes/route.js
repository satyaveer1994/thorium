const express = require("express");
const router = express.Router();

router.get("/students/:name", function (req, res) {
  let studentName = req.params.name
  console.log(studentName);
  res.send(studentName);
})
//
router.get("/movies", function (req, res) {
  const movies =('["Fukrey","Delhi","Dabang","Rockstar","Suryawansh"]')
res.send(movies);
});
//
router.get("/movies/:index", function (req, res) {
  const movie = ["Fukrey", "Delhi", "Dabang", "Rockstar", "Suryawansh"];
  let value = req.parama.movieId
  if (index>movies.length) {
    res.send("use a valid index");
  } else {
    res.send(movies[index-1]);
  }
})
//

router.get('/film',function(req,res){
  
  const film =([{id:1,name:'The Shining'},{id:2,name:'Incendies'},{id:3,name:'Rang de Basanti'},{id:4,name:'puspa'}])
  res.send(film);
});






//

router.get('/films/:filmId',function (req,res){
  const filmId=req.params.filmId
    const filmId= [{Id: 1,name:'The Shining'},{Id: 2, name:'Incendies'},{Id: 3, name:'Rang de Basanti'},{Id:4, name:'puspa'}]
  
if (filmId>film.length){
  res.send("No movie exists with this id")
}else{
  res.send(film[filmId-1]);
}




    });





module.router.express;
