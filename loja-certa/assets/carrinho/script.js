let tbody = document.getElementById('listaDeProdutos');

window.onload = function nadaNoCarrinho() {
    if (carrinho.length === 0) {
        tbody.innerHTML = '<p id="paragrafo">Nenhum produto no carrinho</p>';
}
}