const eventService = require("../service/event-service");

class EventController {
  async add(req, res, next) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        throw res.status(400).json({
          status: "INVALID_DATA",
        });
      }
      const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      var { name, discription, redactors_id, stands_id } = req.body;

      const event = await ContextService.addContext(
        name,
        discription,
        redactors_id,
        user.id,
        stands_id
      );

      return res.json({ status: "OK", result: event });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new EventController();
