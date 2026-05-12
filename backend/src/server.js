require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();

//
// Middleware
//
app.use(cors());

app.use(express.json());

//
// MongoDB
//
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

//
// Routes
//
app.use('/api/auth', authRoutes);