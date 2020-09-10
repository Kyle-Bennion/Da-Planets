import express from "express";
import BaseController from "../utils/BaseController";
import { moonService } from "../services/MoonService";

export class MoonsController extends BaseController {
  constructor() {
    super("api/moons")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let data = await moonService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await moonService.findById(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await moonService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await moonService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await moonService.delete(req.params.id)
      res.send("Ahh HAHAHA Deleted")
    } catch (error) {
      next(error)
    }
  }

}
