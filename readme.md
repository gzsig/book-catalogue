Comportamento

- Ao clicar no botão "Criar", todos os campos devem ser validados antes da criação.

- Se a criação for realizada com sucesso, a lista abaixo deve ser atualizada

- Ao abrir a página, a lista deve ser atualizada automaticamente

- Ao clicar no botão excluir, o registro correspondente deve ser excluído, e a lista deve ser atualizada

- Todos as chamadas à API fetch() devem ser realizadas utilizando await

- Falhas na execução de alguma chamada à API fetch() devem ser exibidas na forma de um alert()

- O sistema deve ter uma proteção (simples, via variável global) para não permitir que um livro seja criado ou excluído enquanto ainda existir uma operação pendente de criação/exclusão

Definição da interface Livro

interface Livro {
id: number;
nome: string;
autor: string;
editora: string;
ano: number;
}

URL para listagem

(GET) https://academico.espm.br/testeapi/livro/listar

URL para criação

(POST) https://academico.espm.br/testeapi/livro/criar

- O body deve ser application/json, com os campos nome, autor, editora e ano (o id não precisa ser fornecido para a criação)

URL para exclusão

(GET) https://academico.espm.br/testeapi/livro/excluir/ID_DO_LIVRO
