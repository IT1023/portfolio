import { Router } from "express";
import { contactController } from "../controllers/contact.controller.ts";

const router = Router();

router.post("/", contactController.incomingRequest);

export default router;
