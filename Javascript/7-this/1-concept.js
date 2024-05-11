// this keyword refers to an object
// implicit binding using dot notation
// explict bind using call apply bind

this.a = 5;
console.log(this.a);

function getParam() {
  console.log(this.a);
}
getParam();

const get = () => {
  console.log(this.a);
};

get();

// this inside object
this.name = "numum";
let user = {
  name: "umesh",
  childObj: {
    newName: "num",
    getName() {
      console.log(this.newName, this.name);
    },
  },
  getDetail: () => {
    console.log("xyz");
    console.log("what is value", this.name);
  },
};

user.childObj.getName();
user.getDetail();

// class and constructor

class UserClass {
  constructor(n) {
    this.name = n;
  }
  getNAme() {
    console.log(this.name);
  }
}

const usr = new UserClass("hey umesh");
console.log(usr);
usr.getNAme();
