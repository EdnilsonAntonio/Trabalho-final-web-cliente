// Script de produtos: Este script tem como objetivo fazer com que os produtos apareçam de maneira dinâmica sem precisar de HTML

// 1 - Lista de produtos
const products = [
    {
    // EA SPORTS FC 24
      id: 1,
      title: "EA SPORTS FC 24",
      image: "/assets/img/cards/ea sports fc 24.jpg",
      price: "36.000Kz",
      category: "Gaming"
    },
    {
    // Netflix: Plano Solo
      id: 2,
      title: "Netflix: Plano Solo",
      image: "/assets/img/cards/netflix.jpeg",
      price: "4.250Kz p/mês",
      Category: "Streaming"
    },
    // Netflix: Plano Kamba
    {
        id: 3,
        title: "Netflix: Plano Kamba",
        image: "/assets/img/cards/netflix.jpeg",
        price: "6.500Kz p/mês",
        Category: "Streaming"
    },
    // Amazon Prime: Plano d'Ouro
    {
        id: 4,
        title: "Prime Video: Plano d'Ouro",
        image: "/assets/img/cards/prime video.png",
        price: "6.500Kz p/mês",
        Category: "Streaming"
    }
  ];
  // 2 - Template do produto
  const productCardTemplate = (product) => {
    return `
      <div class="col-lg-3 col-md-6 col-sm-12 card-container">
        <div class="card product-card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price}</p>
            <div class="card-actions">
              <a href="" class="btn btn-primary">Obter agora</a>
              <button class="btn product-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
  };
  // 3 - Função "generateProductCards": Serve para adicionar o produto na secção de produtos no HTML
  const generateProductCards = () => {
    products.sort(() => Math.random() - 0.5); // Baralhar a lista de produtos
    const productCardsHTML = products.map(productCardTemplate).join("");
    document.querySelector(".products").innerHTML = productCardsHTML;
  };
  // 4 - Chama a função assim que o documento for carregado
  document.addEventListener("DOMContentLoaded", () => {
    generateProductCards();
  });