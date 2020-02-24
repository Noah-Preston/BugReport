import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async update(id, update) {
    let newBug = this.getById(id);
    if (newBug.closed === false) {
      return await _repository.findByIdAndUpdate(id, update, { new: true });
    } else { return "This bug is closed" }
  }
  async delete(id) {
    let update = { closed: true };
    this.update(id, update);
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
}

const bugService = new BugService();
export default bugService;
