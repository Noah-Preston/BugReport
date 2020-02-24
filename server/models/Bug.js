import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bug = new Schema(
  {
    closed: { type: Boolean },
    title: { type: String, required: true },
    description: { type: String, required: true },
    reportedBy: { type: String },
    closedDate: { type: Date },
    lastModified: { type: Date, default: Date.now }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default bug;


