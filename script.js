let dados = [];
let cardConteiner = document.querySelector(".card-conteiner");
let dadosCarregados = false; // flag para não recarregar o JSON toda vez

async function iniciarBusca() {
    try {
        // lê o valor do input de busca
        const query = document.querySelector('input[type="text"]').value.trim().toLowerCase();

        // carrega dados.json apenas na primeira busca
        if (!dadosCarregados) {
            const resposta = await fetch("dados.json");
            if (!resposta.ok) throw new Error("Falha ao carregar dados.json");
            dados = await resposta.json();
            dadosCarregados = true;
        }

        // filtra por Nome ou Descrição (case-insensitive)
        const resultados = query
            ? dados.filter(d =>
                (d.Nome || "").toLowerCase().includes(query) ||
                (d.Descrição || "").toLowerCase().includes(query)
            )
            : dados.slice(); // sem query retorna todos

        renderizarCard(resultados);
    } catch (err) {
        console.error(err);
        cardConteiner.innerHTML = `<p style="color: #f88;">Erro ao carregar dados. Veja console.</p>`;
    }
}

function renderizarCard(dados)
{
    // limpa resultados anteriores
    cardConteiner.innerHTML = "";

    if (!dados || dados.length === 0) {
        cardConteiner.innerHTML = `<p style="color: var(--tertiary-color);">Nenhum resultado encontrado.</p>`;
        return;
    }

    for (let dado of dados)
    {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `<h2>${dado.Nome}</h2>
                <p>${dado.Descrição}</p>
                <a href="${dado.Link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>`
        cardConteiner.appendChild(article);
    }
}