class Person {
  constructor(name = "Anonymous", age = 0) {
    // default value if none is given.
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    //return 'Hi. I am ' + this.name; //old vs better
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let desciption = super.getDescription();
            if(this.major) {
                desciption += ` Their major is ${this.major}`;
            }


        return desciption;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Traveler("Jeff Gore", 44, "Brooklyn");
console.log(me.getGreeting());

const other = new Student('bill', 22, 'stuff');
console.log(other.getDescription());
