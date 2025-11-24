Descrição
- Aplicação front-end simples que lista linguagens de programação a partir de um arquivo JSON e permite busca por Nome ou Descrição.

Funcionalidades
- Carrega dados de `dados.json`.
- Pesquisa case-insensitive por `Nome` e `Descrição`.
- Renderiza resultados como cards com título, descrição e link "Saiba mais".
- Tratamento básico de erro e mensagem quando não há resultados.

Estrutura
- index.html — interface (header com busca, main com container de cards, footer)
- estilos.css — estilos e responsividade
- dados.json — itens (Nome, Descrição, Link)
- script.js — lógica: carregar JSON, filtrar e renderizar resultados
