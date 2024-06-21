const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config().parsed;

class CrudController {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    const {
      page = 1,
      limit = 10,
      sortBy = "id",
      order = "ASC",
      search = "",
      ...filters
    } = req.query;

    const parsedLimit = parseInt(limit);

    const searchCondition = search
      ? {
          [Op.or]: Object.keys(this.model.rawAttributes).map((key) => ({
            [key]: { [Op.like]: `%${search}%` },
          })),
        }
      : {};

    const filterConditions = Object.keys(filters).reduce((acc, key) => {
      acc[key] = { [Op.like]: `%${filters[key]}%` };
      return acc;
    }, {});

    const where = {
      ...searchCondition,
      ...filterConditions,
    };

    try {
      const queryOptions = {
        where,
        order: [[sortBy, order]],
        attributes: {
          exclude: ["password"],
        },
        include: [{ all: true, nested: true }],
      };

      if (parsedLimit !== 999) {
        const offset = (page - 1) * parsedLimit;
        queryOptions.limit = parsedLimit;
        queryOptions.offset = offset;
      }

      const { count, rows } = await this.model.findAndCountAll(queryOptions);

      const cleanedRecords = rows.map((record) => {
        const cleanedRecord = record.toJSON();
        if (this.model.name === "Product") {
          const isSavedByUser = cleanedRecord.users.some(
            (user) => user.id === req.user.id
          );
          cleanedRecord.isSavedByUser = isSavedByUser;
          delete cleanedRecord.users;
        }
        if (this.model.name === "User") {
          delete cleanedRecord.savedProducts;
        }
        if (this.model.name === "Brand" || this.model.name === "ProductType") {
          delete cleanedRecord.products;
        }
        return cleanedRecord;
      });

      res.status(200).json({
        data: cleanedRecords,
        total: count,
        page: parsedLimit !== 999 ? parseInt(page) : 1,
        pages: parsedLimit !== 999 ? Math.ceil(count / parsedLimit) : 1,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOne(req, res) {
    try {
      const record = await this.model.findByPk(req.params.id, {
        attributes: {
          exclude: ["password"],
        },
        include: [{ all: true, nested: true }],
      });
      if (!record) return res.status(404).json({ error: "Record not found" });

      const cleanedRecord = record.toJSON();

      if (this.model.name === "Product") {
        const isSavedByUser = cleanedRecord.users.some(
          (user) => user.id === req.user.id
        );
        cleanedRecord.isSavedByUser = isSavedByUser;
        delete cleanedRecord.users;
      }
      if (this.model.name === "User") {
        delete cleanedRecord.savedProducts;
      }
      if (this.model.name === "Brand" || this.model.name === "ProductType") {
        delete cleanedRecord.products;
      }

      const response = {
        data: cleanedRecord,
        message: "Record retrieved successfully",
      };
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(
          req.body.password,
          parseInt(dotenv.SALT_ROUND)
        );
      }
      if (this.model.name === "User") {
        // check email is used
        const user = await this.model.findOne({
          where: { email: req.body.email },
        });
        if (user)
          return res.status(400).json({ error: "Email is already used" });
      }
      const record = await this.model.create(req.body);
      delete record.dataValues.password;
      const response = {
        data: record,
        message: "Record created successfully",
      };
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      if (req.body.password) {
        req.body.password = await bcrypt.hash(
          req.body.password,
          parseInt(dotenv.SALT_ROUND)
        );
      }
      const [updated] = await this.model.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) return res.status(404).json({ error: "Record not found" });
      const updatedRecord = await this.model.findByPk(req.params.id, {
        attributes: {
          exclude: ["password"],
        },
      });
      const response = {
        data: updatedRecord,
        message: "Record updated successfully",
      };
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await this.model.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) return res.status(404).json({ error: "Record not found" });
      res.status(200).json({
        message: "Record deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CrudController;
