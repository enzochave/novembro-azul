// criar a lista de imagem
let imagens = [
    'novembro-azul.jpg',
    'novembro1.jpg',
    'novembro-azul1 (1).jpg'
]
let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document
    .getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}
// logica para exibir as imagems a
// cada 5 seg
setInterval(function () {
    exibirImagem()
    indiceAtualListaImagens++

    if (indiceAtualListaImagens > 2) {
    indiceAtualListaImagens = 0
 }
}, 5000);

exibirImagem()
 indiceAtualListaImagens++
