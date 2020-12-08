module.exports = function (plop) {
    plop.setGenerator("init", {
      description: "create flutter architecture",
      prompts: [
        {
          type: "input",
          name: "project_name",
          message: "Enter Project name"
        }
      ],
      actions: [
        {
          type: "addMany",
          destination: "../{{project_name}}/lib",
          base: `lib`,
          templateFiles: `lib/**`,
          force: true,
        }
      ]
    })
  };