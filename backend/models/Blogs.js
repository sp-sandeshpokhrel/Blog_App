const { Schema, model, models } = require("mongoose");

const BlogSchema = new Schema({
  title: { type: String, required: [true, "Title is required"] },
  content: { type: String, required: [true, "Content is required"] },
  image: String,
  tags: [String],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = models.Blogs || model("Blogs", BlogSchema);
