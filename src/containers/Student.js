class Student {
    constructor(name, edu, age, weight) {
        this.name = name;
        this.edu = edu;
        this.age = age;
        this.weight = weight;
    }
    
    getStudentDesc() {
        return `${this.name} ${this.edu} ${this.age} ${this.weight}`
    }
}
  

