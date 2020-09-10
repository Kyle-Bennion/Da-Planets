import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
import { query } from "express"


class PlanetService {
  async find(query = {}) {
    return await dbContext.Planet.find(query).populate('planet')
  }
  async findById(id) {
    let planet = await dbContext.Planet.findById(id).populate('planet')
    if (!planet) {
      throw new BadRequest("invalid id")
    }
    return planet
  }

  async create(planet) {
    return await dbContext.Planet.create(planet)
  }

  async edit(update) {
    let updated = await dbContext.Planet.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }

  async delete(id) {
    let deleted = await dbContext.Planet.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }


}


export const planetService = new PlanetService();