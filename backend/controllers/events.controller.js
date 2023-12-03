import Event from '../models/event.model.js'

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user : req.user.id }).populate("user");
    res.json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { name, address, description, date } = req.body;
    const newEvent = new Event({
      name,
      address,
      description,
      date,
      user: req.user.id,
    });
    await newEvent.save();
    res.json(newEvent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { name, address, description, date } = req.body;
    const eventUpdated = await Event.findOneAndUpdate(
      { _id: req.params.id },
      { name, address, description, date },
      { new: true }
    );
    return res.json(eventUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("user")
    if (!event) return res.status(404).json({ message: "Event not found" });
    return res.json(event);
  } catch (error) {
    return res.status(404).json({ message: "Event not found" });
  }
};
