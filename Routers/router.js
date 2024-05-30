import express from "express";
import { assignOrChangeMentor, assignStudentsToMentor, createMentor, createStudent, getAllMentorsList, getAllStudentsList, getStudentsForMentor, getStudentsWithoutMentor } from "../Controllers/controllers.js";
 

const router=express.Router()

router.get("/getAllStudentsList",getAllStudentsList)
router.get("/getAllMentorsList",getAllMentorsList)
router.post("/createStudent",createStudent)
router.post("/createMentor",createMentor)
router.post("/assignStudentsToMentor",assignStudentsToMentor)
router.get("/getStudentsWithoutMentor",getStudentsWithoutMentor)
router.post("/assignOrChangeMentor",assignOrChangeMentor)
router.get("/getStudentsForMentor",getStudentsForMentor)


export default router;