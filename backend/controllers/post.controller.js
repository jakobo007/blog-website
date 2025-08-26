import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPost = async (req, res) => {
    const newPost = new Post(req.body)
    const post = await newPost.save();
    res.status(200).json(post)
}

export const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
}

export const getSinglePost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug});
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
}

export const deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully", post });
}