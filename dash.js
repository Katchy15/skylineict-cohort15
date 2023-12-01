
  function displayRemainingMonths() {
    const offerExpiryMonth = 5; // Example: April
    const offerExpiryYear = 2024; // Example: 2024

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const currentYear = currentDate.getFullYear();

    const monthsRemaining = (offerExpiryYear - currentYear) * 12 + offerExpiryMonth - currentMonth;

    const expiryInfoElement = document.getElementById('expiryInfo');

    if (monthsRemaining > 0) {
      expiryInfoElement.textContent = ` ${monthsRemaining}`;
    } else {
      expiryInfoElement.textContent = "Training period Complete.";
    }
  }

  // Call the function to display the remaining months
  displayRemainingMonths();
