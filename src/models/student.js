import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: {
      type: String,
      reqired: true,
    },

    grade: {
      type: Number,
      reqired: true,
    },

    ban: {
      type: Number,
      required: true,
    },

  },

  {
    versionKey: false,
  }
);

export default mongoose.model(`Student`, Student, `Student`);