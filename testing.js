class Test {
  constructor() {
    this.testing = "test4"
    this.testerFunc = "" + function tester() {
      console.log("test2")
    }
  }

  testing2() {
    return ""
  }
  
}

const testing = new Test()

const test2 = JSON.stringify(testing);

console.log(test2);

// testing.tester()