const BASE_URL = "https://academico.espm.br/testeapi/livro/";
const get = async () => {
    try {
        return (await (await fetch(`${BASE_URL}listar`)).json());
    }
    catch (error) {
        alert(error.message);
    }
};
const remove = async (id) => {
    try {
        return await (await fetch(`${BASE_URL}excluir/${id}`)).json();
    }
    catch (error) {
        alert(error.message);
    }
};
const create = async (book) => {
    try {
        if (!book.nome) {
            alert(`Missing: name`);
            return;
        }
        if (!book.autor) {
            alert(`Missing: author`);
            return;
        }
        if (!book.editora) {
            alert(`Missing: publisher`);
            return;
        }
        if (!book.ano) {
            alert(`Missing: year`);
            return;
        }
        if (typeof book.ano !== "number" && book.ano < 2021 && book.ano > 1900) {
            alert(`Year must be a valid number`);
            return;
        }
        console.log(`create: ${book}`);
        console.log(book);
        console.log(JSON.stringify(book));
        return await (await fetch(`${BASE_URL}criar`, {
            method: "post",
            body: JSON.stringify(book),
        })).json();
    }
    catch (error) {
        alert(error.message);
    }
};
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
const getValueById = (id) => {
    const element = document.getElementById(id);
    return element.value;
};
const createCard = (book) => {
    let card = createNode("div", "class", "card");
    let name = createNode("div", "class", "text");
    let author = createNode("span", "class", "text");
    let publisher = createNode("span", "class", "text");
    let year = createNode("div", "class", "text");
    let id = createNode("div", "class", "text");
    const deleteBtn = createNode("button", "id", "delete");
    name.innerHTML = book.nome;
    author.innerHTML = book.autor;
    publisher.innerHTML = book.editora;
    year.innerHTML = String(book.ano);
    id.innerHTML = String(book.id);
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
        remove(book.id);
        createPage();
    });
    append(card, id);
    append(card, name);
    append(card, publisher);
    append(card, author);
    append(card, year);
    append(card, deleteBtn);
    return card;
};
const createPage = async () => {
    document.getElementById("root").innerHTML = "";
    const nameInput = createInput("nameInput", "nome");
    const authorInput = createInput("authorInput", "autor");
    const publishingInput = createInput("publishingInput", "editora");
    const yearInput = createInput("yearInput", "ano");
    const createBtn = createNode("button", "id", "create");
    createBtn.innerHTML = "Create";
    createBtn.addEventListener("click", () => {
        create({
            ano: parseInt(getValueById("yearInput")),
            autor: getValueById("authorInput"),
            editora: getValueById("publishingInput"),
            nome: getValueById("nameInput"),
        });
        createPage();
    });
    const formWrapper = createNode("div", "class", "wrapper");
    append(formWrapper, nameInput);
    append(formWrapper, authorInput);
    append(formWrapper, publishingInput);
    append(formWrapper, yearInput);
    append(formWrapper, createBtn);
    insetIntoPage(formWrapper);
    const books = await get();
    console.log({ books });
    books.forEach((book) => {
        const card = createCard(book);
        insetIntoPage(card);
    });
};
createPage();
