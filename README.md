# Fábrica de Software 2026 - Frontend de Heróis

Este projeto foi desenvolvido no contexto da Fábrica de Software 2026 como atividade prática de front-end com React. A aplicação consome uma API pública de heróis do jogo Overwatch e exibe uma lista com busca, filtros simples e paginação visual.

## Objetivo

Criar uma interface web responsável para listar personagens, permitir busca por nome e apresentar os itens em blocos com navegação de "mostrar mais" e "mostrar menos". O foco do projeto está em:

- consumo de API com Axios;
- uso de componentes funcionais em React;
- gerenciamento de estado com hooks;
- renderização de cards com imagens e textos;
- estrutura de páginas responsivas para diferentes tamanhos de tela.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Axios
- HTML/CSS (com classes utilitárias e estilo direto no JSX)

## Esquema de cores

A identidade visual do projeto foi pensada seguindo a proporção 60-40-10:

- 60%: branco
- 40%: preto
- 10%: laranja

Essa abordagem ajuda a manter um visual limpo, com contraste forte e pontos de destaque em detalhes importantes, como botões, destaques de interação e elementos de decisão visual. Em prática, o fundo e áreas neutras priorizam o branco, o preto é usado para texto, containers e contraste estrutural, e o laranja aparece como acento para chamar atenção em elementos interativos ou de destaque.

## Como o projeto funciona

Ao iniciar a aplicação, o componente principal executa uma requisição para a API da Overfast:

- `https://overfast-api.tekrop.fr/heroes?locale=pt-br`

Os dados retornados são salvos em estado local e usados para renderizar os cards de heróis. O fluxo principal é:

1. A página carrega os dados em `useEffect`.
2. Os heróis são armazenados em `arrPost`.
3. O campo de busca atualiza o estado `busca`.
4. A lista é filtrada com base no nome do personagem.
5. A quantidade de itens exibidos é controlada por `arrPostsAparentes`.
6. Os botões `+` e `-` expandem ou reduzem a visualização da lista.

## Estrutura do projeto

```text
.
├── TESTE/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── README.md
└── .git
```

A aplicação principal está dentro da pasta `TESTE/`.

## Pré-requisitos

Antes de rodar o projeto, verifique se você possui instalado:

- Node.js 18+
- npm

## Como executar

Abra o terminal na pasta do projeto e execute:

```bash
cd TESTE
npm install
npm run dev
```

Depois disso, o Vite irá iniciar o projeto localmente, normalmente em:

```text
http://localhost:5173
```


## Observações importantes

- O projeto consome uma API externa, então a conexão com a internet é necessária no momento de carregamento dos dados.
- A lista de heróis é filtrada em tempo real conforme o usuário digita no campo de busca.

## Conclusão

Este projeto representa uma aplicação frontend prática para exercitar consumo de APIs, organização de componentes e manipulação de estados com React. Ele foi pensado como uma base para estudo e desenvolvimento dentro do contexto da Fábrica de Software 2026.
