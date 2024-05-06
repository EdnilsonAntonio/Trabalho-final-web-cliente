// Script de produtos: Este script tem como objetivo fazer com que os produtos apareçam de maneira dinâmica sem precisar de HTML

// 1 - Lista de produtos
const products = [
  {
    // EA SPORTS FC 24
    id: 1,
    title: "EA SPORTS FC 24",
    image: "/assets/img/cards/ea sports fc 24.jpg",
    price: "36.000Kz",
    category: "Gaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5.0,
    sales: 10,
    releaseDate: new Date(2023, 8, 29)
  },
  {
    // Netflix: Plano Solo
    id: 2,
    title: "Netflix: Plano Solo",
    image: "/assets/img/cards/netflix.jpeg",
    price: "4.250Kz p/mês",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5.0,
    sales: 40,
    releaseDate: new Date(2021, 3, 17)
  },
  // Netflix: Plano Kamba
  {
    id: 3,
    title: "Netflix: Plano Kamba",
    image: "/assets/img/cards/netflix.jpeg",
    price: "6.500Kz p/mês",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5.0,
    sales: 15,
    releaseDate: new Date(2021, 3, 17)
  },
  // Amazon Prime: Plano d'Ouro
  {
    id: 4,
    title: "Prime Video: Plano d'Ouro",
    image: "/assets/img/cards/prime video.png",
    price: "6.500Kz p/mês",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5.0,
    sales: 10,
    releaseDate: new Date(2021, 3, 17)
  },
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
// 3 - Funções para gerar os produtos
// 3.1 - Recomendados
const generateRecommendedProducts = () => {
  const recommendedProducts = products.filter(product => product.rating >= 4);
  const productCardsHTML = recommendedProducts.map(productCardTemplate).join("");
  document.querySelector(".recommended-products").innerHTML = productCardsHTML;
};
document.addEventListener("DOMContentLoaded", () => {
  generateRecommendedProducts();
});
// 3.2 - Mais vendidos
const generateBestSellingProducts = () => {
  // Filtro: 10 vendas para cima | Ordem: Decrescente
  const bestSellingProducts = products.filter(product => product.sales >= 10).sort((a, b) => b.sales - a.sales);
  const productCardsHTML = bestSellingProducts.map(productCardTemplate).join("");
  document.querySelector(".best-selling-products").innerHTML = productCardsHTML;
};
document.addEventListener("DOMContentLoaded", () => {
  generateBestSellingProducts();
});
// 3.3 - Mais recentes
const generateMostRecentProducts = () => {
  // Ordenar por lançamento. Trocar o "a" pelo "b" para inverter a ordem
  const mostRecentProducts = products.sort((a, b) => b.releaseDate - a.releaseDate); 
  const productCardsHTML = mostRecentProducts.map(productCardTemplate).join("");
  document.querySelector(".most-recent-products").innerHTML = productCardsHTML;
};
document.addEventListener("DOMContentLoaded", () => {
  generateMostRecentProducts();
});
