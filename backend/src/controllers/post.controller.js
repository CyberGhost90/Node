import { Post } from "../models/post.model.js";

//create a post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      {
        return res
          .status(400)
          .json({ message: "Please provide all required fields" });
      }
      const post = await Post.create({ name, description, age });
      res.status(201).json({ message: "Post created successfully", post });
    }
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

const getPosts = async (req, res) => {
  try {
    const getPost = await Post.find();
    res.status(200).json({ message: "Posts retrieved successfully", getPost });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving posts", error });
  }
};

const updatePost = async (req, res) => {
  try {
    //basic validation
    if (object.keys(req.body).Length === 0) {
      return res.status(400).json({ messasge: "No data provided for update" });
    }
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({ messgae: "Post not found" });
    }
    res.status(200).json({ messgae: "Post updated succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating posts", error });
  }
};

const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deletet) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating posts", error });
  }
};
export { createPost, getPosts, updatePost, deletePost };
