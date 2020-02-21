import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const note = new Schema(
  {
    content: { type: String },
    bug: { type: ObjectId, ref: "bug" },
    reportedBy: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default note;
