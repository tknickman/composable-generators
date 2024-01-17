import type { PlopTypes } from "@turbo/gen";

export function genReactComponent({
  description,
}: {
  description: string;
}): PlopTypes.PlopGeneratorConfig {
  return {
    description,
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
    ],
  };
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator(
    "react-component-from-package",
    genReactComponent({ description: "A React component" })
  );
}
