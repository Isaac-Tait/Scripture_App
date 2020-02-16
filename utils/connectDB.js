import mongoose from 'mongoose';
const connection = {}

function connectDB() {
    mongoose.connect(process.${{ secret.SuperSecret }})
}

// https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets