# Node day 3 task

## Mentor and Student Assigning with Database

Welcome to the Mentor-Student Management API. This project provides a set of RESTful endpoints to manage students and mentors, including assigning mentors to students, retrieving lists of students and mentors, and more.This project is designed to help manage relationships between students and mentors. It allows for creating, retrieving, and assigning students and mentors, ensuring that each student can have a mentor assigned to them.

## API Documentation

Postman link=>[click here](https://documenter.getpostman.com/view/32019732/2sA3Qv6pmi)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

## Project Schema

- Controllers
- Models
- Routers
- Database
- index.js

 ## API Endpoints
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

## Output

Render link=>[Click here](https://node-day-3-task.onrender.com)