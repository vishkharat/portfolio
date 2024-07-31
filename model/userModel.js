import mongoose from 'mongoose';

// Define the schema for user data
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

// Create a model based on the schema
const userModel = mongoose.model('User', userSchema);

export default userModel;
