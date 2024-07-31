import express from 'express';
import routes from './routes/routes.js';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './db/connectDB.js';

const app = express();
const port = 7000;
const DATABASEURL = process.env.DATABASE_URL || 'mongodb+srv://vishdcosta:L8YtCLGOgmoh4URU@portfolio.xl1tvhu.mongodb.net/portfolio';

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to the MongoDB database
connectDB(DATABASEURL);

// Serve static files from the 'public' directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use the routes defined in 'routes.js'
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
