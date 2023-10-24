import { z } from "zod";

export const createEventSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  address: z.string({
    required_error: "Address is required"
  }),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
});