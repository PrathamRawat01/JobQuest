import mongoose, { mongo } from "mongoose";
 const userSchema = new mongoose.Schema({
    name: { type: String ,required:true},
     email: { type: String, required: true },
     password: { type: String,  select: false },
    //  isAdmin: { type: Boolean, required: true  , default: false},
    googleId: {type:String},
 })

 export const User = mongoose.models?.User || mongoose.model("User" , userSchema);
