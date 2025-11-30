const kgPerLb = 1/2.20462; // 0.45359237

// Catálogo con secciones -> subsecciones -> productos
const catalog = {
  "frutas": {
    name: "Frutas",
    subsections: {
      citricos: {
        name: "Cítricos",
        items: [
          {id:"kiwi", name:"Kiwi", pricePerKg:20000, img:"https://www.5aldia.es/es/wp-content/uploads/2017/09/kiwi.jpeg", desc:"Dulce y ácido, ideal para jugos frescos y ensaladas."},
          {id:"limon-tahiti", name:"Limón Tahití", pricePerKg:4000, img:"https://agroclick.org//images/blog/Blog%20Limo%CC%81n%20Tahiti%CC%81_2.jpg-04-10-2022%2016:53:12.jpg", desc:"Acidez equilibrada, perfecto para aderezos."},
          {id:"mandarina", name:"Mandarina", pricePerKg:5000, img:"https://static4.depositphotos.com/1020804/341/i/450/depositphotos_3415019-stock-photo-mandarine.jpg", desc:"Fácil de pelar, snack saludable."}
        ]
      },
      tropicales: {
        name: "Tropicales",
        items: [
          {id:"mango-tommy", name:"Mango Tommy", pricePerKg:6500, img:"https://fruverhome.co/wp-content/uploads/2020/08/mango-tommy.jpg.webp", desc:"Excelente fuente de vitamina C y pro vitamina A."},
          {id:"papaya", name:"Papaya Hawaiana", pricePerKg:3000, img:"https://m.media-amazon.com/images/I/919wgTuDEZL.jpg", desc:"Suave y aromática, rica en papaina."},
          {id:"pina-golden", name:"Piña Golden", pricePerKg:2500, img:"https://fruverhome.co/wp-content/uploads/2020/08/Pi%C3%B1a-Golden.jpg", desc:"Dulce, de baja acidez."},
          {id:"fresa", name:"Fresa", pricePerKg:5000, img:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop", desc:"Fruto rojo, dulce y ligeramente ácido."}
        ]
      }
    }
  },

  "verduras": {
    name: "Verduras",
    subsections: {
      hojas: {
        name: "De hoja",
        items: [
          {id:"espinaca", name:"Espinaca", pricePerKg:7000, img:"https://boginatural.com/wp-content/uploads/2023/09/Espinaca-Americana.png", desc:"Tierna y rica en hierro."},
          {id:"lechuga", name:"Lechuga Crespa verde", pricePerKg:5000, img:"https://exitocol.vteximg.com.br/arquivos/ids/25416525/Lechuga-Verde-Crespa-En-Bolsa-X-200-gr-839802_a.jpg?v=638657248647430000", desc:"Crujiente."},
          {id:"acelga", name:"Acelga", pricePerKg:6000, img:"https://exitocol.vtexassets.com/arquivos/ids/25419136/Acelga-X-500gr-909685_a.jpg?v=638657780613030000", desc:"Versátil para sopas."},
          {id:"lechuga2", name:"Lechuga Romana", pricePerKg:6000, img:"https://mistiendas.com.co/72-large_default/lechuga-romana-kilo.jpg", desc:"Hojas largas y crujientes."}
        ]
      },
      cruciferas: {
        name: "Crucíferas",
        items: [
          {id:"brocoli", name:"Brócoli", pricePerKg:8000, img:"https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_294838064-min.jpg", desc:"Excelente al vapor."},
          {id:"coliflor", name:"Coliflor", pricePerKg:7500, img:"https://fhfontellas.com/wp-content/uploads/coliflor.jpg", desc:"Perfecta para purés."},
          {id:"repollo", name:"Repollo Morado", pricePerKg:4000, img:"https://www.laprensagrafica.com/__export/1509397900844/sites/prensagrafica/img/2017/10/30/repollo_morado_1.jpg_1902800913.jpg", desc:"Ideal para ensaladas."}
        ]
      }
    }
  },

  "raices": {
    name: "Raíces & Tubérculos",
    subsections: {
      clasicos: {
        name: "Clásicos",
        items: [
          {id:"papa", name:"Papa Pastusa", pricePerKg:960, img:"https://mercadobecampo.com/cdn/shop/files/2340_IT_1x520_0328e34a-33b9-4042-bb42-f031ebe48053.jpg?v=1701048052", desc:"Ideal para asados."},
          {id:"yuca", name:"Yuca", pricePerKg:3200, img:"https://terrabad.co/wp-content/uploads/2020/09/yuca.jpg", desc:"Perfecta para frituras."},
          {id:"zanahoria", name:"Zanahoria", pricePerKg:2800, img:"https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/2/8/286_32.jpg", desc:"Dulce y crujiente."},
          {id:"papa2", name:"Papa Sabanera", pricePerKg:980, img:"https://sembrandoconfianza.com/wp-content/uploads/2022/04/Papa-Sabanera-1-1.jpg", desc:"Perfecta para fritar."}
        ]
      },
      bulbos: {
        name: "Bulbos",
        items: [
          {id:"cebolla-cabezona", name:"Cebolla Cabezona", pricePerKg:3000, img:"https://www.fructusterrum.com/wp-content/uploads/2020/07/cebolla-roja-1.jpg", desc:"Aromática."},
          {id:"cebolla-larga", name:"Cebolla Larga", pricePerKg:2500, img:"https://fruverhome.co/wp-content/uploads/2020/08/CEBOLLA-LARGA.jpg.webp", desc:"Suave y fresca."},
          {id:"ajo", name:"Ajo", pricePerKg:7550, img:"https://fruverhome.co/wp-content/uploads/2020/08/Ajo-Importado-1.jpg.webp", desc:"Sabor intenso."}
        ]
      }
    }
  },

  "hierbas": {
    name: "Hierbas & Aromáticas",
    subsections: {
      finas: {
        name: "Hierbas finas",
        items: [
          {id:"cilantro", name:"Cilantro", pricePerKg:10000, img:"https://www.fruvext.com.co/wp-content/uploads/2021/06/cilantro.jpg", desc:"Ideal para guacamole."},
          {id:"perejil", name:"Perejil", pricePerKg:9000, img:"https://fruverhome.co/wp-content/uploads/2020/08/Perejil-Crespo.jpg.webp", desc:"Perfecto para salsas."},
          {id:"apio", name:"Apio", pricePerKg:16000, img:"https://www.fruvext.com.co/wp-content/uploads/2021/06/Apio-Comprar-frutas-y-verduras-en-Online-Domicilio-Bogota.png", desc:"Ideal para ensaladas."}
        ]
      },
      pimientos: {
        name: "Aromáticas",
        items: [
          {id:"manzanilla", name:"Manzanilla", pricePerKg:2000, img:"https://fruverhome.co/wp-content/uploads/2020/08/Manzanilla.jpg.webp", desc:"Digestiva."},
          {id:"toronjil", name:"Toronjil", pricePerKg:2500, img:"https://fundacionmujeresempresarias.org/wp-content/uploads/2018/07/toronjil-a.jpg", desc:"Aroma a limón."},
          {id:"hierba", name:"Hierba Buena", pricePerKg:1800, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27DYxUxr1VmWME98GIVvV59uS5jy-sDb3Bw&s", desc:"Refrescante."}
        ]
      }
    }
  }
};

// Estado del carrito
let cart = [];

function formatCOP(value){
  return value.toLocaleString('es-CO', {style:'currency', currency:'COP', maximumFractionDigits:0});
}

function productCard(p, sectionKey, subsectionKey){
  return `
  <article class="card" data-name="${p.name}" data-id="${p.id}">
    <img src="${p.img}" alt="${p.name}">
    <div class="body">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:start">
        <div>
          <div class="name">${p.name}</div>
          <div class="muted">${p.desc}</div>
        </div>
        <div class="price">${formatCOP(p.pricePerKg)}/kg</div>
      </div>
      <div class="controls">
        <input type="number" min="0.25" step="0.25" value="1" aria-label="Cantidad">
        <select aria-label="Unidad">
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
        <button class="btn" onclick="addToCart('${sectionKey}','${subsectionKey}','${p.id}', this)">Agregar</button>
      </div>
    </div>
  </article>`;
}

function renderSections(){
  Object.keys(catalog).forEach(sectionKey=>{
    const section = catalog[sectionKey];
    const pills = document.querySelector(`[data-subsections="${sectionKey}"]`);
    const firstSubKey = Object.keys(section.subsections)[0];

    Object.entries(section.subsections).forEach(([subKey, sub])=>{
      const btn = document.createElement('button');
      btn.textContent = sub.name;
      btn.dataset.subKey = subKey;
      btn.className = `subpill ${subKey===firstSubKey?'active':''}`;

      btn.addEventListener('click', ()=>{
        pills.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        renderCards(sectionKey, subKey);
      });

      pills.appendChild(btn);
    });

    renderCards(sectionKey, firstSubKey);
  });
}

function renderCards(sectionKey, subKey){
  const gridEl = document.getElementById(`cards-${sectionKey}`);
  gridEl.innerHTML = '';
  const items = catalog[sectionKey].subsections[subKey].items;

  items.forEach(p=>{
    gridEl.insertAdjacentHTML('beforeend', productCard(p, sectionKey, subKey));
  });
}

function addToCart(sectionKey, subKey, id, btn){
  const card = btn.closest('.card');
  const qty = parseFloat(card.querySelector('input').value || '1');
  const unit = card.querySelector('select').value;

  const p = catalog[sectionKey].subsections[subKey].items.find(i=>i.id===id);
  if(!p) return;

  const existing = cart.find(i=>i.id===p.id && i.unit===unit);
  if(existing){ existing.qty += qty; }
  else{
    cart.push({id:p.id, name:p.name, img:p.img, pricePerKg:p.pricePerKg, qty, unit});
  }

  renderCart();
  updateMobileCartBar();
}

function removeFromCart(id, unit){
  cart = cart.filter(i=> !(i.id===id && i.unit===unit));
  renderCart();
  updateMobileCartBar();
}

function updateCartQty(id, unit, newQty){
  const item = cart.find(i=>i.id===id && i.unit===unit);
  if(item){
    item.qty = Math.max(0.25, Number(newQty)||1);
    renderCart();
    updateMobileCartBar();
  }
}

function updateCartUnit(id, oldUnit, newUnit){
  const item = cart.find(i=>i.id===id && i.unit===oldUnit);
  if(!item) return;

  const target = cart.find(i=>i.id===id && i.unit===newUnit);
  if(target){
    target.qty += item.qty;
    removeFromCart(id, oldUnit);
  } else {
    item.unit = newUnit;
  }

  renderCart();
  updateMobileCartBar();
}

function lineTotal(item){
  const qtyKg = item.unit==='kg' ? item.qty : item.qty * kgPerLb;
  return qtyKg * item.pricePerKg;
}

function renderCart(){
  const itemsEl = document.getElementById('cartItems');
  const countBadge = document.getElementById('cartCount');

  itemsEl.innerHTML = '';

  if(cart.length===0){
    itemsEl.innerHTML = `<div class="empty">Tu carrito está vacío.</div>`;
  } else {
    cart.forEach(it=>{
      const html = `
      <div class="cart-item">
        <img src="${it.img}" alt="${it.name}">
        <div>
          <div class="name">${it.name}</div>
          <div class="meta">${formatCOP(it.pricePerKg)}/kg</div>
          <div class="meta">Subtotal: ${formatCOP(lineTotal(it))}</div>
        </div>
        <div class="qty">
          <input type="number" min="0.25" step="0.25" value="${it.qty}" onchange="updateCartQty('${it.id}','${it.unit}', this.value)">
          <select onchange="updateCartUnit('${it.id}','${it.unit}', this.value)">
            <option value="kg" ${it.unit==='kg'?'selected':''}>kg</option>
            <option value="lb" ${it.unit==='lb'?'selected':''}>lb</option>
          </select>
          <button class="btn ghost" onclick="removeFromCart('${it.id}','${it.unit}')">✕</button>
        </div>
      </div>`;
      itemsEl.insertAdjacentHTML('beforeend', html);
    });
  }

  const total = cart.reduce((acc,it)=> acc + lineTotal(it), 0);
  document.getElementById('cartTotal').textContent = formatCOP(total);

  if(cart.length>0){
    countBadge.style.display='grid';
    countBadge.textContent = cart.length;
  } else {
    countBadge.style.display='none';
  }
}

function clearCart(){ 
  cart = []; 
  renderCart(); 
  updateMobileCartBar();
}

function checkout(){
  if(cart.length===0){ alert('Tu carrito está vacío.'); return; }

  const total = cart.reduce((acc,it)=> acc + lineTotal(it), 0);
  alert(`¡Gracias! Total a pagar: ${formatCOP(total)}.`);
}

function openCart(){
  document.getElementById('cartSidebar').scrollIntoView({behavior:'smooth'});
}

// Búsqueda global mejorada
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card=>{
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(q) ? '' : 'none';
  });
});

// ===============================
// 📱 BARRA DE CARRITO MÓVIL
// ===============================

function updateMobileCartBar() {
  const count = cart.length;
  let total = cart.reduce((acc, item) => acc + lineTotal(item), 0);

  const countEl = document.getElementById("mc-count");
  const totalEl = document.getElementById("mc-total");

  if (!countEl || !totalEl) return;

  countEl.textContent = count;
  totalEl.textContent = formatCOP(total);
}

// Inicializar
renderSections();
renderCart();
updateMobileCartBar();

document.getElementById('year').textContent = new Date().getFullYear();
