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

blogPostSchema.pre('find', function(next) {
    this.populate('author');
    next();
})

blogPostSchema.pre('findOne', function(next) {
    this.populate('author');
    next();
});

blogPostSchema.virtual('authorName').get(function() {
    return `${this.author.firstName} ${this.author.lastName}`.trim();
  });
  
  blogPostSchema.methods.serialize = function() {
    return {
      id: this._id,
      author: this.authorName,
      content: this.content,
      title: this.title,
      comments: this.comments
    };
  };

const BlogPosts = mongoose.model('BlogPosts', blogPostSchema);

module.exports = {BlogPosts};