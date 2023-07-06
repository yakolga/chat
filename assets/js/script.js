document.querySelectorAll('.form__tab').forEach(button => {
  button.addEventListener('click', () => {

    document.querySelector('.form__tab.active').classList.remove('active');
    button.classList.add('active');
    document.querySelector('.tab__content.active').classList.remove('active');
    const target = button.getAttribute('data-target');
    document.querySelector(`.${target}`).classList.add('active');
  });

  const quantitySelect = document.getElementById('quantity');
  const totalInput = document.getElementById('total');
  quantitySelect.addEventListener('change', function () {
    const total = this.value * 39 + 10;
    totalInput.value = total;
  });

  const links = document.querySelectorAll(".smooth-scroll");

  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
});