import express from "express";
import { getFeedPosts, createPost, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getFeedPosts);

/* CREATE */
router.post("/create", createPost);
/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
