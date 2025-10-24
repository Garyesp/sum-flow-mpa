const $ = (sel) => document.querySelector(sel);

$("#btnLogin")?.addEventListener("click", () => {
  const user = $("#user")?.value.trim();
  const pass = $("#pass")?.value.trim();
  if (user === "admin" && pass === "1234") {
    window.location.href = "../dashboard/dashboard.html";
  } else {
    window.location.href = "../error/error.html";
  }
});

$("#btnHome")?.addEventListener("click", () => {
  window.location.href = "../../../index.html";
});
