let heartCount = 0;
let coinCount = 100;
let callHistory = [];

// heart count
function increaseHeartCount() {
  heartCount++;
  const heartCountElement = document.getElementById("heart-count");
  heartCountElement.innerText = heartCount;
}

function handleCall(serviceName, serviceNumber) {
  if (coinCount < 20) {
    alert("Not enough coins to make the call!");
    return;
  }

  // Show alert
  alert(`Calling: ${serviceName} - ${serviceNumber}`);

  coinCount -= 20;
  const coinCountElement = document.getElementById("coin-count");
  coinCountElement.innerText = coinCount;

  callHistory.push({ serviceName, serviceNumber, time: new Date().toLocaleTimeString() });
  updateCallHistory();

  if (coinCount < 20) {
    alert("You now have less than 20 coins.");
  }
}

// Update the Call History section
function updateCallHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = ""; 

  callHistory.forEach(call => {
    const callItem = document.createElement("div");
    callItem.classList.add("flex", "justify-between", "bg-gray-100", "p-2", "rounded-md", "mb-2");

    callItem.innerHTML = `
      <p class="font-semibold">${call.serviceName} <span class="font-light">(${call.serviceNumber})</span></p>
      <span class="font-normal text-sm">${call.time}</span>  <!-- Displays the time of the call -->
    `;
    
    historyList.appendChild(callItem);
  });
}

// Clear the call history
function clearHistory() {
  callHistory = [];  
  updateCallHistory();  
}

// To handle the Copy button click
function handleCopy(serviceNumber, serviceName) {
  const textToCopy = `${serviceName}: ${serviceNumber}`;

  navigator.clipboard.writeText(textToCopy)
    .then(() => alert(`${textToCopy} copied to clipboard!`)) 
    .catch(err => alert("Failed to copy to clipboard"));
}
