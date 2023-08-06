import Person from "./Peroson.js";
import inquirer from "inquirer";
class Student extends Person {
  private _name: string;
  constructor() {
    super();
    this._name = "";
  }

  get Name(): string {
    return this._name;
  }
  set Name(name: string) {
    this._name = name;
  }
  async getStudentName() {
    const userName = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        default: "User",
        message: "What is your name?",
      },
    ]);
    return userName.name;
  }
}

export const objStudent = new Student();
// export const name: string = await objStudent.getStudentName();
// export const personality: string = await objStudent.personality;

//   objStudent.Name = "John"; // Set the name
//   console.log("Name:", objStudent.Name);
// })();
