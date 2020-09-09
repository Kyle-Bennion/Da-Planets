import GalaxySchema from "../models/Galaxy";
import mongoose from "mongoose";

class DbContext {
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  Star = mongoose.model("Star", StarSchema);

}

export const dbContext = new DbContext();
