
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/database.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route
app.get('/', (req, res) => {
  res.send('Grievance Redressal Portal Backend Running');
});

// TODO: Import and use routes here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
