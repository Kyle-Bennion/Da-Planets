import GalaxySchema from "../models/Galaxy";
import mongoose from "mongoose";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";

class DbContext {
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  Star = mongoose.model("Star", StarSchema);
  Planet = mongoose.model("Planet", PlanetSchema);
  Moon = mongoose.model("Moon", MoonSchema);


}

export const dbContext = new DbContext();
