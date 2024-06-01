const {object, string, date, mixed} = require("yup");

module.exports = object({
  name: string().required("Name is required"),
  password: string().required("Password is required"),
  email: string().email("Must be a valid Email").required("Email is required"),
  gender: mixed().oneOf(['male', 'female']).defined(),
  birthdate: date(),
  profile_picture: string().url("Must be a valid URL")
});