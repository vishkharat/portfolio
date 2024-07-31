import userModel from "../model/userModel.js";

// Controller for rendering the homepage
const homeController = async (req, res) => {
    try {
        res.render("index");
    } catch (error) {
        // Log errors to the console
        console.log(error.message);
    }
};

// Controller for handling contact form submissions
const ContactUserController = async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, subject, message } = req.body;

        // Validate that all fields are provided
        if (!name || !email || !subject || !message) {
            return res.status(400).send('All fields are required.');
        }

        // Create a new user document
        const newUser = new userModel({
            name,
            email,
            subject,
            message,
        });

        // Save the document to the database
        await newUser.save();
        console.log("User saved successfully");

        // Redirect to the homepage after successful submission
        res.redirect('/');
    } catch (error) {
        // Handle and log errors
        console.error('Error saving contact form data:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

export { homeController, ContactUserController };
