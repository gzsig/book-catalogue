const createNode = (tagName, attributeType, attributeName) => {
    let node = document.createElement(tagName);
    if (attributeType) {
        node.setAttribute(attributeType, attributeName);
    }
    return node;
};
const append = (parentNode, childNode) => {
    parentNode.appendChild(childNode);
};
const insetIntoPage = (content) => {
    document.getElementById("root").appendChild(content);
};
const createInput = (id, placeholder) => {
    let input = createNode("input", "id", id);
    input.placeholder = placeholder;
    return input;
};
const createPage = () => {
    const nameInput = createInput("nameInput", "nome");
    const authorInput = createInput("authorInput", "autor");
    const publishingInput = createInput("publishingInput", "editora");
    const yearInput = createInput("yearInput", "ano");
    const createBtn = createNode("button", "id", "create");
    createBtn.innerHTML = "Create";
    const formWrapper = createNode("div", "class", "wrapper");
    append(formWrapper, nameInput);
    append(formWrapper, authorInput);
    append(formWrapper, publishingInput);
    append(formWrapper, yearInput);
    append(formWrapper, createBtn);
    insetIntoPage(formWrapper);
};
createPage();
