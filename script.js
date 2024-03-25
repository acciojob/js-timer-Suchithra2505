// write js code here if required
function updateTimer() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero based
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const timer = document.getElementById('timer');
  timer.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initial call to update timer immediately
updateTimer();
