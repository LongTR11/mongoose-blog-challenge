const mongoose = require('mongoose');

const { BlogPosts } = require('./models')


// getAll
function getAll(req,res) {
    //use the class method to retrieve data
    //be sure to return json in your requests as we are not using a templating view engine in this app
    BlogPosts.find().then(function(blogPosts) {
        res.json(blogPosts);
    });
}

// getOne
function getOne(req,res) {
    BlogPosts.findOne().then(function(blogPosts) {
        res.json(blogPosts);
    });
}

//post
function post(req,res) {
BlogPosts.create(req.body).then(function(blogPost) {
    res.json(blogPost);
    });
}

//put
function update(req, res) {
    BlogPosts.findOneAndUpdate(req.params.id, req.body, { new: true }, function(err, blogPost) {
        res.json(blogPost);
    });
}
// delete
function destroy(req, res) {
    BlogPosts.findOneAndRemove(req.params.id).then(function(blogPost) {
        res.json({message: "blog post terminated"});
    })
}

const BlogPostController = {
    getAll: getAll,
    create: post,
    update: update,
    destroy: destroy
};

module.exports = BlogPostController;