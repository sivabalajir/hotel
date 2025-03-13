// Function for User Login – Redirects to userDashboard.html
function userLogin() {
  window.location.href = "userDashboard.html";
}

// Function for Admin Login – Redirects to adminDashboard.html
function adminLogin() {
  window.location.href = "adminDashboard.html";
}

// Function to show the booking form when "Book Now" is clicked
function bookHotel(hotelName) {
  document.getElementById("bookingForm").style.display = "block";
}

// Function to confirm a booking and display a success message
function confirmBooking() {
  document.getElementById("bookingMessage").style.display = "block";
}

// Function to cancel a booking; hides the booking row and shows a cancellation message
function cancelBooking(bookingId) {
  document.getElementById(bookingId).style.display = "none";
  document.getElementById("cancelMessage").style.display = "block";
}
