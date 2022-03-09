const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const autho = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// Write a POST api /users to register a user from the user details in request body.
router.post("/users", userController.createUser  )
// Write a POST api /login to login a user that takes user details like email and password from the request body.
//  If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it in response body.
router.post("/login", userController.loginUser)

//The userId is sent by front end

// Write a GET api /users/<userId> to fetch user details. Pass the userId as path param in the url.
//  Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.
//The userId is sent by front end

router.get("/users/:userId",autho.auth, userController.getUserData)
// Write a PUT api /users/<userId> to update user details. Pass the userId as path param 
// in the url and update the attributes received in the request body. Check that request must 
// contain x-auth-token header. If absent, return a suitable error.
router.put("/users/:userId", autho.auth,userController.updateUser)
// Write a DELETE api /users/<userId> that takes the userId in the path params and marks 
// the isDeleted attribute for a user as true. Check that request must contain x-auth-token header.
//  If absent, return a suitable error.
router.delete("/users/:userId", autho.auth,userController.deleteUserData)

module.exports = router;