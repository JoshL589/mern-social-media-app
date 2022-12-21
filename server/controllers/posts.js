import PostMessage from "../models/postMessage";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.send("THIS WORKS!");
};

export const createPost = (req, res) => {
  res.send("Post creation");
};
