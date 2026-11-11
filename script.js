const products = [
    {
      id: 1,
      name: "Aura Classic Onyx",
      category: "Masculino",
      price: 1290.00,
      image: "Onyx Black",
      description: "Movimento automático com caixa em aço escovado e pulseira de couro genuíno preto."
    },
    {
      id: 2,
      name: "Aura Royale Gold",
      category: "Luxo",
      price: 4850.00,
      image: "Royale Gold",
      description: "Caixa banhada a ouro 18k com mostrador minimalista creme e vidro em cristal de safira."
    },
    {
      id: 3,
      name: "Aura Chrono Sport",
      category: "Esportivo",
      price: 1680.00,
      image: "Chrono Sport",
      description: "Cronógrafo de alta precisão resistente a água (100m) com pulseira de borracha fluorada."
    },
    {
      id: 4,
      name: "Aura Pearl Minimal",
      category: "Feminino",
      price: 990.00,
      image: "Pearl White",
      description: "Design ultrafino com mostrador em madrepérola e pulseira milanesa em aço inoxidável."
    },
    {
      id: 5,
      name: "Aura Skeleton Mechanical",
      category: "Luxo",
      price: 5200.00,
      image: "Skeleton View",
      description: "Mostrador aparente revelando o mecanismo mecânico de 24 rubis. Edição limitada."
    },
    {
      id: 6,
      name: "Aura Vintage Heritage",
      category: "Masculino",
      price: 1450.00,
      image: "Heritage Tan",
      description: "Inspirado nos modelos dos anos 1960 com vidro abobadado e marcador luminescente."
    }
  ];
  
  let cartCount = 0;
  let selectedCategory = "todos";
  let searchQuery = "";
  
  const productGrid = document.getElementById("product-grid");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const noResults = document.getElementById("no-results");
  const cartCountElement = document.getElementById("cart-count");
  
  const modal = document.getElementById("product-modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalPrice = document.getElementById("modal-price");
  const modalDescription = document.getElementById("modal-description");
  const modalImage = document.getElementById("modal-image");
  const modalAddBtn = document.getElementById("modal-add-btn");
  
  function formatPrice(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }
  
  // Renderizar Produtos
  function renderProducts() {
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  
    productGrid.innerHTML = "";
  
    if (filtered.length === 0) {
      noResults.classList.remove("hidden");
      return;
    }
  
    noResults.classList.add("hidden");
  
    filtered.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
        <div>
          <span class="product-badge">${product.category}</span>
          <div class="product-image">${product.image}</div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-price">${formatPrice(product.price)}</p>
        </div>
        <button class="btn btn-add" data-id="${product.id}">Adicionar ao Carrinho</button>
      `;
  
      card.addEventListener("click", (e) => {
        if (!e.target.classList.contains("btn-add")) {
          openModal(product);
        }
      });
  
      const addBtn = card.querySelector(".btn-add");
      addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart();
      });
  
      productGrid.appendChild(card);
    });
  }
  
  function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
  }
  
  function openModal(product) {
    modalTitle.textContent = product.name;
    modalCategory.textContent = product.category;
    modalPrice.textContent = formatPrice(product.price);
    modalDescription.textContent = product.description;
    modalImage.textContent = product.image;
    
    modalAddBtn.onclick = () => {
      addToCart();
      closeModal();
    };
  
    modal.classList.remove("hidden");
  }
  
  function closeModal() {
    modal.classList.add("hidden");
  }
  
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCategory = btn.dataset.category;
      renderProducts();
    });
  });
  
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });
  
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  
  // Verifica se o usuário está logado
  function checkUserLogin() {
    const userArea = document.getElementById("user-area");
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    const userName = localStorage.getItem("userName");
  
    if (isLoggedIn === "true" && userName) {
      userArea.innerHTML = `
        <div class="user-greeting">
          <span>Olá, <strong>${userName}</strong></span>
          <button id="logout-btn" class="btn-logout">Sair</button>
        </div>
      `;
  
      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("userLoggedIn");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        window.location.reload();
      });
    }
  }
  
  // Inicializações
  checkUserLogin();
  renderProducts();