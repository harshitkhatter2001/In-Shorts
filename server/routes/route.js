import express from 'express';
import { getNews } from '../controller/news-controller.js';
const route = express.Router();


// router.get('/news',getNews)
route.get('/news', getNews);

export default route;