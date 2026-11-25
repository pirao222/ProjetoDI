// Catálogo Completo com 20 Relógios de Marcas Icônicas
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
    image: "https://i.ebayimg.com/images/g/Ly4AAeSwQdNq71zo/s-l1600.jpg",
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
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/38270005/4342895111.jpg",
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
    image: "https://a.1stdibscdn.com/patek-philippe-calatrava-18k-rose-gold-ivory-dial-automatic-men-watch-5227r-001-for-sale-picture-7/j_13103/j_250044921735318870880/WhatsApp_Image_2024_12_19_at_10_09_04_c9a252b0_master.jpg",
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
    image: "https://www.watchvault.com.au/cdn/shop/products/Cartier_Tank_Must_XL_WSTA0040_-_2022_Watch_Vault_02_2048x.jpg?v=1665629232",
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
    image: "https://tickingway.com/wp-content/uploads/2022/12/DSC01582-scaled.jpg",
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
    image: "https://www.tagheuer.com/on/demandware.static/-/Library-Sites-TagHeuer-Shared/default/dw1520ce2a/images/collections/carrera/date/push-carrera-chronograph-sport.jpg",
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
    image: "https://1.bp.blogspot.com/-WW3UtovW2Wk/YSFcBo7GgBI/AAAAAAAAy3s/xyLTDcxDnBgZvdgqs-c-BlnYdysXv9QEwCLcBGAsYHQ/s1100/Tissot_PRX_Powermatic_80_001.jpg",
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
    image: "https://devriesjewelers.com/wp-content/uploads/2024/05/New-Project-2.jpg",
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
    image: "https://watchmaestro.com/wp-content/uploads/2022/04/Rolex-Lady-Datejust-28-in-Oystersteel-and-Everose-Gold-A-Rose-2-1024x1024.png",
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
    image: "https://images.squarespace-cdn.com/content/v1/59ed5acbd7bdce7cce158518/1661741820945-YAKNUOJEV8DFZ6O7MKB1/Omega+Seamaster+Diver+300M+Co-Axial+Black+42mm+210.30.42.20.01.001+-+2020+Watch+Vault+02.jpg",
    description: "Mostrador em cerâmica polida com ondas gravadas a laser e válvula de escape de hélio.",
    specs: { case: "42mm Aço & Cerâmica", glass: "Safira Antirreflexo", movement: "Calibre Co-Axial 8800", water: "30 ATM (300m)" }
  },
  {
    id: 11,
    brand: "IWC",
    name: "Portugieser Chronograph",
    category: "Luxo",
    price: 58900.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: false,
    isPromo: false,
    image: "https://watchesbysjx.com/wp-content/uploads/2020/05/IWC-Portugieser-Chronograph-3716-5-1536x1075.jpg",
    description: "Mostrador limpo com algarismos arábicos aplicados e ponteiros feuille ultrafinos de inspiração náutica.",
    specs: { case: "41mm Aço Inoxidável", glass: "Safira Antirreflexo", movement: "Calibre Manufatura 69355", water: "3 ATM (30m)" }
  },
  {
    id: 12,
    brand: "Breitling",
    name: "Navitimer B01 Chronograph 43",
    category: "Esportivo",
    price: 54200.00,
    oldPrice: 59800.00,
    isNew: false,
    isBestSeller: false,
    isPromo: true,
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/38270005/3931241692.jpg",
    description: "O lendário relógio de aviação com régua de cálculo circular e movimento cronógrafo certificado COSC.",
    specs: { case: "43mm Aço Polido", glass: "Safira Abobadada", movement: "Calibre Breitling 01 (70h)", water: "3 ATM (30m)" }
  },
  {
    id: 13,
    brand: "Jaeger-LeCoultre",
    name: "Reverso Classic Medium",
    category: "Luxo",
    price: 67500.00,
    oldPrice: null,
    isNew: false,
    isBestSeller: true,
    isPromo: false,
    image: "https://img.jaeger-lecoultre.com/fifty-fifty-standard-1/o-dpr-2/e59e0b1471067e6f1a1cc0b05c96807a952db909.jpg",
    description: "Caixa reversível Art Déco criada em 1931 para jogadores de polo, com acabamento guilloché.",
    specs: { case: "40.1mm x 24.4mm Aço", glass: "Cristal de Safira", movement: "Calibre 822A/2 Corda Manual", water: "3 ATM (30m)" }
  },
  {
    id: 14,
    brand: "Tudor",
    name: "Black Bay Fifty-Eight",
    category: "Masculino",
    price: 25900.00,
    oldPrice: null,
    isNew: false,
    isBestSeller: true,
    isPromo: false,
    image: "https://img.chrono24.com/images/uhren/b69z9h1p4qrt-wik52quf7qsbg6by2qp4e34v-ExtraLarge.jpg",
    description: "Proporções vintage de 39mm com detalhes dourados no mostrador e ponteiros Snowflake.",
    specs: { case: "39mm Aço Acetinado", glass: "Safira Abobadada", movement: "Calibre Manufatura MT5402", water: "20 ATM (200m)" }
  },
  {
    id: 15,
    brand: "Cartier",
    name: "Ballon Bleu de Cartier 33mm",
    category: "Feminino",
    price: 38400.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: false,
    isPromo: false,
    image: "https://img.everywatch.com/media/2026/11/24/cartier-ballon-bleu-de-cartier-3489-100150604.webp",
    description: "Caixa redonda abaulada como um seixo com coroa integrada protegida por arco metálico.",
    specs: { case: "33mm Aço Polido", glass: "Cristal de Safira", movement: "Automático Calibre Cartier", water: "3 ATM (30m)" }
  },
  {
    id: 16,
    brand: "Rolex",
    name: "Cosmograph Daytona Panda",
    category: "Esportivo",
    price: 189000.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: true,
    isPromo: false,
    image: "https://img.chrono24.com/images/uhren/49975201-05zr0uw6bns51yayf5khp5jl-ExtraLarge.jpg",
    description: "O cronógrafo definitivo do automobilismo com luneta Cerachrom preta e submostradores contrastantes.",
    specs: { case: "40mm Aço Oystersteel", glass: "Cristal de Safira", movement: "Calibre 4131 Automático", water: "10 ATM (100m)" }
  },
  {
    id: 17,
    brand: "Longines",
    name: "DolceVita Mini Steel",
    category: "Feminino",
    price: 11200.00,
    oldPrice: 12900.00,
    isNew: false,
    isBestSeller: false,
    isPromo: true,
    image: "https://tse3.mm.bing.net/th/id/OIP.syPMQNyDmHRxr978pT2H8QHaJB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Elegância italiana com caixa retangular esguia, mostrador flinqué prateado e algarismos romanos.",
    specs: { case: "20.8mm x 32mm Aço", glass: "Cristal de Safira", movement: "Quartzo Suíço L178", water: "3 ATM (30m)" }
  },
  {
    id: 18,
    brand: "TAG Heuer",
    name: "Monaco Calibre 11",
    category: "Esportivo",
    price: 44800.00,
    oldPrice: null,
    isNew: true,
    isBestSeller: false,
    isPromo: false,
    image: "https://www.q-watches.com/data/ab/artikelen/artikel-thumbs/tag_heuer_monaco_calibre_11_(2).jpeg",
    description: "O primeiro cronógrafo automático com caixa quadrada à prova d'água, imortalizado nas pistas de Le Mans.",
    specs: { case: "39mm Aço Escovado", glass: "Safira Chanfrada", movement: "Calibre 11 Automático", water: "10 ATM (100m)" }
  },
  {
    id: 19,
    brand: "Seiko",
    name: "Prospex Alpinist Forest",
    category: "Masculino",
    price: 4690.00,
    oldPrice: 5390.00,
    isNew: false,
    isBestSeller: false,
    isPromo: true,
    image: "https://www.ioomobile.com/assets/images/seiko-prospex-spb212j1-men-watch-01.jpg",
    description: "Relógio de expedição com bússola interna giratória, mostrador verde esmeralda e reserva de 70 horas.",
    specs: { case: "39.5mm Aço Inoxidável", glass: "Safira Antirreflexo", movement: "Calibre 6R35 Automático", water: "20 ATM (200m)" }
  },
  {
    id: 20,
    brand: "Omega",
    name: "Constellation Co-Axial 29mm",
    category: "Feminino",
    price: 41900.00,
    oldPrice: 46500.00,
    isNew: false,
    isBestSeller: true,
    isPromo: true,
    image: "https://www.watchswiss.com/wp-content/uploads/2022/02/Untitled-1.png",
    description: "As famosas garras laterais e índices em diamante sobre mostrador em madrepérola natural.",
    specs: { case: "29mm Aço & Ouro Sedna", glass: "Safira Abobadada", movement: "Calibre Co-Axial 8700", water: "5 ATM (50m)" }
  }
];

// Persistência no localStorage
let cart = JSON.parse(localStorage.getItem("auraCart")) || [];
let favorites = JSON.parse(localStorage.getItem("auraFavorites")) || [];
let discountApplied = false;
let selectedCategory = "todos";
let searchQuery = "";
let sortOption = "default";

const productModal = new bootstrap.Modal(document.getElementById("productModal"));
const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
const ordersModal = new bootstrap.Modal(document.getElementById("ordersModal"));
const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById("cartOffcanvas"));
const auraToast = new bootstrap.Toast(document.getElementById("auraToast"), { delay: 3200 });

function showToast(message) {
  document.getElementById("auraToastBody").textContent = message;
  auraToast.show();
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function saveCart() {
  localStorage.setItem("auraCart", JSON.stringify(cart));
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
// RENDERIZAÇÃO DOS CARDS (Com Parcelamento em 12x)
// =========================================================
function createProductCard(product) {
  const col = document.createElement("div");
  col.className = "col-sm-6 col-lg-3";

  let tagHTML = "";
  if (product.isPromo) tagHTML = `<span class="tag-pill promo">Oferta</span>`;
  else if (product.isNew) tagHTML = `<span class="tag-pill">Novo</span>`;
  else if (product.isBestSeller) tagHTML = `<span class="tag-pill">Top Vendas</span>`;

  const isFav = favorites.includes(product.id);
  const installment = formatPrice(product.price / 12);

  const priceHTML = product.oldPrice
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>
       <p class="product-price">${formatPrice(product.price)}</p>
       <span class="installment-text">ou 12x de ${installment} sem juros</span>`
    : `<p class="product-price">${formatPrice(product.price)}</p>
       <span class="installment-text">ou 12x de ${installment} sem juros</span>`;

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
  const prod = products.find(p => p.id === id);
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
    if (prod) showToast(`${prod.brand} ${prod.name} removido dos favoritos.`);
  } else {
    favorites.push(id);
    if (prod) showToast(`${prod.brand} ${prod.name} adicionado aos favoritos!`);
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

  const installment = formatPrice(product.price / 12);
  const priceBox = document.getElementById("modal-price-box");
  priceBox.innerHTML = product.oldPrice
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>
       <strong class="fs-4 d-block">${formatPrice(product.price)}</strong>
       <small class="opacity-75">ou 12x de ${installment} sem juros</small>`
    : `<strong class="fs-4 d-block">${formatPrice(product.price)}</strong>
       <small class="opacity-75">ou 12x de ${installment} sem juros</small>`;

  document.getElementById("modal-add-btn").onclick = () => {
    addToCart(product);
    productModal.hide();
  };

  productModal.show();
}

// =========================================================
// CARRINHO DE COMPRAS & CHECKOUT (Exige Login)
// =========================================================
function addToCart(product) {
  const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";

  // Se não estiver logado, salva a intenção e redireciona para o login
  if (!isLoggedIn) {
    localStorage.setItem("pendingCartProductId", product.id);
    showToast("Faça login para adicionar peças ao seu carrinho.");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1100);
    return;
  }

  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart();
  updateCartUI();
  cartOffcanvas.show();
}

function changeQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
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
  showToast("Pedido confirmado! Certificado de autenticidade emitido.");
  cart = [];
  saveCart();
  discountApplied = false;
  document.getElementById("coupon-input").value = "";
  document.getElementById("coupon-feedback").innerHTML = "";
  updateCartUI();
});

// =========================================================
// BUSCA, ORDENAÇÃO E CATÁLOGO GERAL
// =========================================================
const searchSection = document.getElementById("search-catalog-section");
const toggleSearchBtn = document.getElementById("toggle-search-btn");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const catalogGrid = document.getElementById("catalog-grid");
const noResults = document.getElementById("no-results");

function renderCatalog() {
  let filtered = products.filter(p => {
    const matchCat = selectedCategory === "todos" || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchText = p.name.toLowerCase().includes(q) ||
                      p.brand.toLowerCase().includes(q) ||
                      p.category.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  if (sortOption === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === "name-asc") {
    filtered.sort((a, b) => `${a.brand} ${a.name}`.localeCompare(`${b.brand} ${b.name}`));
  }

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

sortSelect.addEventListener("change", (e) => {
  sortOption = e.target.value;
  renderCatalog();
});

// =========================================================
// FORMULÁRIO DE CONTATO & NEWSLETTER
// =========================================================
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  const feedback = document.getElementById("contact-feedback");
  feedback.innerHTML = `<span class="text-vinho">Obrigado, ${name}! Sua mensagem foi enviada ao nosso Concierge. Retornaremos em breve.</span>`;
  showToast("Mensagem enviada ao Concierge com sucesso!");
  e.target.reset();
});

document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Inscrição confirmada no Clube Privado Aura Horlogerie!");
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
// AUTENTICAÇÃO & HISTÓRICO DE PEDIDOS
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

// Inicialização Geral
initTheme();
checkUserLogin();
renderAllSections();
updateCartUI();
updateFavoritesUI();
updateWatchExplosion();

// Se o usuário acabou de logar após clicar em "Adicionar ao Carrinho"
if (localStorage.getItem("userLoggedIn") === "true") {
  const pendingId = localStorage.getItem("pendingCartProductId");
  if (pendingId) {
    localStorage.removeItem("pendingCartProductId");
    const pendingProduct = products.find(p => p.id === Number(pendingId));
    if (pendingProduct) {
      addToCart(pendingProduct);
    }
  }
}