import {Mentor, Student } from "../Models/schema.js";

// 1. create mentor
export const createMentor=async(req,res)=>{
    try {
        const newMentor=new Mentor(req.body)
        await newMentor.save();
        res.status(200).json({message:"Mentor created successfully",result:newMentor})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({maessage:"Error ocured in creating mentor"})
    }
}

// 2. create student
export const createStudent=async(req,res)=>{
    try {
        const newStudent=new Student(req.body)
        await newStudent.save();
        res.status(200).json({message:"Student created successfully",result:newStudent})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({maessage:"Error ocured in creating student"})
    }
}

//3.Write API to Assign a student to Mentor

// i) Select one mentor and Add multiple Student 

export const assignStudentsToMentor = async (req, res) => {
    const { mentorId, studentIds } = req.body;

    try {
        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({ message: "Mentor not found" });
        }
        const students = await Student.find({ _id: { $in: studentIds } });
        students.forEach(student => {
            student.mentor = mentorId;
            student.save();
        });
        mentor.students = mentor.students.concat(studentIds);
        await mentor.save();

        res.status(200).json({ message: "Students assigned to mentor successfully", mentor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred in assigning students to mentor" });
    }
};

// ii) A student who has a mentor should not be shown in List

export const getStudentsWithoutMentor = async (req, res) => {
    try {
        const students = await Student.find({ mentor: null });
        res.status(200).json(students);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred in retrieving students without mentor" });
    }
};


// 4.Write API to Assign or Change Mentor for particular Student

export const assignOrChangeMentor = async (req, res) => {
    const { studentId, mentorId } = req.body;

    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({ message: "Mentor not found" });
        }

        if (student.mentor) {
            const currentMentor = await Mentor.findById(student.mentor);
            if (currentMentor) {
                currentMentor.students.pull(studentId);
                await currentMentor.save();
            }
        }
        student.mentor = mentorId;
        await student.save();

        mentor.students.addToSet(studentId);
        await mentor.save();

        res.status(200).json({ message: "Mentor assigned/changed for the student successfully", student, mentor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred in assigning/changing mentor for the student" });
    }
};


// 5. Get all students for a particular mentor

export const getStudentsForMentor = async (req, res) => {
    const { mentorId } = req.body;

    try {
        const mentor = await Mentor.findById(mentorId).populate('students');
        if (!mentor) {
            return res.status(404).json({ message: "Mentor not found" });
        }
        res.status(200).json(mentor.students);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred in retrieving students for the mentor" });
    }
};


export const getAllStudentsList=async(req,res)=>{
    try {
        const students = await Student.find(); 
        res.status(200).json({message:"All students list",data:students});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred in retrieving all the students list" });
    }
}

export const getAllMentorsList=async(req,res)=>{
    try {
        const mentors = await Mentor.find(); 
        res.status(200).json({message:"All Mentors list",data:mentors});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred in retrieving all the mentors list" });
    }
}