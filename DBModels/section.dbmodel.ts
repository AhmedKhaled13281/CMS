import mongoose, { model, Schema, models } from "mongoose";
delete (mongoose.connection as any)?.models["Page"];

const SectionSchema = new Schema({
  sectionName : {type : String , required : true},
  components: { type: Object, required: true },
  styles: { type: Array, required: true },
  html: { type: Array, required: true },
  css: { type: String, required: true },
});

export const section = models.Section || model("Section", SectionSchema);
