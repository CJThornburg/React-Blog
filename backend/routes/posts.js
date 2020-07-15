// will add api enpoint routes so CRUD can be used on the posts and admins
const router = require('express').Router();


let Post = require('../models/posts.model');


router.route('/').get((req, res) => {

// finds all admin in db and returns result in json
  Post.find()
  // then all the users found in the db are then returned as admins to the client
  .then(posts => res.json(posts))
  // if err catches error and sends to client
  .catch(err => res.status(400).json('Error:' + err));
});


router.route('/add').post((req, res) => {
  const title = req.body.title;
  const blog = req.body.blog;
  const date = Date.parse(req.body.date);


const newPost = new Post ({
title,
blog,
date,
});

newPost.save()
.then(() => res.json('Post added'))
.catch(err => res.status(400).json('Error: ' + err));
});


// get request
// if you go to the route it pulls info from db that has that id
router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
// once we get that from db id we ill returned to client it as json
  .then(post => res.json(post))
  // or if fails we will return to the client the error
  .catch(err => res.status(400).json ('Error: ' + err));
})


// delete request
router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
  .then(() => res.json('Post deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});


// update post route
router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)

  // then update these with the newly passed info,
  // THIS WILL NEE TO BE CHANGED !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // SO ONLY SOME FIELDS ARE UPDATED UNLESS IT CAN KEEP ITS OLD VALUE
  .then(post => {
    post.title = req.body.title;
    post.blog = req.body.blog;
    post.picURL = req.body.picURL;
    post.date = Date.parse(req.body.date);

    post.save()
    .then(() => res.json('Post updated'))
    .catch(err => res.status(400).json('Error: ' + err));
  })
  // if it failed to find post with that id
  .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;
