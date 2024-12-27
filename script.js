// script.js
document.addEventListener('DOMContentLoaded', () => {
    const watchImage = document.getElementById('watch-image');
    const caseOptions = document.querySelectorAll('#case-options .option');
    const sizeOptions = document.querySelectorAll('input[name="size"]');
    const bandOptions = document.querySelectorAll('#band-options .option');
    const totalPriceElement = document.getElementById('total-price');
  
    let currentPrice = 399; // Base price
  
    // Case Selection
    caseOptions.forEach(option => {
      option.addEventListener('click', () => {
        const image = option.dataset.image;
        watchImage.src = image;
      });
    });
  
    // Size Selection
    sizeOptions.forEach(option => {
      option.addEventListener('change', () => {
        const price = parseInt(option.dataset.price, 10);
        currentPrice = price;
        updatePrice();
      });
    });
  
    // Band Selection
    bandOptions.forEach(option => {
      option.addEventListener('click', () => {
        const image = option.dataset.image;
        watchImage.src = image;
      });
    });
  
    // Update Price
    function updatePrice() {
      totalPriceElement.textContent = currentPrice;
    }
  });
  