function Student(lastName, firstName, grades) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.grades = grades;

    }
  
  Student.prototype.inputNewGrade = function (newGrade) {
      this.grades.push(newGrade);
  };
  Student.prototype.computeAverageGrade = function () {
      return this.grades.reduce((result, element) => (result + element), 0) / this.grades.length;
  };
  
  let student11 = new Student("Nahom", "Birhane", []);
  let student22 = new Student("Michal", "Tesfu", []);
  let student33 = new Student("Mango", "Mengistu", []);
  
  student11.inputNewGrade(88);
  student11.inputNewGrade(96);
  student11.inputNewGrade(95);
  
  student22.inputNewGrade(88);
  student22.inputNewGrade(79);
  student22.inputNewGrade(85);
  
  student33.inputNewGrade(91);
  student33.inputNewGrade(94);
  student33.inputNewGrade(89);
  
  st1Avg = student11.computeAverageGrade();
  st2Avg = student22.computeAverageGrade();
  st3Avg = student33.computeAverageGrade();
  
  console.log("Grade Average of Student 1: ",st1Avg);
  console.log("Grade Average of Student 2: ",st2Avg);
  console.log("Grade Average of Student 3: ",st3Avg);
  
  let students = [st1Avg, st2Avg, st3Avg];
  // printing the Average of all the students
  console.log("Grade Average of all the students: ", students.reduce((result, element) => (result + element), 0) / students.length);
  
  Array.prototype.sort(()=>{
    (a,b)=>{return a-b};
    })
  
// sorting students by their firstName
  const studentsByNames = [student11.firstName, student22.firstName, student33.firstName];
  console.log(studentsByNames.sort());

  // sorting students by their average grade
  const studentsByAverage = [st1Avg, st2Avg, st3Avg];
  console.log(studentsByAverage.sort());
