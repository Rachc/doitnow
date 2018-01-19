# Aplicação Do it now
Esse repositório é um teste para o processo seletivo da [AutoSeg](http://autoseg.com/).

A aplicação não possui conexão com banco, sendo apenas HTML, CSS e JavaScript.

## Como a aplicação funciona
1. Fazer download dos arquivos no github.
2. Acessar o `index.html`.
3. Criar uma nova conta inserindo os dados pedidos ou clicar em entrar e digitar um e-mail válido e uma senha qualquer.

## Considerações sobre cada página
### Sobre a aplicação.
Foi utilizado HTML, CSS (com sass) e JQuery.

Optei por não utilizar bootstrap pois acredito que da para conseguir uma maior precisão sem frameworks de CSS.

### Index.html - Página inicial
Na página index é possível acessar a página de "criar nova conta" ou "entrar".

### account_new.html - Criar conta
A validação foi feita com HTML 5.

Ao apertar no botão "criar conta" será validado o preenchimento dos campos e a validade do e-mail.

Caso todos os campos estejam corretos, o usuário será redirecionado para a página de listas.

### login.html - Entrar
A validação foi feita com HTML 5.

Ao apertar no botão "criar conta" será validado o preenchimento dos campos e a validade do e-mail.

Caso todos os campos estejam preenchidos corretamente, o usuário será redirecionado para a página de listas.

O texto "esqueci minha senha" não é um link.

### list.html - Listas
Na página de listas é possível criar uma tarefa e uma subtarefa. Também há um link para a página de criação de listas.

É possivel adicionar uma tarefa digitando no campo indicado e apertando a tecla "Enter" do teclado.

Também é possível adicionar uma subtarefa da mesma forma.

Ao apertar na lixeira, a tarefa, subtarefa ou lista correspondente é excluida.

Ao apertar no botão "+" ao lado da palavra "listas" o usuário é redirecionado para a tela de criação de listas.

### list_new - Criação de listas
O formulário de criaçao de lista só é submetido caso a lista possua um nome.

A validação da criação da lista é feita com HTML 5, enquanto a validação do campo de adicionar tarefa é feita com JavaScript.

É possivel adicionar uma tarefa inserindo o nome da tarefa e apertando a tecla "enter"

Ao submeter a lista, o usuário é redirecionado para a página de listas.

## Checklist do que foi pedido e do que foi feito na aplicação
### Abertura:
- [x] Aplicar pattern no fundo da página
- [x] Ter links para as telas de cadastro e login

### Cadastro:

- [x] Aplicar validações no formulário
- [x] Formulário em caso de sucesso redirecionar para a tela de listas

### Login:

- [x] Aplicar validações no formulário
- [x] Formulário em caso de sucesso redirecionar para a tela de listas

### Listas:

- [x] Colocar pelo menos três listas (dados estáticos no HTML)
- [x] Apenas uma delas detalhada com tarefas e subtarefas
  - [x] Colocar pelo menos três tarefas, sendo que uma delas tenha ao menos duas subtarefas (dados estáticos no HTML)
  - [x] Permitir criação e remoção de tarefas subtarefas
  - [ ] Permitir edição de nome da lista
  - [ ] Permitir marcar tarefa e subtarefa como completa
    - [ ] Ao completar uma tarefa, todas as suas subtarefas devem ser marcadas como feita
    - [x] Ao marcar todas subtarefas, a tarefa mãe deve ser marcada como completa
  - [x] Ter link para tela de criação de lista
Criação de lista:
  - [x] Aplicar validações no formulário
    - [x] Nome da lista é obrigatório
  - [x] Permitir a criação de várias tarefas
