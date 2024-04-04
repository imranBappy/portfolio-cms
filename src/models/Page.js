const { Schema, model, models } = require("mongoose");

const PageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  texts: [
    {
      id: {
        type: Schema.Types.ObjectId,
      },
      content: String,
    },
  ],
  images: [
    {
      id: {
        type: Schema.Types.ObjectId,
      },
      url: String,
    },
  ],
});

const Page = models.Page || model("Page", PageSchema);
export default Page;
