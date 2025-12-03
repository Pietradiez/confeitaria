
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



async function buscarBolos() {
  const url = "https://confeitaria-api-8c7e.onrender/cardapio";

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro na requisição: " + resposta.status);
    }

    const dados = await resposta.json(); // Converte para JSON
    console.log("Lista de bolos recebida:", dados);
    criarItemCardapio (
    dados.titulo,dados.pDescricao,dados.img

    )
    return dados;

  } catch (erro) {
    console.error("Erro ao buscar os bolos:", erro);
    return null;
  }
}

// Chamada da função
buscarBolos();
