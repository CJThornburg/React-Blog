const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: String, required: true},
  post:{ type: String, required: true},
  picURL:{type: String, required: false},

}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
