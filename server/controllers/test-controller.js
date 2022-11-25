const testModel = require("../models/testModel");
const testService = require("../service/test-service");

class TestController {
  add = async (req, res, next) => {
    try {
      var { name, description } = req.body;
      const test = await testService.add(name, description);
      return res.json({ status: "OK", result: test });
    } catch (e) {
      next(e);
    }
  };
  change = async (req, res, next) => {
    try {
      const { id } = req.query;
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
      const { id } = req.query;
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
    const { id } = req.query;
    var test = [];
    if (!id) test = await testModel.find({});
    else test = await testModel.findOne({ _id: id });
    return res.json({ status: "OK", result: test });
  };
}

module.exports = new TestController();
