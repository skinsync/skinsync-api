const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const { sequelize } = require('./models');

const {
  loadPredictionModel,
  loadRecommendationModel,
} = require("./services/loadModel");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const articlesRouter = require("./routes/articles");
const brandsRouter = require("./routes/brands");
const productTypesRouter = require("./routes/productTypes");
const productsRouter = require("./routes/products");
const filesRouter = require("./routes/files");
const utilsRouter = require("./routes/utils");
const profileRouter = require("./routes/profile");
const savedProductsRouter = require("./routes/savedProducts");
const predictRouter = require("./routes/predict");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3300;

sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
}).catch(err => {
  console.error('Database synchronization error:', err);
});

let predictionModel;
let recommendationModel;

(async () => {
  predictionModel = await loadPredictionModel();
  recommendationModel = await loadRecommendationModel();
  app.locals.predictionModel = predictionModel;
  app.locals.recommendationModel = recommendationModel;
})();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/articles", articlesRouter);
app.use("/brands", brandsRouter);
app.use("/product-types", productTypesRouter);
app.use("/products", productsRouter);
app.use("/files", filesRouter);
app.use("/utils", utilsRouter);
app.use("/profile", profileRouter);
app.use("/saved-products", savedProductsRouter);
app.use("/predict", predictRouter);

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
});
