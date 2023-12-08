function newStudent(lastName, firstName, grades) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.grades = grades;
  }
  
  newStudent.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
  };
  
  newStudent.prototype.computeAverageGrade = function () {
    return this.grades.reduce((result, element) => result + element, 0) / this.grades.length;
  };
  
  // Creating instances of newStudent
  let student1 = new newStudent("Nahom", "Birhane", []);
  let student2 = new newStudent("Michal", "Tesfu", []);
  let student3 = new newStudent("Mango", "Mengistu", []);
  
  // Adding grades for each student
  student1.inputNewGrade(88);
  student1.inputNewGrade(96);
  student1.inputNewGrade(95);
  
  student2.inputNewGrade(88);
  student2.inputNewGrade(79);
  student2.inputNewGrade(85);
  
  student3.inputNewGrade(91);
  student3.inputNewGrade(94);
  student3.inputNewGrade(89);
  
  // Computing average grades
  const st1Avg = student1.computeAverageGrade();
  const st2Avg = student2.computeAverageGrade();
  const st3Avg = student3.computeAverageGrade();
  
  // Outputting average grades for each student
  console.log("Grade Average of Student 1: ", st1Avg);
  console.log("Grade Average of Student 2: ", st2Avg);
  console.log("Grade Average of Student 3: ", st3Avg);
  
  // Calculating average grade of all students
  const students = [st1Avg, st2Avg, st3Avg];
  const overallAverage = students.reduce((result, element) => result + element, 0) / students.length;
  console.log("Grade Average of all the students: ", overallAverage);
  