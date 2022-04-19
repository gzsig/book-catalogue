type TagType = "div" | "span" | "input" | "button";

type AttributeType = "class" | "id";

const createNode = (
  tagName: TagType,
  attributeType?: AttributeType,
  attributeName?: string
): HTMLElement => {
  let node = document.createElement(tagName);

  if (attributeType) {
    node.setAttribute(attributeType, attributeName);
  }
  return node;
};

const append = (parentNode: HTMLElement, childNode: HTMLElement) => {
  parentNode.appendChild(childNode);
};

const insetIntoPage = (content: HTMLElement) => {
  document.getElementById("root").appendChild(content);
};

const createInput = (id: string, placeholder: string) => {
  let input = createNode("input", "id", id) as HTMLInputElement;
  input.placeholder = placeholder;
  return input;
};

const getValueById = (id: string) => {
  const element = document.getElementById(id) as HTMLInputElement;
  return element.value;
};
