import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"],
    },
    email: {
        type: String,
        required: [true, "please provide a email"],
    },
    contact: {
        type: String,
        required: [true, "please provide a number"],
    },
    password: {
        type: String,
        required: [true, "please provide an password"],
    },
})

const User = mongoose.models.users || mongoose.model(
    "users", userSchema
);

export default User;