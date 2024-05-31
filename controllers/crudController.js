const { Op } = require("sequelize");

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
    const offset = (page - 1) * limit;

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
      const { count, rows } = await this.model.findAndCountAll({
        where,
        limit: parseInt(limit),
        offset,
        order: [[sortBy, order]],
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json({
        data: rows,
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit),
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
      });
      if (!record) return res.status(404).json({ error: "Record not found" });
      const response = {
        data: record,
        message: "Record retrieved successfully",
      };
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const record = await this.model.create(req.body);
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
