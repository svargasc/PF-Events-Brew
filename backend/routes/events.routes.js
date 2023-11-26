import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent
} from "../controllers/events.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createEventSchema } from "../schemas/event.schema.js";
import { register } from "../controllers/auth.controller.js";
import { registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.get("/events", auth, getEvents);

router.post("/events", auth, validateSchema(createEventSchema), createEvent);

router.get("/events/:id", auth, getEvent);

router.put("/events/:id", auth, updateEvent);

router.delete("/events/:id", auth, deleteEvent);

export default router;
