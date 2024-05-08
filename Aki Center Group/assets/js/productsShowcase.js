// Script de produtos: Este script tem como objetivo fazer com que os produtos apareçam de maneira dinâmica sem precisar de HTML

// 1 - Lista de produtos
const products = [
  // EA SPORTS FC 24
  {
    id: 1,
    title: "EA SPORTS FC 24",
    image: "/assets/img/cards/ea sports fc 24.jpg",
    price: "36.000",
    category: "Gaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5.0,
    sales: 10,
    releaseDate: new Date(2023, 8, 29)
  },
  // Netflix: Plano Solo
  {
    id: 2,
    title: "Netflix: Plano Solo",
    image: "/assets/img/cards/netflix.jpeg",
    price: "4.250 p/mês",
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
    price: "6.500 p/mês",
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
    price: "6.500 p/mês",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2021, 3, 17)
  },
  // Call Of Duty: Modern Warfare III
  {
    id: 5,
    title: "Call Of Duty: Modern Warfare III",
    image: "/assets/img/cards/cod mw3.jpg",
    price: "45.000",
    Category: "Gaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2023, 1, 11)
  },
  // Amazon Prime: Plano Diamante
  {
    id: 6,
    title: "Prime Video: Plano Diamante",
    image: "/assets/img/cards/prime video.png",
    price: "60.000 p/ano",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2021, 3, 17)
  },
  // HBO Max: Plano d'Ouro
  {
    id: 7,
    title: "HBO Max: Plano d'Ouro",
    image: "/assets/img/cards/hbomax.jpg",
    price: "12.000 p/mês",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2021, 3, 17)
  },
  // Spotify: Plano Individual
  {
    id: 8,
    title: "Spotify: Plano Individual",
    image: "/assets/img/cards/spotify.jpeg",
    price: "9.500 p/mês",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2021, 3, 17)
  },
  // HBO Max: Plano Diamante
  {
    id: 9,
    title: "HBO Max: Plano d'Ouro",
    image: "/assets/img/cards/hbomax.jpg",
    price: "68.000 p/ano",
    Category: "Streaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2021, 3, 17)
  },
  // eFootball: Bluelock
  {
    id: 10,
    title: "eFootball: Bluelock",
    image: "/assets/img/cards/efootball bluelock.jpg",
    price: "45.000",
    Category: "Gaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2021, 8, 20)
  },
  // MLB 24
  {
    id: 11,
    title: "MLB 24",
    image: "/assets/img/cards/mlb24.jpg",
    price: "45.000",
    Category: "Gaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2024, 2, 19)
  },
  // Rise of the ronin
  {
    id: 12,
    title: "Rise of the ronin",
    image: "/assets/img/cards/rise of the ronin.jpg",
    price: "45.000",
    Category: "Gaming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4.0,
    sales: 10,
    releaseDate: new Date(2024, 2, 22)
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
            <p class="card-text">Kz${product.price}</p>
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
//4 - Pesquisa de produtos
// 4.1 - Na página de pesquisa de produtos
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form"); // Pega o formulário de pesquisa
  // Quando o formulário for submetido, faça o seguinte:
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('input[name="search"]');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredProducts = products.filter(product => {
      return (
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    });

    // Armazena os produtos filtrados em sessionStorage
    sessionStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));

    // Redireciona para a página de resultado de pesquisa
    window.location.href = '../search.html';
  });
});

// Na página de resultado de pesquisa
document.addEventListener("DOMContentLoaded", () => {
  displaySearchResults(); // Ao carregador o documento, executa a função displaySearchResults
});
// Função displaySearchResults: Serve para apresentar o resultado da pesquisa
function displaySearchResults() {
  const searchResultContainer = document.querySelector(".search-result"); // Container do resultado da pesquisa
  const filteredProducts = JSON.parse(sessionStorage.getItem("filteredProducts")); // Pega os produtos filtrados que foram armazenados
  // Se o produto não for encontrado, apresente a mensagem "Produto não encontrado"
  if (filteredProducts.length === 0) {
    searchResultContainer.innerHTML = `<h3 class="not-found text-danger" style="text-align: center;">Produto não encontrado</h3>`;
    // Se o produto for encontrado, apresente-o
  } else {
    const productCardsHTML = filteredProducts.map(productCardTemplate).join("");
    searchResultContainer.innerHTML = productCardsHTML;
  }
}