const { object, string } = require("yup");

module.exports = object({
  title: string().required("Title is required"),
  description: string(),
  picture: string().url("Must be a valid URL"),
  url: string().url("Must be a valid URL").required("URL is required"),
});
