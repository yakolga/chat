document.querySelectorAll('.form__tab').forEach(button => {
  button.addEventListener('click', () => {
    // Usuń klasę active z aktualnie aktywnego przycisku
    document.querySelector('.form__tab.active').classList.remove('active');

    // Dodaj klasę active do klikniętego przycisku
    button.classList.add('active');

    // Ukryj aktualnie wyświetlaną treść
    document.querySelector('.tab__content.active').classList.remove('active');

    // Pokaż treść związane z klikniętym przyciskiem
    const target = button.getAttribute('data-target');
    document.querySelector(`.${target}`).classList.add('active');
  });

  // Pobranie elementów
  const quantitySelect = document.getElementById('quantity');
  const totalInput = document.getElementById('total');

  // Dodanie funkcji do zdarzenia 'change'
  quantitySelect.addEventListener('change', function () {
    // Obliczenie wartości
    const total = this.value * 39 + 10;

    // Ustawienie wartości w inpucie
    totalInput.value = total;
  });
});