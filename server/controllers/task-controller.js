const { ObjectId } = require("mongodb");
const taskModel = require("../models/taskModel");
const variantModel = require("../models/variantModel");
const taskService = require("../service/task-service");

class TaskController {
  add = async (req, res, next) => {
    try {
      const { test_id, title, description, type, variants } = req.body;
      const task = await taskService.add(
        test_id,
        title,
        description,
        type,
        variants
      );
      return res.json({ status: "OK", result: task });
    } catch (e) {
      next(e);
    }
  };
  change = async (req, res, next) => {
    try {
      const { id } = req.params;
      const candidate = await taskModel.findOne({ _id: id });
      if (!candidate)
        throw res.status(400).json({
          status: "INVALID_DATA",
        });
      const { title, description, type } = req.body;
      const task = await taskService.change(id, title, description, type);

      return res.json({ status: "OK", result: task });
    } catch (e) {
      next(e);
    }
  };
  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const candidate = await taskModel.findOne({ _id: id });
      if (!candidate)
        throw res.status(400).json({
          status: "INVALID_DATA",
        });
      candidate.variants_id.map(async (variantObj) => {
        const variant = await variantModel.findOne({
          _id: new ObjectId(variantObj._id),
        });
        await variant.delete();
      });

      const task = await taskService.delete(candidate._id);
      return res.json({ status: "OK", result: task });
    } catch (e) {
      next(e);
    }
  };

  get = async (req, res, next) => {
    const { id } = req.query;
    var task = [];
    if (!id) task = await taskModel.find({});
    else task = await taskModel.findOne({ _id: id });
    return res.json({ status: "OK", result: task });
  };
}

module.exports = new TaskController();
