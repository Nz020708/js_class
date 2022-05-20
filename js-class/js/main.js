function University(name,location,classes=[]){
    this.name = name;
     this.location = location;
     this.classes = classes;
     this.addClass=(classs)=>{
        this.classes.push(classs);    
    }
    this.transferStudent=(student,name)=>{
       let olduguqrup=this.classes.find
       
   }
}
function Class(name,degree,currentYear,students=[]) {
    this.name=name;
    this.degree=degree;
    this.currentYear=currentYear;  
    this.students = students; 
    this.addStudent=(student)=>{
        return this.students.push(student);
    }
    this.removeStudent=(pin)=>{
       return this.students=this.students.filter((student)=>student.pin!==pin)
    };
    this.findStudent=(classs)=>{
        return this.students=this.students.filter((student)=>student.gpa>80)
    }
   
}
function Student(name,surname,paid,pin,gpa) {
        this.firstName = name;
        this.lastName = surname;
        this.paid = paid;
        this.pin = pin;
        this.gpa = gpa;
}
const student1=new Student("Jorge","Dark",3000,001,90);
const student2=new Student("Anna","Brown",2000,002,85);
const student3=new Student("A","B",2050,003,70);
const BP201=new Class("BP-201","master",2019)
const BP202=new Class("BP-202","master",2020)
const BDU=new University("BDU","Baku")
const ADA=new University("ADA","Baku")


// console.log(BP201.addStudent(student1)); 
// console.log(BDU.addClass(BP201)); 
// console.log(ADA.addClass(BP202)); 
// console.log(BP202.addStudent(student2)); 
// console.log(BP202.addStudent(student3)); 
// console.log(BP202.findStudent(BP202)); 
console.log(001,BP202);
console.log(BP202);
