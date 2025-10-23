const $ = (sel) => document.querySelector(sel);
const numInput = $("#numItems");
const itemsDiv = $("#items");
const instructions = $("#instructions");
const KEY = "sumFlowItems";

$("#btnGenerate")?.addEventListener("click", () => {
  const n = parseInt(numInput?.value, 10);
  if (!n || n < 1) return;
  itemsDiv.innerHTML = "";
  const values = [];
  for (let i = 0; i < n; i++) {
    const val = Math.floor(Math.random() * 101);
    values.push(val);
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = String(val);
    itemsDiv.appendChild(div);
  }
  localStorage.setItem(KEY, JSON.stringify(values));
});

$("#btnToggleInstructions")?.addEventListener("click", () => {
  instructions?.classList.toggle("hidden");
});

$("#btnContinue")?.addEventListener("click", () => {
  window.location.href = "../summary/summary.html";
});

$("#btnExit")?.addEventListener("click", () => {
  localStorage.removeItem(KEY);
  window.location.href = "../login/login.html";
});
