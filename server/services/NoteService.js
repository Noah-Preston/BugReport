import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
  async getNotesByBug(bugId) {
    return await _repository.find({ bugId });
  }
}

const noteService = new NoteService();
export default noteService;
