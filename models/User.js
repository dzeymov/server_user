import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Имя обязательно для заполнения"],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "Фамилия обязательна для заполнения"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Возраст обязателен для заполнения"],
    min: 12,
  },
});

export default mongoose.model("User", UserSchema);
