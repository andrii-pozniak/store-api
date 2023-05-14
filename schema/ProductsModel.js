const { Schema, model, ShemaTypes } = require("mongoose");

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
    default: "Елементи живлення",
    required: [true, "Category not find"],
  },
  name: {
    type: String,
    minLength: 2,
    maxLength: 16,
    //trim: true,
    match: [
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      "Only letters can be accepted",
    ],
    required: [true, "Name is required"],
  },
  imageURL: {
    type: String,
    required: [true, "PhotoURL is required"],
    default: "https://aussiedlerbote.de/wp-content/uploads/2022/04/mongrel.jpg",
  },
  available: {
    type: String,
  },
  additionalCategory: [
    "Знижки",
    "Безкоштовно",
    "Кращі цінові пропозиції",
    "Хіти продаж",
    "Новинки",
  ],
  code: {
    type: Number,
    min: 0,
  },
  price: {
    type: Number,
    min: 0,
  },
});

const Products = model("products", productSchema);

module.exports = { Products };
