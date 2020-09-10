import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
import { query } from "express"


class MoonService {
  async find(query = {}) {
    return await dbContext.Moon.find(query).populate('moon')
  }
  async findById(id) {
    let moon = await dbContext.Moon.findById(id).populate('moon')
    if (!moon) {
      throw new BadRequest("invalid id")
    }
    return moon
  }

  async create(moon) {
    return await dbContext.Moon.create(moon)
  }

  async edit(update) {
    let updated = await dbContext.Moon.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }

  async delete(id) {
    let deleted = await dbContext.Moon.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }


}


export const moonService = new MoonService();