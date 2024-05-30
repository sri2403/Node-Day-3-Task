import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import router from "./Routers/router.js";
dotenv.config()
const PORT = process.env.PORT || 3000;

const app=express();
app.use(express.json())
app.use(cors({
    origin:"*",
    methods:["POST","PUT","GET","DELETE"],
    credentials:true
}))
connectDB();
app.get("/",(req,res)=>{
    res.status(200).send(`
    <h1>Node.js - Assigning Mentor and Students with Database</h1>
    <p>Welcome to our API for managing students and mentors. Below are the available endpoints:</p>
    <ul>
        <li>
            <strong>/api/getAllStudentsList</strong> - Retrieve a list of all students in the database.
        </li>
        <li>
            <strong>/api/getAllMentorsList</strong> - Retrieve a list of all mentors in the database.
        </li>
        <li>
            <strong>/api/createStudent</strong> - Create a new student record in the database.
        </li>
        <li>
            <strong>/api/createMentor</strong> - Create a new mentor record in the database.
        </li>
        <li>
            <strong>/api/assignStudentsToMentor</strong> - Assign students to a specific mentor.
        </li>
        <li>
            <strong>/api/getStudentsWithoutMentor</strong> - Get a list of students who don't have a mentor assigned currently.
        </li>
        <li>
            <strong>/api/assignOrChangeMentor</strong> - Assign or change the mentor for a specific student.
        </li>
        <li>
            <strong>/api/getStudentsForMentor</strong> - Retrieve a list of students assigned to a particular mentor.
        </li>
    </ul>
`);
})   
app.use("/api",router);

app.listen(PORT,()=>{
    console.log("App is listening to the port");
})