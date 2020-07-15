// will add api enpoint routes so CRUD can be used on the posts and admins


// need to add express router
const router = require('express').Router();

// need the moongoose model from model page
let Admin = require ('../models/Admins.model');




// first endpoint that handles http get req on the /admins url from server.js file "localhost:5000/admins/"
router.route('/').get((req, res) => {

// finds all admin in db and returns result in json
  Admin.find()
  // then all the users found in the db are then returned as admins to the client
  .then(admins => res.json(admins))
  // if err catches error and sends to client
  .catch(err => res.status(400).json('Error:' + err));
});





// scond endpoint handles http post request post request to 'localhost:3000/admins/add'
router.route('/add').post((req, res) => {
  // adminname that was parced through as the post request will be passed into adminame const
  const adminname = req.body.adminname;

// adminname const will be then used to creat new instance of Admin using then new Admin
  const newAdmin = new Admin({adminname});

// new admin is added to db with save method
  newAdmin.save()
  // then returns a json which is processed by the server and sent to client
  .then(() => res.json('Admin added!'))
  // if else return the error message
  .catch(err => res.status(400).json('Error:' + err));
});


// standard router exportign the touter
module.exports = router;
