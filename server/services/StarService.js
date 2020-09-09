import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
import { query } from "express"


class StarService {
  async find(query = {}) {
    return await dbContext.Star.find(query).populate('star')
  }
  async findById(id) {
    let star = await dbContext.Star.findById(id).populate('star')
    if (!star) {
      throw new BadRequest("invalid id")
    }
    return star
  }

  async create(star) {
    return await dbContext.Star.create(star)
  }

  async edit(update) {
    let updated = await dbContext.Star.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }

  async delete(id) {
    let deleted = await dbContext.Star.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }


}


export const starService = new StarService();