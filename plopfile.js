// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Creates a new modus-ui component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'The name of the component please',
        validate: value => {
          if (!value) return 'name is required';
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          'src/components/{{lowerCase name}}/{{lowerCase name}}.component.tsx',
        templateFile: 'plop/templates/component/component.tsx.hbs'
      },
      {
        type: 'add',
        path:
          'src/components/{{lowerCase name}}/{{lowerCase name}}.styles.scss',
        templateFile: 'plop/templates/component/component.styles.scss.hbs'
      }
    ]
  });
};
