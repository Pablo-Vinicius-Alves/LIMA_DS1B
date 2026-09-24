const botoes = document.querySelectorAll('.botaoLuizao');
const listaCarrinho = document.querySelector('#listaCarrinho');
const elementoTotal = document.querySelector('#total');

const carrinho = [];

function converterPreco(text) {
    return parseFloat(
        text.replace("R$", ".   ").trim().replaceAll(".", "").replace(",", ".")
    );
}

function formatarReais(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function atualizar() {
    listaCarrinho.innerHTML = "";
    let total = 0;

    carrinho.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - ${formatarReais(item.preco)}`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    elementoTotal.textContent = formatarReais(total);
};

botoes.forEach((btn) => {
    btn.addEventListener('click', () => {
        const card = btn.closest(".artImage");
        const nome = card.querySelector(".nomeProduto").textContent;
        const preco = converterPreco(card.querySelector(".preco").textContent);

        carrinho.push({ nome, preco });
        atualizar();
    });
});




