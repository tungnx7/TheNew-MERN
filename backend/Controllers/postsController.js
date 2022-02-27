import { postModel } from "../Models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new postModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await postModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );
  } catch (err) {
    req.status(500).json(err);
  }
};
