const { ObjectId } = require("mongodb");
const taskModel = require("../models/taskModel");
const testModel = require("../models/testModel");
const variantModel = require("../models/variantModel");

class TaskService {
  add = async (test_id, title, description, type, variants) => {
    try {
      if (!test_id) {
        throw {
          status: "INVALID_DATA",
        };
      }

      const variants_id = await Promise.all(
        variants.map(async (variantObj) => {
          let variant = new variantModel({
            value: variantObj.value,
            isAnswer: variantObj.isAnswer,
          });
          await variant.save();
          return variant._id;
        })
      );

      const task = new taskModel({
        title,
        description,
        type,
        variants_id,
      });

      await task.save();

      const candidateTest = await testModel.findById(test_id);

      if (!candidateTest) {
        throw {
          status: "INVALID_DATA",
        };
      }

      await candidateTest.updateOne({
        $addToSet: { tasks_id: new ObjectId(task._id) },
      });
      return { task: task };
    } catch (e) {
      return [];
    }
  };

  change = async (id, title, description, type) => {
    try {
      const candidate = await taskModel.findOne({ _id: id });

      if (!candidate) {
        throw {
          status: "INVALID_DATA",
        };
      }

      await candidate.updateOne({ title, description, type });

      return candidate;
    } catch (e) {
      return [];
    }
  };

  delete = async (id) => {
    try {
      const candidateTask = await taskModel.findOne({ _id: id });

      if (!candidateTask) {
        throw {
          status: "INVALID_DATA",
        };
      }

      const candidateTest = await testModel.findOne({
        $pull: { tasks_id: candidateTask._id },
      });

      await candidateTask.deleteOne({ _id: id });

      return { task: candidateTask };
    } catch (e) {
      return [];
    }
  };
}

module.exports = new TaskService();
