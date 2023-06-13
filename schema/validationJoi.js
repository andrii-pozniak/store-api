const Joi = require("joi");

const joiProductAddSchema = Joi.object({
    categoryName: Joi.string().valid( "Елементи живлення",
    "Smart годинники",
    "Ліхтарі",
    "Аксесуари для смартфонів",
    "Bluetooth-колонки",
    "flashlight",
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
    "Провід").required(),
    name: Joi.string().min(2),
    codeProduct: Joi.number().min(0).required(),
    additionalCategory: Joi.array()
    .items(
      Joi.string()
        .valid(
          "Знижки",
          "Безкоштовно",
          "Кращі цінові пропозиції",
          "Хіти продаж",
          "Новинки"
        )
        .required()
    )
    .required(),
    status: Joi.string().min(8).max(120).required(),
    priceProduct: Joi.number().min(0),
    imageURL: Joi.string().required(),
  });

  module.exports = { joiProductAddSchema };