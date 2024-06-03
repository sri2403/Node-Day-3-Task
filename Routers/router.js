import express from "express";
import { assignOrChangeMentor, assignStudentsToMentor, createMentor, createStudent, getAllMentorsList, getAllStudentsList, getStudentsForMentor, getStudentsWithoutMentor } from "../Controllers/controllers.js";
 

const router=express.Router()

router.get("/getAllStudentsList",getAllStudentsList)
router.get("/getAllMentorsList",getAllMentorsList)
router.use("/createStudent",createStudent)
router.use("/createMentor",createMentor)
router.use("/assignStudentsToMentor",assignStudentsToMentor)
router.get("/getStudentsWithoutMentor",getStudentsWithoutMentor)
router.use("/assignOrChangeMentor",assignOrChangeMentor)
router.get("/getStudentsForMentor",getStudentsForMentor)


export default router;