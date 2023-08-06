#!/usr/bin/env node
import chalk from "chalk";
import { objStudent } from "./Student.js";
async function main() {
  const name1 = await objStudent.getStudentName();
  console.log(chalk.cyanBright`----------------------------------------`);
  console.log(
    chalk.blueBright` Are You curious to know about your Personality!\n`
  );
  await objStudent.askQuestion();
  console.log(
    "Your name is:",
    chalk.greenBright(name1),
    " and Personality is:",
    chalk.greenBright(objStudent.getPersonality())
  );
  console.log(chalk.cyanBright`----------------------------------------`);
}
main();
