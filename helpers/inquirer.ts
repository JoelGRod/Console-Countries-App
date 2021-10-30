var inquirer = require("inquirer");

const questionsInquirerMenu = [
  {
    type: "list",
    name: "option",
    message: "What goes next?",
    choices: [
      {
        name: `${"1.".green} Search City`,
        value: "1",
      },
      {
        name: `${"2.".green} History`,
        value: "2",
      },
      {
        name: `${"0.".green} Exit`,
        value: "0",
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log("========================".green);
  console.log("    Select an option    ".white);
  console.log("========================".green);

  const { option } = await inquirer.prompt(questionsInquirerMenu);
  return option;
};

export const pause = async () => {
  const pausePrompt = [
    {
      type: "input",
      name: "input",
      message: `Press ${"Enter".green} to continue`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(pausePrompt);
};

export const readInput = async (message: string) => {
  const question = [
    {
      type: "input",
      name: "search",
      message,
      validate(value: string) {
        if (value.length === 0) {
          return "Please, Enter a value";
        }
        return true;
      },
    },
  ];
  const { search } = await inquirer.prompt(question);
  return search;
};

export const confirmation = async (message: string) => {
  const questions = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(questions);
  return ok;
};

export const selectOption = async (optionsList: any[], message: string) => {
  const choices = optionsList.map((option, idx) => {
    const id = `${idx + 1}.`.green;
    return {
      name: `${id} ${option.name}`,
      value: option.id,
    };
  });

  choices.unshift({
    name: "0. ".green + "Cancel",
    value: "0",
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message,
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
};


// export const selectTasks = async (taskList: Task[]) => {
//   const choices = taskList.map((task, idx) => {
//     const id = `${idx + 1}.`.green;
//     return {
//       name: `${id} ${task.desc}`,
//       value: task.id,
//       checked: task.completedIn ? true : false
//     };
//   });

//   const questions = [
//     {
//       type: "checkbox",
//       name: "ids",
//       message: "Selections: ",
//       choices,
//     },
//   ];

//   const { ids } = await inquirer.prompt(questions);
//   return ids;
// };
