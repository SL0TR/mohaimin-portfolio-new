import { z } from "zod";
import { contactFormSchema } from "./schema";

export type ContactFormValues = z.infer<typeof contactFormSchema>;
