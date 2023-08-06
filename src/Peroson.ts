import chalk from "chalk";
import inquirer from "inquirer";

class Person {
  personality: string;
  constructor() {
    this.personality = "mystery";
  }

  async askQuestion() {
    const personalityPrompt = await inquirer.prompt([
      {
        type: "list",
        name: "answer",
        message: chalk.blueBright`What is your personality?`,
        choices: ["Extrovert", "Introvert", "I am not sure"],
      },
    ]);
    if (personalityPrompt.answer == "Extrovert") {
      this.personality = "Extrovert";
    } else if (personalityPrompt.answer == "Introvert") {
      this.personality = "Introvert";
    } else {
      this.personality = "You are still a mystery!";
    }
  }
  getPersonality() {
    return this.personality;
  }
}

export let objPerson = new Person();
// export const personality= = objPerson.getPersonality();
// export const personality = await objPerson.askQuestion();
// objPerson.askQuestion(1)

export default Person;
