
function criarItemCardapio(titulo){
    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'Item-Cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = pDescricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-intem'

    // adicionando os elementos na div mãe
    const divC = document.getElement('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}
// executando a função

criarItemCardapio (
    'Bolo de Chocolate'
    'Um classico com camadas de Chocolate'
    


)