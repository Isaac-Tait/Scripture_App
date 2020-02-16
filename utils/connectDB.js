import mongoose from 'mongoose';
const connection = {}

function connectDB() {
    mongoose.connect(process.${{ secret.SuperSecret }})
}