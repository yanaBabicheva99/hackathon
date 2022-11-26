const taskModel = require("../models/taskModel");
const testModel = require("../models/testModel");
const variantModel = require("../models/variantModel");
const testService = require("../service/test-service");

class TestController {
  add = async (req, res, next) => {
    try {
      const { name, description } = req.body;
      const test = await testService.add(name, description);
      return res.json({ status: "OK", result: test });
    } catch (e) {
      next(e);
    }
  };
  change = async (req, res, next) => {
    try {
      const { id } = req.params;
      const candidate = await testModel.findOne({ _id: id });
      if (!candidate)
        throw res.status(400).json({
          status: "INVALID_DATA",
        });
      const { name, description, tasks_id } = req.body;
      const test = await testService.change(id, name, description, tasks_id);

      return res.json({ status: "OK", result: test });
    } catch (e) {
      next(e);
    }
  };
  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const candidate = await testModel.findOne({ _id: id });
      if (!candidate)
        throw res.status(400).json({
          status: "INVALID_DATA",
        });
      const test = await testService.delete(candidate._id);
      return res.json({ status: "OK", result: test });
    } catch (e) {
      next(e);
    }
  };

  get = async (req, res, next) => {
    try {
      const { id } = req.query;
      let test = [];
      if (!id) test = await testModel.find({});
      else {
        test = await testModel.findOne({ _id: id });
        const arrTasks = await Promise.all(
          test.tasks_id.map(async (task_id) => {
            const candidateTask = await taskModel.findOne({ _id: task_id });
            const variants = await Promise.all(
              candidateTask.variants_id.map(async (variant_id) => {
                const candidateVariant = await variantModel.findOne({
                  _id: variant_id,
                });
                return candidateVariant;
              })
            );
            return {
              _id: candidateTask._id,
              title: candidateTask.title,
              description: candidateTask.description,
              type: candidateTask.type,
              variants: variants,
            };
          })
        );
        let result = {
          name: test.name,
          description: test.description,
          tasks: arrTasks,
        };
        return res.json({ status: "OK", result });
      }
      return res.json({ status: "OK", result: test });
    } catch (e) {
      next(e);
    }
  };
}

module.exports = new TestController();
