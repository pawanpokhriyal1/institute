require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const registerRoutes=require('./routes/register')
const app = express();
const PORT = process.env.PORT || 8000;

// connect to mongoDb

mongoose.connect(process.env.MONGODB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 10s
    socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
    .then(() => console.info('Connected to mongoDb'))
    .catch(e => console.error('Mongo connection error', e))


//middleware
app.use(helmet());
app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
    console.info(`Received ${req.method} request to ${req.url}`);
    console.info(`Request body ,${req.body}`);
    next();
})


// register form route
app.use("/register",registerRoutes);

async function startServer() {
    try {
        app.listen(PORT, () => {
            console.info(`Post service running on port ${PORT}`);
        })

    } catch (error) {
        console.error('Failed to connect to server', error);
        process.exit(1);
    }
}

startServer();

