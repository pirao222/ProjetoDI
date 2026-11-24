// Catálogo Multimarcas com Modelos Famosos e Fotos Reais
const products = [
  {
    id: 1,
    brand: "Rolex",
    name: "Submariner Date Oystersteel",
    category: "Masculino",
    price: 78500.00,
    oldPrice: null,
    isNew: false,
    isBestSeller: true,
    isPromo: false,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
    description: "O arquétipo do relógio de mergulho. Caixa Oyster de 41mm em aço 904L com luneta giratória unidirecional Cerachrom.",
    specs: { case: "41mm Aço Oystersteel", glass: "Safira com Lupa Ciclope", movement: "Calibre 3235 Automático", water: "30 ATM (300m)" }
  },
  {
    id: 2,
    brand: "Omega",
    name: "Speedmaster Moonwatch Professional",
    category: "Esportivo",
    price: 46900.00,
    oldPrice: 51500.00,
    isNew: false,
    isBestSeller: true,
    isPromo: true,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=600&q=80",
    description: "Um dos cronógrafos mais icônicos do mundo, tendo participado das seis missões lunares da história.",
    specs: { case: "42mm Aço Inoxidável", glass: "Cristal de Safira", movement: "Calibre Co-Axial Master 3861", water: "5 ATM (50m)" }
  },
  {
    id: 3,
    brand: "Patek Philippe",
    name: "Calatrava Rose Gold 5227R",
    category: "Luxo",
    price: 215000.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: false,
    isPromo: false,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=600&q=80",
    description: "A essência pura do relógio clássico redondo, com caixa em ouro rosé 18k e mostrador laqueado marfim.",
    specs: { case: "39mm Ouro Rosé 18k", glass: "Safira Fundo Transparente", movement: "Calibre 26-330 S C", water: "3 ATM (30m)" }
  },
  {
    id: 4,
    brand: "Cartier",
    name: "Tank Must de Cartier",
    category: "Feminino",
    price: 24800.00,
    oldPrice: null,
    isNew: false,
    isBestSeller: true,
    isPromo: false,
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=600&q=80",
    description: "Design retangular atemporal com cabochão de espinélio sintético na coroa e pulseira em couro de bezerro.",
    specs: { case: "33.7mm x 25.5mm Aço", glass: "Cristal de Safira", movement: "Quartzo de Alta Autonomia", water: "3 ATM (30m)" }
  },
  {
    id: 5,
    brand: "Audemars Piguet",
    name: "Royal Oak Selfwinding",
    category: "Luxo",
    price: 268000.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: false,
    isPromo: false,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=600&q=80",
    description: "Luneta octogonal icônica com 8 parafusos hexagonais e mostrador com padrão Grande Tapisserie.",
    specs: { case: "41mm Aço Escovado", glass: "Safira Antirreflexo", movement: "Calibre 4302 Automático", water: "5 ATM (50m)" }
  },
  {
    id: 6,
    brand: "TAG Heuer",
    name: "Carrera Chronograph",
    category: "Esportivo",
    price: 28900.00,
    oldPrice: 33400.00,
    isNew: false,
    isBestSeller: false,
    isPromo: true,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
    description: "Nascido nas pistas de corrida, combina legibilidade imediata com movimento automático Calibre Heuer 02.",
    specs: { case: "42mm Aço Polido", glass: "Safira Abobadada", movement: "Calibre Heuer 02 (80h)", water: "10 ATM (100m)" }
  },
  {
    id: 7,
    brand: "Tissot",
    name: "PRX Powermatic 80",
    category: "Masculino",
    price: 5490.00,
    oldPrice: 6200.00,
    isNew: false,
    isBestSeller: true,
    isPromo: true,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=600&q=80",
    description: "Caixa integrada dos anos 1970 com mostrador texturizado e reserva de marcha de até 80 horas.",
    specs: { case: "40mm Aço 316L", glass: "Safira Antirrisco", movement: "Powermatic 80 Automático", water: "10 ATM (100m)" }
  },
  {
    id: 8,
    brand: "Seiko",
    name: "Presage Cocktail Time Bordeaux",
    category: "Masculino",
    price: 3890.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: false,
    isPromo: false,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=600&q=80",
    description: "Mostrador texturizado em tom vinho profundo inspirado na coquetelaria japonesa de Ginza.",
    specs: { case: "40.5mm Aço Inoxidável", glass: "Hardlex Abobadado", movement: "Calibre 4R35 Automático", water: "5 ATM (50m)" }
  },
  {
    id: 9,
    brand: "Rolex",
    name: "Lady-Datejust 28 Everose",
    category: "Feminino",
    price: 69900.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: false,
    isPromo: false,
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=600&q=80",
    description: "Relógio feminino clássico em aço e ouro Everose 18k com pulseira Jubilee de cinco fileiras.",
    specs: { case: "28mm Rolesor Everose", glass: "Cristal de Safira", movement: "Calibre 2236 Automático", water: "10 ATM (100m)" }
  },
  {
    id: 10,
    brand: "Omega",
    name: "Seamaster Diver 300M",
    category: "Esportivo",
    price: 36500.00,
    oldPrice: 40900.00,
    isNew: false,
    isBestSeller: false,
    isPromo: true,
    image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&w=600&q=80",
    description: "Mostrador em cerâmica polida com ondas gravadas a laser e válvula de escape de hélio.",
    specs: { case: "42mm Aço & Cerâmica", glass: "Safira Antirreflexo", movement: "Calibre Co-Axial 8800", water: "30 ATM (300m)" }
  }
];

let cart = [];
let favorites = JSON.parse(localStorage.getItem("auraFavorites")) || [];
let discountApplied = false;
let selectedCategory = "todos";
let searchQuery = "";

const productModal = new bootstrap.Modal(document.getElementById("productModal"));
const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
const ordersModal = new bootstrap.Modal(document.getElementById("ordersModal"));
const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById("cartOffcanvas"));

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// =========================================================
// MODO ESCURO / CLARO
// =========================================================
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");

function initTheme() {
  const savedTheme = localStorage.getItem("auraTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀";
  }
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeIcon.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("auraTheme", isDark ? "dark" : "light");
});

// =========================================================
// RENDERIZAÇÃO DOS CARDS
// =========================================================
function createProductCard(product) {
  const col = document.createElement("div");
  col.className = "col-sm-6 col-lg-3";

  let tagHTML = "";
  if (product.isPromo) tagHTML = `<span class="tag-pill promo">Oferta</span>`;
  else if (product.isNew) tagHTML = `<span class="tag-pill">Novo</span>`;
  else if (product.isBestSeller) tagHTML = `<span class="tag-pill">Top Vendas</span>`;

  const isFav = favorites.includes(product.id);

  const priceHTML = product.oldPrice
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>
       <p class="product-price">${formatPrice(product.price)}</p>`
    : `<p class="product-price">${formatPrice(product.price)}</p>`;

  col.innerHTML = `
    <article class="product-card">
      <div>
        <div class="d-flex justify-content-between align-items-center">
          <span class="product-brand">${product.brand}</span>
          <div class="d-flex align-items-center gap-2">
            ${tagHTML}
            <button class="btn-fav-card ${isFav ? "active" : ""}" title="Favoritar" data-id="${product.id}">
              ${isFav ? "♥" : "♡"}
            </button>
          </div>
        </div>
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.brand} ${product.name}" loading="lazy">
        </div>
        <h3 class="h6 fw-bold mb-1">${product.name}</h3>
        <div>${priceHTML}</div>
      </div>
      <button class="btn-custom w-100 btn-add">Adicionar ao Carrinho</button>
    </article>
  `;

  col.querySelector(".product-card").addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-add") && !e.target.classList.contains("btn-fav-card")) {
      openProductModal(product);
    }
  });

  col.querySelector(".btn-fav-card").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  });

  col.querySelector(".btn-add").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(product);
  });

  return col;
}

function renderAllSections() {
  const lancamentosGrid = document.getElementById("lancamentos-grid");
  const maisCompradosGrid = document.getElementById("mais-comprados-grid");
  const promocoesGrid = document.getElementById("promocoes-grid");

  lancamentosGrid.innerHTML = "";
  maisCompradosGrid.innerHTML = "";
  promocoesGrid.innerHTML = "";

  products.filter(p => p.isNew).forEach(p => lancamentosGrid.appendChild(createProductCard(p)));
  products.filter(p => p.isBestSeller).forEach(p => maisCompradosGrid.appendChild(createProductCard(p)));
  products.filter(p => p.isPromo).forEach(p => promocoesGrid.appendChild(createProductCard(p)));

  if (!document.getElementById("search-catalog-section").classList.contains("d-none")) {
    renderCatalog();
  }
}

// =========================================================
// FAVORITOS
// =========================================================
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("auraFavorites", JSON.stringify(favorites));
  updateFavoritesUI();
  renderAllSections();
}

function updateFavoritesUI() {
  document.getElementById("fav-count").textContent = favorites.length;
  const container = document.getElementById("favorites-container");

  if (favorites.length === 0) {
    container.innerHTML = `<p class="text-muted text-center my-5">Nenhum relógio favoritado ainda.</p>`;
    return;
  }

  const favProducts = products.filter(p => favorites.includes(p.id));
  container.innerHTML = favProducts.map(item => `
    <div class="cart-item-row d-flex justify-content-between align-items-center">
      <div>
        <span class="product-brand d-block">${item.brand}</span>
        <strong class="small">${item.name}</strong>
        <span class="d-block small opacity-75">${formatPrice(item.price)}</span>
      </div>
      <div class="d-flex gap-1">
        <button class="btn btn-sm btn-dark" onclick="addToCartById(${item.id})">+ Carrinho</button>
        <button class="btn btn-sm btn-outline-danger" onclick="toggleFavorite(${item.id})">&times;</button>
      </div>
    </div>
  `).join("");
}

function addToCartById(id) {
  const prod = products.find(p => p.id === id);
  if (prod) addToCart(prod);
}

// =========================================================
// MODAL DE DETALHES & FICHA TÉCNICA
// =========================================================
function openProductModal(product) {
  document.getElementById("modal-brand").textContent = product.brand;
  document.getElementById("modal-category").textContent = `• ${product.category}`;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-description").textContent = product.description;
  document.getElementById("modal-image").src = product.image;

  document.getElementById("spec-brand").textContent = product.brand;
  document.getElementById("spec-case").textContent = product.specs.case;
  document.getElementById("spec-glass").textContent = product.specs.glass;
  document.getElementById("spec-movement").textContent = product.specs.movement;
  document.getElementById("spec-water").textContent = product.specs.water;

  const priceBox = document.getElementById("modal-price-box");
  priceBox.innerHTML = product.oldPrice
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>
       <strong class="fs-4">${formatPrice(product.price)}</strong>`
    : `<strong class="fs-4">${formatPrice(product.price)}</strong>`;

  document.getElementById("modal-add-btn").onclick = () => {
    addToCart(product);
    productModal.hide();
  };

  productModal.show();
}

// =========================================================
// CARRINHO DE COMPRAS & CHECKOUT
// =========================================================
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCartUI();
  cartOffcanvas.show();
}

function changeQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").textContent = totalItems;

  const container = document.getElementById("cart-items-container");
  const checkoutBtn = document.getElementById("open-checkout-btn");

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-muted text-center my-5">Seu carrinho está vazio.</p>`;
    checkoutBtn.disabled = true;
  } else {
    checkoutBtn.disabled = false;
    container.innerHTML = cart.map(item => `
      <div class="cart-item-row d-flex justify-content-between align-items-center">
        <div>
          <span class="product-brand">${item.brand}</span>
          <strong class="d-block small">${item.name}</strong>
          <small class="opacity-75">${formatPrice(item.price)} cada</small>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, -1)">-</button>
          <span class="fw-bold">${item.qty}</span>
          <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    `).join("");
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = discountApplied ? subtotal * 0.10 : 0;
  const total = subtotal - discount;

  document.getElementById("cart-subtotal").textContent = formatPrice(subtotal);
  document.getElementById("cart-total").textContent = formatPrice(total);
  document.getElementById("checkout-final-total").textContent = formatPrice(total);

  const discountRow = document.getElementById("discount-row");
  if (discountApplied && subtotal > 0) {
    discountRow.classList.remove("d-none");
    document.getElementById("cart-discount").textContent = `- ${formatPrice(discount)}`;
  } else {
    discountRow.classList.add("d-none");
  }
}

document.getElementById("apply-coupon-btn").addEventListener("click", () => {
  const code = document.getElementById("coupon-input").value.trim().toUpperCase();
  const feedback = document.getElementById("coupon-feedback");

  if (code === "AURA10") {
    discountApplied = true;
    feedback.innerHTML = `<span class="text-success fw-bold">Cupom AURA10 aplicado (10% OFF)!</span>`;
    updateCartUI();
  } else {
    feedback.innerHTML = `<span class="text-danger">Cupom inválido. Tente AURA10.</span>`;
  }
});

document.getElementById("open-checkout-btn").addEventListener("click", () => {
  cartOffcanvas.hide();
  const savedName = localStorage.getItem("userName");
  if (savedName) document.getElementById("checkout-name").value = savedName;
  checkoutModal.show();
});

document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const orders = JSON.parse(localStorage.getItem("auraOrders")) || [];
  const totalText = document.getElementById("checkout-final-total").textContent;
  orders.unshift({
    date: new Date().toLocaleDateString("pt-BR"),
    items: cart.map(i => `${i.qty}x ${i.brand} ${i.name}`).join(", "),
    total: totalText
  });
  localStorage.setItem("auraOrders", JSON.stringify(orders));

  checkoutModal.hide();
  alert("Pedido confirmado com sucesso! Certificado de autenticidade emitido.");
  cart = [];
  discountApplied = false;
  document.getElementById("coupon-input").value = "";
  document.getElementById("coupon-feedback").innerHTML = "";
  updateCartUI();
});

// =========================================================
// BUSCA E CATÁLOGO GERAL
// =========================================================
const searchSection = document.getElementById("search-catalog-section");
const toggleSearchBtn = document.getElementById("toggle-search-btn");
const searchInput = document.getElementById("search-input");
const catalogGrid = document.getElementById("catalog-grid");
const noResults = document.getElementById("no-results");

function renderCatalog() {
  const filtered = products.filter(p => {
    const matchCat = selectedCategory === "todos" || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchText = p.name.toLowerCase().includes(q) ||
                      p.brand.toLowerCase().includes(q) ||
                      p.category.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  catalogGrid.innerHTML = "";
  if (filtered.length === 0) {
    noResults.classList.remove("d-none");
    return;
  }
  noResults.classList.add("d-none");
  filtered.forEach(p => catalogGrid.appendChild(createProductCard(p)));
}

function openSearchCatalog(cat = null, brandSearch = "") {
  searchSection.classList.remove("d-none");
  toggleSearchBtn.classList.add("active");

  if (cat) {
    selectedCategory = cat;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.category === cat));
  }

  searchQuery = brandSearch;
  searchInput.value = brandSearch;

  renderCatalog();
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => searchInput.focus(), 200);
}

toggleSearchBtn.addEventListener("click", () => {
  if (searchSection.classList.contains("d-none")) openSearchCatalog("todos", "");
  else {
    searchSection.classList.add("d-none");
    toggleSearchBtn.classList.remove("active");
  }
});

document.getElementById("close-search-btn").addEventListener("click", () => {
  searchSection.classList.add("d-none");
  toggleSearchBtn.classList.remove("active");
});

document.querySelectorAll(".brand-item, .footer-brand-link").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openSearchCatalog("todos", btn.dataset.brand);
  });
});

document.querySelectorAll(".cat-card").forEach(card => {
  card.addEventListener("click", () => openSearchCatalog(card.dataset.filter, ""));
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.category;
    renderCatalog();
  });
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderCatalog();
});

// =========================================================
// FORMULÁRIO DE CONTATO
// =========================================================
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  const feedback = document.getElementById("contact-feedback");
  feedback.innerHTML = `<span class="text-vinho">Obrigado, ${name}! Sua mensagem foi enviada ao nosso Concierge. Retornaremos em breve.</span>`;
  e.target.reset();
});

// =========================================================
// ANIMAÇÃO DO RELÓGIO NO SCROLL
// =========================================================
const scrollWrapper = document.getElementById("watch-scroll-section");
const layerBezel = document.getElementById("layer-bezel");
const layerDial = document.getElementById("layer-dial");
const layerMovement = document.getElementById("layer-movement");
const layerCaseback = document.getElementById("layer-caseback");
const layerStrapLeft = document.getElementById("layer-strap-left");
const layerStrapRight = document.getElementById("layer-strap-right");
const layerCrown = document.getElementById("layer-crown");
const layerLabels = document.querySelectorAll(".layer-label");
const progressFill = document.getElementById("scroll-progress-fill");
const steps = [
  document.getElementById("step-1"),
  document.getElementById("step-2"),
  document.getElementById("step-3"),
  document.getElementById("step-4")
];

function updateWatchExplosion() {
  if (!scrollWrapper) return;
  const rect = scrollWrapper.getBoundingClientRect();
  const scrollableDistance = rect.height - window.innerHeight;
  let progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));

  progressFill.style.width = `${progress * 100}%`;
  const explosion = Math.sin(progress * Math.PI);

  layerBezel.style.transform    = `translateY(${-explosion * 155}px)`;
  layerDial.style.transform     = `translateY(${-explosion * 85}px)`;
  layerMovement.style.transform = `translateY(${-explosion * 25}px)`;
  layerCaseback.style.transform = `translateY(${explosion * 115}px)`;
  layerStrapLeft.style.transform  = `translateX(${-explosion * 55}px)`;
  layerStrapRight.style.transform = `translateX(${explosion * 55}px)`;
  layerCrown.style.transform      = `translateX(${explosion * 45}px)`;

  layerLabels.forEach(label => label.style.opacity = explosion > 0.35 ? "1" : "0");

  steps.forEach(s => s.classList.remove("active"));
  if (progress < 0.22) steps[0].classList.add("active");
  else if (progress < 0.50) steps[1].classList.add("active");
  else if (progress < 0.78) steps[2].classList.add("active");
  else steps[3].classList.add("active");
}

window.addEventListener("scroll", updateWatchExplosion, { passive: true });

// =========================================================
// AUTENTICAÇÃO, HISTÓRICO DE PEDIDOS & NEWSLETTER
// =========================================================
function openOrdersModal() {
  const orders = JSON.parse(localStorage.getItem("auraOrders")) || [];
  const container = document.getElementById("orders-history-container");

  if (orders.length === 0) {
    container.innerHTML = `<p class="text-muted text-center my-3">Você ainda não realizou nenhum pedido.</p>`;
  } else {
    container.innerHTML = orders.map(o => `
      <div class="border p-3 mb-2">
        <div class="d-flex justify-content-between small opacity-75 mb-1">
          <span>Data: ${o.date}</span>
          <strong class="text-vinho">${o.total}</strong>
        </div>
        <div class="small fw-bold">${o.items}</div>
      </div>
    `).join("");
  }
  ordersModal.show();
}

function checkUserLogin() {
  const userArea = document.getElementById("user-area");
  const isLoggedIn = localStorage.getItem("userLoggedIn");
  const userName = localStorage.getItem("userName");

  if (isLoggedIn === "true" && userName) {
    userArea.innerHTML = `
      <div class="user-greeting">
        <span>Olá, <strong>${userName}</strong></span>
        <button id="orders-btn" class="btn-logout">Pedidos</button>
        <button id="logout-btn" class="btn-logout">Sair</button>
      </div>
    `;
    document.getElementById("orders-btn").addEventListener("click", openOrdersModal);
    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.removeItem("userLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      window.location.reload();
    });
  }
}

document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Inscrição confirmada no Clube Privado Aura Horlogerie!");
  e.target.reset();
});

// Inicialização
initTheme();
checkUserLogin();
renderAllSections();
updateFavoritesUI();
updateWatchExplosion();