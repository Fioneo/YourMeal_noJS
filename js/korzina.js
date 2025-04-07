
  document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.querySelector(".korzina");
    const orderListMenu = document.querySelector(".order-list-menu");

    cartButton.addEventListener("click", function () {
      orderListMenu.style.display = orderListMenu.style.display === "block" ? "none" : "block";
    });

    const closeBtn = document.querySelector(".close_order-list");
    closeBtn.addEventListener("click", function () {
      orderListMenu.style.display = "none";
    });
  });