// 1 - Botão flutuante: Botão que redireciona o usuário para o topo da página
// 1.1 - Variável do botão
let button = document.getElementById('top-btn')
button.style.visibility = 'hidden' // Botão já começa escondido ao carregar a página
// 1.2 - Ao rolar. executar a função "scrollBody"
window.onscroll = function() {scrollBody()}
// 1.3 - Função "scrollBody": Serve dizer quando o botão deve ou não aparecer
function scrollBody() {
    // Se o scroll for maior que 1000px, o botão aparecerá, senão, ele desaparecerá
    if (document.documentElement.scrollTop > 1000) {
        button.style.visibility = 'visible'
    } else {
        button.style.visibility = 'hidden'
    }
}
// 1.4 - Função "toTheTop": Serve para levar-nos de volta ao topo da página
function toTheTop() {
    document.documentElement.scrollTop = 0
}
