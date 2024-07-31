import express from 'express';
import { homeController, ContactUserController } from '../controllers/homeController.js';

const routes = express.Router();

// Route for rendering the homepage (GET request)
routes.get('/', homeController);

// Route for handling contact form submissions (POST request)
routes.post('/contact', ContactUserController);

export default routes;
