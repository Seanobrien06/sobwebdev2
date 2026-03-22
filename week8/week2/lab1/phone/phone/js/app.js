
// Get references to the buttons and the status div
const acceptButton = document.querySelector("#acceptButton");
const declineButton = document.querySelector("#declineButton");
const messageButton = document.querySelector("#messageButton");
const callStatus = document.querySelector("#callStatus");
//const msg = document.querySelector("#phoneMessage");

// Add event listener for the "Accept" button
acceptButton.addEventListener("click", () => {
    callStatus.textContent = "Call Accepted!";
    callStatus.className = "accepted"; // Apply accepted style
    // msg.style.display = "none";
});

// Add event listener for the "Decline" button
declineButton.addEventListener("click", () => {
    callStatus.textContent = "Call Declined.";
    callStatus.className = "declined"; // Apply declined style
    // msg.style.display = "none";
});

// Add event listener for the "Message" button
messageButton.addEventListener("click", () => {
    callStatus.textContent = "Sending Message...";
    callStatus.className = "message"; // Apply message style
    setTimeout(() => {
        alert("I will call you later"); // Show alert after update
    }, 1000);
});
