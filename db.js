const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongooseURI = process.env.DB_URI;

const Schema = mongoose.Schema;
const userSchemaCw = new Schema({
    id: {
        type: String,
        required: true,
    },
    xp: {
        type: Number,
        default: 0,
    },
    maxXp: {
        type: Number,
        default: 30,
    },
    totalXp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
});
const userSchemaWh = new Schema({
    id: {
        type: String,
        required: true,
    },
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
});
const UserCw = mongoose.model("cwlvl", userSchemaCw);
const UserWh = mongoose.model("lvl", userSchemaWh);

let isConnected = false;

async function connectDB() {
    if (isConnected) return;

    try {
        await mongoose.connect(mongooseURI);
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = { connectDB, UserCw, UserWh };
