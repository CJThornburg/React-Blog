const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: String, required: true},
  blog:{ type: String, required: true},
  picURL:{type: String, required: false},
  date: { type: Date, required: true},

}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
