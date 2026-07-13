import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://reactapp_db_user:food26del1234@cluster0.ufp8o9x.mongodb.net/food-del').then(() =>console.log("DB Connected"));
}