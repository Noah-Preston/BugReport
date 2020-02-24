import express from "express";
import bugService from "../services/BugService";
import noteService from "../services/NoteService";
import Bug from "../models/Bug";

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .get("/:id/notes", this.getNotesByBug)
  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id);
      return res.send(data);
    } catch (e) {
      next(e)
    }
  }
  async create(req, res, next) {
    try {
      let data = await bugService.create(req.body)
      res.status(201).send(data)
    } catch (e) {
      next(e)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await bugService.update(req.params.id, req.body);
      res.send(data);
    } catch (e) {
      next(e)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await bugService.delete(req.params.id);
      res.send(data);
    } catch (e) {
      next(e)
    }
  }
  async getNotesByBug(req, res, next) {
    try {
      let data = await noteService.getNotesByBug(req.params.id);
      return res.send(data);
    } catch (e) {
      next(e)
    }
  }
}
