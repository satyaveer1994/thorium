const express = require("express");
const router = express.Router();

router.get("/students/:name", function (req, res) {
  let studentName = req.params.name;
  console.log(studentName);
  res.send(studentName);
});
//
router.get("/movies", function (req, res) {
  const movies = '["Fukrey","Delhi","Dabang","Rockstar","Suryawansh"]';
  res.send(movies);
});
//
router.get("/movies/:index", function (req, res) {
  const index = req.params.index;
  const movies = ["Fukrey", "Delhi", "Dabang", "Rockstar", "Suryawansh"];

  if (index > movies.length) {
    res.send("use a valid index");
  } else {
    res.send(movies[index -1]);
  }
});
//



router.get("/films", function (req, res) {
  const arrayOfFilms = [
    {
      id: 1,
      name: "Dune",
    },
    {
      id: 2,
      name: "Wall Street",
    },
    {
      id: 3,
      name: "Big Short",
    },
    {
      id: 4,
      name: "3 ediot",
    },
  ];
  res.send(arrayOfFilms);
});

router.get("/films/:filmId", function (req, res) {
  const arrayOfFilms = [
    {
      id: 1,
      name: "Dune",
    },
    {
      id: 2,
      name: "Wall Street",
    },
    {
      id: 3,
      name: "Big Short",

      
    },
    {
      id: 4,
      name: "3 ediot",
    },
  ];

  let value = req.params.filmId;
  let found = false;
  for (let i = 0; i < arrayOfFilms.length; i++) {
    if (arrayOfFilms[i].id == value) {
      found = true;
      res.send(arrayOfFilms[i]);
      break;
    }
  }
  if (found == false) {
    res.send("No movie with given index exists!");
  }
});

module.exports=router;
// router.get("/sol1",function (req,res){

// let numArray = [1,2,3,5,6,7]
// let n = 1+(numArray.length)
// let realSum = (n*(n+1))/2
// let diffSum = 0;
// for (i=0; i<numArray.length; i++){
//     diffSum += numArray[i];
// }
// let missingNum = realSum - diffSum;
// console.log('the missing number is : ', missingNum)
// res.send(missing)
// });


