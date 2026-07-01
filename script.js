const order = {
  drink: "masala_chai",
  size: "medium",
  milk: "regular",
  extras: [],
};

const prices = {
  masala_chai: 15.0,
  adrak_chai: 20.0,
  elaichi_chai: 15.0,
  chocolate_chai: 20.0,
  black_tea: 10.0,
  small: 0.0,
  medium: 5.0,
  large: 10.0,
  bun_maska: 25.0,
  vanilla: 10.0,
  caramel: 10.0,
  coco_powder: 5.0,
};

const drinkColours = {
  masala_chai: "#9c5239",
  adrak_chai: "#7b4f2e",
  elaichi_chai: "#b07442",
  chocolate_chai: "#cc602d",
  black_tea: "#1e0c04",
};

const sizeHeight = {
  small: "40%",
  medium: "65%",
  large: "90%",
};

const extraLabels = {
  bun_maska: "Bun Maska",
  vanilla: "Vanilla Syrup",
  caramel: "Caramel Syrup",
  whipped: "Whipped Cream",
  coco_powder: "Coco Powder",
};

const cup = document.getElementById("cup");
const summary = document.getElementById("summary");

function updateCup() {
  cup.style.setProperty("--fill-colour", drinkColours[order.drink]);
  cup.style.setProperty("--fill-height", sizeHeight[order.size]);

  ["bun_maska", "vanilla", "caramel","coco_powder"].forEach((extra) => {
    document
      .getElementById("badge-" + extra)
      .classList.toggle("visible", order.extras.includes(extra));
  });
}

function updateSummary() {
  const cap = (s) => s[0].toUpperCase() + s.slice(1);
  const milkLabel = order.milk === "no milk" || order.milk === "none" ? "No Milk" : cap(order.milk) + " Milk";

  let total = prices[order.drink] + prices[order.size];
  order.extras.forEach((e) => {
    total += prices[e];
  });


  const extraRows = order.extras
    .map(
      (e) => `
      <div class="summary-row">
        <span>${extraLabels[e]}</span>
        <span>+₹${prices[e].toFixed(2)}</span>
      </div>`,
    )
    .join("");

  summary.innerHTML = `
    <h3>Your Order</h3>
    <div class="summary-row">
      <span>${cap(order.drink)}</span>
      <span>₹${prices[order.drink].toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>${cap(order.size)}</span>
      <span>${prices[order.size] > 0 ? "+₹" + prices[order.size].toFixed(2) : "—"}</span>
    </div>
    <div class="summary-row">
      <span>${milkLabel}</span>
      <span>—</span>
    </div>
    ${extraRows}
    <hr class="summary-divider" />
    <div class="summary-total">
      <span>Total</span>
      <span>₹${total.toFixed(2)}</span>
    </div>
  `;
}

document.querySelectorAll('input[name="coffee-type"]').forEach((input) => {
  input.addEventListener("change", function () {
    order.drink = this.value.toLowerCase();
    console.log(order);
    updateCup();
    updateSummary();
  });
});

document.querySelectorAll('input[name="coffee-size"]').forEach((input) => {
  input.addEventListener("change", function () {
    order.size = this.value.toLowerCase();
    console.log(order);
    updateCup();
    updateSummary();
  });
});

document.querySelectorAll('input[name="milk"]').forEach((input) => {
  input.addEventListener("change", function () {
    const v = this.value.toLowerCase();
    order.milk = v === 'no milk' ? 'no milk' : v;
    updateCup();
    updateSummary();
  });
});

document.querySelectorAll('input[name="extras"]').forEach((input) => {
  input.addEventListener("change", function () {
    const raw = this.value.toLowerCase();
    const mapExtras = {
      'bun_maska': 'bun_maska',
      'vanilla syrup': 'vanilla',
      'caramel syrup': 'caramel',
      'whipped cream': 'whipped',
      'coco_powder': 'coco_powder'
    };
    const key = mapExtras[raw] || raw.replace(/\s+/g, '');
    if (this.checked) {
      order.extras.push(key);
    } else {
      const i = order.extras.indexOf(key);
      if (i > -1) order.extras.splice(i, 1);
    }
    console.log(order);
    updateCup();
    updateSummary();
  });
});


// document.querySelectorAll('input[name="drink"]').forEach((i) => i.checked = i.value === order.drink);
// document.querySelectorAll('input[name="size"]').forEach((i) => i.checked = i.value === order.size);
// document.querySelectorAll('input[name="milk"]').forEach((i) => i.checked = i.value === order.milk);
// document.querySelectorAll('input[name="extras"]').forEach((i) => i.checked = false);


updateCup();
updateSummary();

