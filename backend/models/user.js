import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  perfil: String,
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
