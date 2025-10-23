const $ = (sel) => document.querySelector(sel);
const KEY = "sumFlowItems";
const values = JSON.parse(localStorage.getItem(KEY) || "[]");
const sum = values.reduce((a, b) => a + b, 0);

document.querySelector("#result").textContent =
  values.length > 0
    ? `Resultado: ${values.join(" + ")} = ${sum}`
    : "No hay datos disponibles.";

$("#btnBack")?.addEventListener("click", () => {
  window.location.href = "../dashboard/dashboard.html";
});
$("#btnExit")?.addEventListener("click", () => {
  localStorage.removeItem(KEY);
  window.location.href = "../login/login.html";
});
