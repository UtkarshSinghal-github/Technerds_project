const courses = [
  // SEM 1 ELC COURCES
      { name: "ELC", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 9,ELC:true },
      { name: "MTH 111", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:true },
      { name: "MTH 112", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:true },
      { name: "PHY 112", semester: "sem1", branch:["CHE","CE","AE","CHM"], grade: "", credits: 11,ELC:true },
      { name: "PHY 113", semester: "sem1", branch:["EE","ME","PHY"], grade: "", credits: 11,ELC:true },
      { name: "PHY 114", semester: "sem1", branch:["CSE","CE","MSE"], grade: "", credits: 11,ELC:true },
      { name: "PHY 115", semester: "sem1", branch:["ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 11,ELC:true },
      { name: "PHY 111", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 3,ELC:true },
      { name: "TA 111", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 9,ELC:true },
      { name: "CHM 112", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 4,ELC:true },
      { name: "CHM 113", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 4,ELC:true },
  
  // SEM 2 ELC COURCES
  
      { name: "MTH 113", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:true },
      { name: "MTH 114", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:true },
      { name: "CHM 111", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 3,ELC:true },
      { name: "ESC 111", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 7,ELC:true },
      { name: "ESC 112", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 7,ELC:true },
      { name: "PE 112", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:true },
      { name: "PHY 112", semester: "sem2", branch:["BSBE","ECO","ES","ME","PHY"], grade: "", credits: 11,ELC:true },
      { name: "PHY 113", semester: "sem2", branch:["CHE","CHM","CSE","MSE"], grade: "", credits: 11,ELC:true },
      { name: "PHY 114", semester: "sem2", branch:["EE","MTH","SDS"], grade: "", credits: 11,ELC:true },
      { name: "PHY 115", semester: "sem2", branch:["AE","CE"], grade: "", credits: 11,ELC:true },
  
      // SEM 1 WITHOUT ESC COURSES 
      { name: "MTH 111", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:false },
      { name: "MTH 112", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:false},
      { name: "PHY 112", semester: "sem1", branch:["CHE","CE","AE","CHM"], grade: "", credits: 11,ELC:false},
      { name: "PHY 113", semester: "sem1", branch:["EE","ME","PHY"], grade: "", credits: 11,ELC:false },
      { name: "PHY 114", semester: "sem1", branch:["CSE","CE","MSE"], grade: "", credits: 11,ELC:false },
      { name: "PHY 115", semester: "sem1", branch:["ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 11,ELC:false },
      { name: "CHM 111", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 3,ELC:false },
      { name: "ESC 111", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 7,ELC:false },
      { name: "ESC 112", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 7,ELC:false },
      { name: "LIF 111", semester: "sem1", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:false },
  
      // SEM 2 WITHOUT ESC courses
      { name: "ELC", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 9,ELC:false },
      { name: "MTH 113", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:false},
      { name: "MTH 114 ", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 6,ELC:false },
      { name: "PHY 112", semester: "sem2", branch:["BSBE","ECO","ES","ME","PHY"], grade: "", credits: 11,ELC:false },
      { name: "PHY 113", semester: "sem2", branch:["CHE","CHM","CSE","MSE"], grade: "", credits: 11,ELC:false },
      { name: "PHY 114", semester: "sem2", branch:["EE","MTH","SDS"], grade: "", credits: 11,ELC:false },
      { name: "PHY 115", semester: "sem2", branch:["AE","CE"], grade: "", credits: 11,ELC:false },
      { name: "PHY 111", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 3,ELC:false },
      { name: "TA 111", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 9,ELC:false },
      { name: "CHM 112", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 4,ELC:false },
      { name: "CHM 113", semester: "sem2", branch:["CHE","CE","AE","CHM","EE","ME","PHY","CSE","MSE","ECO","ES","MTH","SDS","BSBE"], grade: "", credits: 4,ELC:false },
  ];
  var sem1num=0;
  var sem1deno=0;
  var sem2num=0;
  var sem2deno=0;
  let selectedCourses = [];
  
  function filterCourses() {
  const semester = document.getElementById("semester").value;
  const branch = document.getElementById("branch").value;
  selectedCourses = courses.filter(course => {
  if (course.ELC==true||course.semester !== semester || !course.branch.includes(branch)) {
  return false;
  }
  
    return true;
  });
  
  renderCourses();
  }
  function filterELCCourses() {
      const semester = document.getElementById("semester").value;
      const branch = document.getElementById("branch").value;
      
      selectedCourses = courses.filter(course => {
      if (course.ELC==false||course.semester !== semester || !course.branch.includes(branch)) {
      return false;
      }
        return true;
      });
      
      renderCourses();
      }
  
  function renderCourses() {
  let courseListHTML = "<ul>";
  
  selectedCourses.forEach(course => {
  courseListHTML += `<li>${course.name}: <input type="text" id="${course.name}" placeholder="${course.credits} credits" required  onchange="updateGrade('${course.name}', this.value)"></li>`;
  });
  
  courseListHTML += "</ul>";
  
  document.getElementById("courseList").innerHTML = courseListHTML;
  }
  
  function updateGrade(courseName, grade) {
  selectedCourses.forEach(course => {
  if (course.name === courseName) {
  course.grade = grade;
  }
  });
  
  }
  
  function calculate(){
   
    updateSPI();
    updateCPI();
    alert("SPI/CPI calculated Successfully");
  }
  
  
  function storeValue1(totalGradePoints,totalCredits){
     sem1num=totalGradePoints;
     sem1deno=totalCredits;
  
  }
  function storeValue2(totalGradePoints,totalCredits){
     sem2num=totalGradePoints;
     sem2deno=totalCredits;
    
  }
  
  function updateSPI() {
    let sem= document.getElementById("semester").value;
   
  let totalCredits = selectedCourses.reduce((total, course) => total + course.credits, 0);
  let totalGradePoints = 0;
  
  selectedCourses.forEach(course => {
  if (course.grade !== "") {
  totalGradePoints += course.credits * getGradePoint(course.grade);
  }
  if(sem=="sem1")
  storeValue1(totalGradePoints,totalCredits);
  if(sem=="sem2")
    storeValue2(totalGradePoints,totalCredits);
  
  
  
  });
  
  const spi = totalGradePoints / totalCredits;
  
  document.getElementById("spi").innerHTML = `Total spi for this Semester is : `+spi.toFixed(2);
  }
  
  function updateCPI() {
    if(sem1num!=0&&sem2num!=0){
  let totalCredits =sem2deno+sem1deno;
  let totalGradePoints =  sem1num+sem2num;
  const cpi = totalGradePoints / totalCredits;
  
  document.getElementById("cpi").innerHTML = `Total cpi for this year is : `+cpi.toFixed(2);
    }
  }
  
  function getGradePoint(grade) {
  switch (grade) {
  case "A": return 10;
  case "A*": return 10;
  case "B": return 8;
  case "B+": return 9;
  case "C": return 6;
  case "C+": return 7;
  case "D": return 4;
  case "D+": return 5;
  case "a": return 10;
  case "a*": return 10;
  case "b": return 8;
  case "b+": return 9;
  case "c": return 6;
  case "c+": return 7;
  case "d": return 4;
  case "d+": return 5;
  case "E": return 0;
  case "F": return 0;
  case "I": return 0;
  case "e": return 0;
  case "f": return 0;
  case "i": return 0;
  default:alert("Invalid Grade Entered , Please Enter Valid Grade");
  document.preventDefault();
  return false ;
  
  }
  }
  
  function updateELC() {
   let checkbox = document.getElementById("ELC").checked;
  if(checkbox)
  filterELCCourses();
  else
  filterCourses();
  }