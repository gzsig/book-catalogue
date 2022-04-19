const BASE_URL = "https://academico.espm.br/testeapi/livro/";

interface NewBook {
  nome: string;
  autor: string;
  editora: string;
  ano: number;
}

interface Book extends NewBook {
  id: number;
}

const get = async () => {
  try {
    return (await (await fetch(`${BASE_URL}listar`)).json()) as Book[];
  } catch (error) {
    alert(error.message);
  }
};

const remove = async (id: number) => {
  try {
    return await (await fetch(`${BASE_URL}excluir/${id}`)).json();
  } catch (error) {
    alert(error.message);
  }
};

const create = async (book: NewBook) => {
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

    return await (
      await fetch(`${BASE_URL}criar`, {
        method: "post",
        body: JSON.stringify(book),
      })
    ).json();
  } catch (error) {
    alert(error.message);
  }
};
