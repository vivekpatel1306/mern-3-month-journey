import { createNote, deleteNote, readAll, readOne, update } from "../controllers/crud.js";
import express from "express"
const router=express.Router();
router.post("/",createNote)
router.get("/",readAll)
router.get("/:id",readOne)
router.put("/:id",update)
router.delete("/:id",deleteNote)
export default router