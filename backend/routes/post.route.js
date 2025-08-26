import express from 'express';
import { createPost, deletePost, getPosts, getSinglePost } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.get('/:slug', getSinglePost)

export default router;