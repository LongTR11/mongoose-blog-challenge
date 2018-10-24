const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const blogPostSchema = mongoose.Schema({
    title: String,
    content: String,
    author: 
        {firstName: String,
         lastName:  String},
    created: Date
});

const BlogPosts = mongoose.model('BlogPosts', blogPostSchema);

module.exports = {BlogPosts};