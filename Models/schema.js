import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    student_name:String,
    student_email:String,
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', default: null }
    
})
export const Student=mongoose.model("Student",studentSchema);
 

const mentorSchema=mongoose.Schema({
    mentor_name:String,
    mentor_email:String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
})
export const Mentor=mongoose.model("Mentor",mentorSchema);
 


