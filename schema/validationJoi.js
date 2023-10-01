const Joi = require("joi");
const nameRegexp = /^[a-zA-Zа-яА-ЯіІїЇґҐ]/;
const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]*$/;
const passwordRegexp = /^[a-zA-Z0-9а-яА-Я]+$/;

const joiProductAddSchema = Joi.object({
  categoryName: Joi.string()
    .valid(
      "Елементи живлення",
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
      "Провід"
    )
    .required(),
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

const joinUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  phone: Joi.number().min(7).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passwordRegexp).min(5).max(20).required(),
});

const joinLoginSchema = Joi.object({
  
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().pattern(passwordRegexp).min(5).max(20).required(),
});
module.exports = {
  joiProductAddSchema,
  joinUserSchema,
  joinLoginSchema
};
