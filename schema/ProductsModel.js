const { Schema, model, SchemaTypes } = require("mongoose");
const { handleMongooseError } = require("../helpers/");

const productSchema = new Schema({
  categoryName: {
    type: String,
    enum: [
      "Елементи живлення",
      "Smart годинники",
      "Аксесуари для смартфонів",
      "Bluetooth-колонки",
      "Ліхтарі",
      "Навушники",
      "Відеоспостереження",
      "Авто електроніка",
      "Наручні годинники",
      "Годинники електронні",
      "Ваги",
      "Калькулятори",
      "Тестери",
      "Термометри",
      "Туризм",
      "Розпродаж",
      "Провід",
    ],
    default: "Ліхтарі",
    required: [true, "Category not find"],
  },
  name: {
    type: String,
    minLength: 2,
    // maxLength: 16,
    //trim: true,
    // match: [
    //   /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
    //   "Only letters can be accepted",
    // ],
    required: [true, "Name is required"],
    default: "Ліхтар 416-XPE, ЗУ USB, вбудований акумулятор, zoom",
  },
  imageURL: {
    type: String,
    required: [true, "PhotoURL is required"],
    default: "https://www.mediafire.com/view/g6z47yt8k23p538/image_3_%252820%2529.png/file",
  },
  available: {
    type: String,
  },
  // owner: {
  //   type: SchemaTypes.ObjectId,
  //   ref: "user",
  // },
  additionalCategory: {
    type: [Schema.Types.Mixed],
    validate: {
      validator: function (value) {
        const validCategories = [
          "Знижки",
          "Безкоштовно",
          "Кращі цінові пропозиції",
          "Хіти продаж",
          "Новинки",
        ];
        return value.every((category) => validCategories.includes(category));
      },
      message: "Invalid category",
    },
    default: [],
    required: [true, "Category not found"],
  },
  codeProduct: {
    type: Number,
    required: true,
    default: 1689552,
  },
  priceProduct: {
    type: Number,
    required: true,
    default: 300,
  },
  status: {
    type: String,
    required: [true, "status is required"],
  }
});

productSchema.post("save", handleMongooseError);

const Product = model("product", productSchema);

module.exports = { Product };
