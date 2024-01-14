btnMenu.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    MenuSite.forEach((itemMenu) => {
      itemMenu.classList.remove("active");
      itemMenu.addEventListener("mouseout", () => {
        itemMenu.classList.remove("active");
        btnMenu.forEach((itemBtn) => {
          itemBtn.classList.remove("active");
        });
      });
    });

    btnMenu.forEach((itemBtn) => {
      itemBtn.classList.remove("active");
    });

    btn.classList.add("active");
    MenuSite[index].classList.add("active");
  });
});
