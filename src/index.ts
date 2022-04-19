const createCard = (book: Book) => {
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
