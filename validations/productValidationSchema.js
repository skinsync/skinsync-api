const {object, string, mixed, number} = require("yup");

module.exports = object({
  brand_id: number().required("Brand ID is required"),
  product_type_id: number().required("Product Type ID is required"),
  name: string().required("Name is required"),
  description: string(),
  skintype: mixed().oneOf(['oily', 'dry', 'normal', 'combination']).defined(),
  url: string().url("Must be a valid URL").required("URL is required"),
  picture: string().url("Must be a valid URL"),
  priority: number().required("Priority is required"),
});