import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async (DATABASEURL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'portfolio', // Specify the database name
        };
        // Connect to MongoDB
        await mongoose.connect(DATABASEURL, DB_OPTIONS);
        console.log('Connected to database');
    } catch (error) {
        // Handle connection errors
        console.error('Error connecting to database:', error.message);
    }
};

export default connectDB;
