const EventModel = require("../models/eventModel");

class EventService {
  //   add = async (name, discription, redactors_id, creator_id, stands_id) => {
  //     try {
  //       if (!name || !creator) {
  //         throw {
  //           status: "INVALID_DATA",
  //           messages: [{ description: errorsMSG.NO_EMPTY }],
  //         };
  //       }
  //       const event = new Event({
  //         name,
  //         discription,
  //         redactors_id,
  //         creator_id,
  //         stands_id,
  //       });
  //       await event.save();
  //       return event;
  //     } catch (e) {
  //       return [];
  //     }
  //   };
  //   change = async (name, discription, redactors_id, creator_id, stands_id) => {
  //     try {
  //       const candidate = await EventModel.findOne({ _id: id });
  //       if (!candidate) {
  //         throw {
  //           status: "INVALID_DATA",
  //           messages: [{ description: errorsMSG.NOT_Z }],
  //         };
  //       }
  //       await candidate.updateOne({ name, creator, tasks, performers });
  //       return candidate._id;
  //     } catch (e) {
  //       return [];
  //     }
  //   };
  //   delete = async (id) => {
  //     try {
  //       const candidate = await EventModel.findOne({ _id: id });
  //       if (!candidate) {
  //         throw {
  //           status: "INVALID_DATA",
  //           messages: [{ description: errorsMSG.NOT_Z }],
  //         };
  //       }
  //       await candidate.deleteOne({ _id: id });
  //       return candidate._id;
  //     } catch (e) {
  //       return [];
  //     }
  //   };
}
