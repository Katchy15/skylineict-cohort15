
  let startTime;
  let endTime;

  function startTimer() {
    startTime = new Date();
  }

  function endTimer() {
    if (!startTime) {
      alert("Please reload page first!");
      return;
    }

    endTime = new Date();

    // Calculate the time difference in seconds
    const timeSpent = (endTime - startTime) / 1000;

    // Display the time spent on the event
    document.getElementById("timeDisplay").innerText = `: ${timeSpent.toFixed(2)} seconds`;

    // Reset start time for future events
    startTime = null;
  }

  // Automatically start the timer when the page loads
  window.onload = function() {
    startTimer();
  };

  // Optionally, you can automatically end the timer after a certain duration
  // setTimeout(endTimer, 5000); // This will end the timer after 5 seconds (adjust as needed)
