const { object, string } = require("yup");

module.exports = object({
  name: string().required("Name is required"),
  description: string(),
});
